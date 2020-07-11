import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Router from 'next/router';
import api from 'helpers/api';
import { AuthContext } from 'context/auth';
import Cookies from 'js-cookie';
import isUserLoggedIn from 'helpers/isUserLoggedIn';
import redirectTo from 'helpers/redirectTo';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

function Register() {
  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();

  const { setUserData } = useContext(AuthContext);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { prenom, nom, email, password, passwordCheck };
      await api.post('users/register', newUser);
      const loginRes = await api.post('users/login', { email, password });

      Cookies.set('auth-token', loginRes.data.token, { expires: 60 });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      Router.push('/tarifs');
    } catch (err) {
      if (err.response.data.msg) cogoToast.error(err.response.data.msg, toastOptions);
    }
  };
  return (
    <div>
      <div className='subscribe-page'>
        <Head>
          <title>S'inscrire - Sun Gym</title>
        </Head>
        <Navbar />

        <form className='form-container' onSubmit={submit}>
          <h2 className='h2-title'>Inscription</h2>
          <div className='form-input-div'>
            <input
              type='text'
              id='prenom'
              name='prenom'
              value={prenom || ''}
              placeholder='Prénom'
              required
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>

          <div className='form-input-div'>
            <input
              type='text'
              id='nom'
              name='nom'
              value={nom || ''}
              placeholder='Nom'
              required
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

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

          <div className='form-input-div'>
            <input
              type='password'
              id='password2'
              name='password2'
              placeholder='Confirmer le Mot de passe'
              required
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </div>

          <input type='submit' className='subscribe-btn' value="S'INSCRIRE" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

// EXECUTES BEFORE PAGE LOADS
Register.getInitialProps = async (ctx) => {
  // CHECKS IF USER IS LOGGED IN
  const { isLoggedIn } = await isUserLoggedIn(ctx);

  if (isLoggedIn) {
    redirectTo(ctx, '/compte');
    // Must return an object
  }
  return { isLoggedIn: isLoggedIn };
};

export default Register;
