import React from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Link from 'next/link';
import Footer from 'components/Footer';
import api from 'helpers/api';
import isUserLoggedIn from 'helpers/isUserLoggedIn';

function Compte({ user }) {
  return (
    <div>
      <Head>
        <title>Compte - Sun Gym</title>
      </Head>
      <Navbar />

      <div className='account-page'>
        <div className='abonnement-infos-container'>
          <div>
            <h2 className='h2-title' style={{ marginTop: 25 }}>
              Mon Compte
            </h2>
          </div>
          <div>
            <div style={{ marginBottom: 40 }} className='formule-actuelle'>
              Civilité
            </div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
              <span style={{ color: 'yellow', marginRight: 15 }}>Nom :</span> {user.nom}
            </div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
              <span style={{ color: 'yellow', marginRight: 15 }}>Prénom : </span> {user.prenom}
            </div>
          </div>

          <div style={{ marginBottom: 40, marginTop: 40 }}>
            <div className='formule-actuelle'>Adresse Physique et Electronique</div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
              <span style={{ color: 'yellow', marginRight: 15 }}>Rue : </span>
              {user.adresse || 'N/A'}
            </div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
              <span style={{ color: 'yellow', marginRight: 15 }}>Ville : </span>
              {user.ville || 'N/A'}
            </div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
              <span style={{ color: 'yellow', marginRight: 15 }}>Code postal :</span>{' '}
              {user.codePostal || 'N/A'}
            </div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
              <span style={{ color: 'yellow', marginRight: 15 }}>Email :</span>{' '}
              {user.email || 'N/A'}
            </div>
          </div>

          <div className='formule-actuelle'>Gestion de mon compte</div>
          <div className='resp-btn' style={{ display: 'flex' }}>
            <Link href='/abonnement' passHref>
              <a style={{ marginRight: 40 }} className='btn-select'>
                Informations Abonnement
              </a>
            </Link>
            <Link href='/infochange'>
              <a className='btn-select'>Modifier mes informations</a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// EXECUTES BEFORE PAGE LOADS
Compte.getInitialProps = async (ctx) => {
  // CHECKS IF USER IS LOGGED IN
  const { token, isLoggedIn } = await isUserLoggedIn(ctx, '/login');

  if (isLoggedIn) {
    // GET USER DATA FROM API
    const user = await api.get('account', {
      headers: { 'x-auth-token': token },
    });
    // Must return an object
    return { isLoggedIn: isLoggedIn, user: user.data };
  }
  if (!isLoggedIn) return { isLoggedIn: isLoggedIn };
};

export default Compte;
