import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import api from 'helpers/api';
import Router from 'next/router';
import redirectTo from 'helpers/redirectTo';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

export default function ResetPage({ canReset, email, errorMessage }) {
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  if (errorMessage) {
    cogoToast.error(errorMessage, toastOptions);
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = { email, password, passwordCheck };
      await api.post('users/reset', data);

      cogoToast
        .success('Mot de passe réinitialisé, vous pouvez vous connecter', toastOptions)
        .then(() => {
          Router.push('/login');
        });
    } catch (err) {
      if (err.response.data.msg) cogoToast.error(err.response.data.msg, toastOptions);
    }
  };

  return (
    <div>
      <div className='subscribe-page'>
        <Head>
          <title>Réinitialiser le mot de passe - Sun Gym</title>
        </Head>
        <Navbar />

        <form className='form-container' onSubmit={submit}>
          <h2 className='h2-title'>RÉINITIALISER</h2>
          <p>Entrez votre nouveau mot de passe</p>

          <div className='form-input-div'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              value={email}
              required
              disabled
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
              disabled={!canReset}
            />
          </div>

          <div className='form-input-div'>
            <input
              type='password'
              id='password2'
              name='password2'
              placeholder='Password'
              required
              onChange={(e) => setPasswordCheck(e.target.value)}
              disabled={!canReset}
            />
          </div>

          <input type='submit' value='CONFIRMER' className='subscribe-btn' disabled={!canReset} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

// EXECUTES BEFORE PAGE LOADS
ResetPage.getInitialProps = async (ctx) => {
  try {
    // CHECKS IF USER CAN RESET
    const { resetPassToken } = ctx.query;

    if (!resetPassToken) {
      redirectTo(ctx, '/');
      return { canReset: false };
    }

    const tokenCheck = await api.get(`users/reset/${resetPassToken}`);

    if (tokenCheck.data.email) {
      return { canReset: true, email: tokenCheck.data.email };
    } else {
      return { canReset: false };
    }
  } catch (err) {
    if (err.response.data.msg) return { canReset: false, errorMessage: err.response.data.msg };
  }
};
