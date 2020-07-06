import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import api from 'helpers/api';
import Router from 'next/router';
import { AuthContext } from 'context/auth';
import Cookies from 'js-cookie';
import isUserLoggedIn from 'helpers/isUserLoggedIn';
import redirectTo from 'helpers/redirectTo';
import Link from 'next/link';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(AuthContext);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = { email, password };
      const loginRes = await api.post('users/login', loginUser);

      Cookies.set('auth-token', loginRes.data.token, { expires: 60 });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      Router.push('/compte');
    } catch (err) {
      if (err.response.data.msg) cogoToast.error(err.response.data.msg, toastOptions);
    }
  };
  return (
    <div>
      <div className='subscribe-page'>
        <Head>
          <title>Se connecter - Sun Gym</title>
        </Head>
        <Navbar />

        <form className='form-container' onSubmit={submit}>
          <h2 className='h2-title'>CONNEXION</h2>

          <div className='form-input-div'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-input-div'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Mot de passe'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link href='/forgotpass' passHref>
            <a>Mot de passe oublié ?</a>
          </Link>

          <input type='submit' className='subscribe-btn' value='SE CONNECTER' />
        </form>
      </div>
      <Footer />
    </div>
  );
}

// EXECUTES BEFORE PAGE LOADS
Login.getInitialProps = async (ctx) => {
  // CHECKS IF USER IS LOGGED IN
  const { isLoggedIn } = await isUserLoggedIn(ctx);

  if (isLoggedIn) {
    redirectTo(ctx, '/compte');
    // Must return an object
  }
  return { isLoggedIn: isLoggedIn };
};

export default Login;
