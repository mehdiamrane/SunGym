import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import api from 'helpers/api';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

export default function ForgotPass() {
  const [email, setEmail] = useState();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const resetEmail = { email };
      await api.post('users/forgot', resetEmail);

      cogoToast.success(
        'Le lien pour réinitialiser le mot de passe a été envoyé dans votre boite mail.',
        toastOptions
      );
    } catch (err) {
      if (err.response.data.msg) cogoToast.error(err.response.data.msg, toastOptions);
    }
  };

  return (
    <div>
      <div className='subscribe-page'>
        <Head>
          <title>Mot de passe oublié - Sun Gym</title>
        </Head>
        <Navbar />

        <form className='form-container' onSubmit={submit}>
          <h2 className='h2-title' style={{textAlign:'center'}}>CHANGER MON MOT DE PASSE</h2>
          <p>Entrez votre email pour réinitialiser le mot de passe</p>
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

          <input type='submit' value='CONFIRMER' className='subscribe-btn' />
        </form>
      </div>
      <Footer />
    </div>
  );
}
