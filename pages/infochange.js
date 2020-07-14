import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import api from 'helpers/api';
import isUserLoggedIn from 'helpers/isUserLoggedIn';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';
import Router from 'next/router'

function Infochange({ token }) {
  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [prenom, setPrenom] = useState();
  const [adresse, setAdresse] = useState();
  const [codePostal, setCodePostal] = useState();
  const [ville, setVille] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      const apiRes = await api.get('account/', {
        headers: { 'x-auth-token': token },
      });
      setEmail(apiRes.data.email);
      setNom(apiRes.data.nom);
      setPrenom(apiRes.data.prenom);
      setAdresse(apiRes.data.adresse);
      setCodePostal(apiRes.data.codePostal);
      setVille(apiRes.data.ville);
    };
    getUserInfo();
  }, []);

  const submitInfo = async (e) => {
    e.preventDefault();

    try {
      const data = { email, nom, prenom, adresse, ville, codePostal };
      const apiRes = await api.post('account/informations', data, {
        headers: { 'x-auth-token': token },
      });
      if (apiRes) {
        cogoToast.success('Les informations ont bien été enregistrées', toastOptions);
        Router.push('/compte');
    };
    } catch (err) {
      if (err.response.data.msg) cogoToast.error(err.response.data.msg, toastOptions);
    }
  };

  return (
    <div className='change-info-form-container'>
      <Head>
        <title>Modifier mes informations - Sun Gym</title>
      </Head>
      <Navbar />
      <div className='infos-form-container'>
        <form className='change-info-form' onSubmit={submitInfo}>
          <h2 className='h2-title'>MODIFIER MES INFORMATIONS</h2>

          <div
            className='respChange'
            style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
          >
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
          </div>

          <div
            className='respChange'
            style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
          >
            <div className='form-input-div'>
              <input
                type='email'
                id='email'
                name='email'
                value={email || ''}
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div
            className='respChange'
            style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}
          >
            <div className='form-input-div'>
              <input
                type='text'
                id='adresse'
                name='adresse'
                value={adresse || ''}
                placeholder='Adresse'
                required
                onChange={(e) => setAdresse(e.target.value)}
              />
            </div>
            <div className='form-input-div'>
              <input
                type='number'
                id='code-postal'
                name='code-postal'
                value={codePostal || ''}
                placeholder='Code Postal'
                required
                maxLength={5}
                onChange={(e) => setCodePostal(e.target.value)}
              />
            </div>

            <div className='form-input-div'>
              <input
                type='text'
                id='ville'
                name='ville'
                value={ville || ''}
                placeholder='Ville'
                required
                onChange={(e) => setVille(e.target.value)}
              />
            </div>
          </div>
          <input className='btn-select' type='submit' value='Valider' />
        </form>
      </div>
      <Footer />
    </div>
  );
}

// EXECUTES BEFORE PAGE LOADS
Infochange.getInitialProps = async (ctx) => {
  // CHECKS IF USER IS LOGGED IN
  const { token, isLoggedIn } = await isUserLoggedIn(ctx, '/login');

  // Must return an object
  if (isLoggedIn) return { token: token };
  if (!isLoggedIn) return { isLoggedIn: isLoggedIn };
};

export default Infochange;
