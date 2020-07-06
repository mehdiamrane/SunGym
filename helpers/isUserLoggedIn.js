import Cookies from 'js-cookie';
import api from 'helpers/api';
import redirectTo from 'helpers/redirectTo';

async function isUserLoggedIn(ctx, redirectPath) {
  // BASEURL
  let baseUrl;
  let protocol;
  if (ctx.req) {
    // SSR
    protocol = ctx.req.headers['x-forwarded-proto'] || 'http';
    baseUrl = `${protocol}://${ctx.req.headers.host}`;
  } else {
    // CSR
    protocol = window.location.protocol;
    baseUrl = `${protocol}//${
      window.location.hostname + (window.location.port ? ':' + window.location.port : '')
    }`;
  }

  let token = null;
  // if context has request info aka Server Side
  if (ctx.req && ctx.req.headers.cookie !== undefined) {
    // ugly way to get cookie value from a string of values
    token = ctx.req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)auth-token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
  } else {
    // we dont have request info aka Client Side
    token = Cookies.get('auth-token');
  }

  if (token !== undefined) {
    // FETCH BACK TO DECODE TOKEN
    const response = await api.post('users/tokenisvalid', null, {
      headers: { 'x-auth-token': token },
    });

    if (response.status === 200) {
      // Don't really care about response, as long as it not an error
      return { token: token, isLoggedIn: true };
    } else {
      // Error, token is invalid
      if (redirectPath) {
        redirectTo(ctx, redirectPath);
        return { token: null, isLoggedIn: false };
      } else {
        return { token: null, isLoggedIn: false };
      }
    }
  } else {
    // Error, token is undefined
    if (redirectPath) {
      redirectTo(ctx, redirectPath);
      return { token: null, isLoggedIn: false };
    } else {
      return { token: null, isLoggedIn: false };
    }
  }
}

export default isUserLoggedIn;
