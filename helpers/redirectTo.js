import Router from 'next/router';

const redirectTo = (ctx, redirectPath) => {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: redirectPath,
    });
    ctx.res.end();
  } else {
    Router.push(redirectPath);
  }
};

export default redirectTo;
