import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

function Account() {
  return (
    <div>
      <Head>
        <title>Login - Sun Gym</title>
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
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>Nom :</div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>Prénom :</div>
          </div>

          <div style={{ marginBottom: 40, marginTop: 40 }}>
            <div className='formule-actuelle'>Adresse Physique et Electronique</div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>Rue :</div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>Ville :</div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>Code postal :</div>
            <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>Email :</div>
          </div>

          <div className='formule-actuelle'>Gestion de mon compte</div>
          <div className='resp-btn' style={{ display: 'flex' }}>
            <Link href='/abonnement'>
              <button style={{ marginRight: 40 }} className='btn-select'>
                Informations Abonnement
              </button>
            </Link>
            <Link href='/infochange'>
              <button className='btn-select'>Modifier mes informations</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Account;
