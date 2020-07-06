import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  return (
    <div>
      <div className='subscribe-page'>
        <Head>
          <title>Se connecter ! - Sun Gym</title>
        </Head>
        <Navbar />

        <form className='form-container'>
          <h2 className='h2-title'>CONNEXION</h2>

          <div className='form-input-div'>
            <input type='email' name='email' placeholder='Email'></input>
          </div>

          <div className='form-input-div'>
            <input type='password' name='password' placeholder='Mot de passe'></input>
          </div>

          <button className='subscribe-btn' type='submit'>
            SE CONNECTER
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
