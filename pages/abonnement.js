import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Abonnement() {
  return (
    <div className='abonnement'>
      <Head>
        <title>Login - Sun Gym</title>
      </Head>
      <Navbar />
      <div className='abonnement-infos-container'>
        <div>
          <h2>Abonnement</h2>
        </div>
        <div>
          <div style={{ marginBottom: 40 }} className='formule-actuelle'>
            FORMULE ACTUELLE
          </div>
          <h3>Formule ANYTIME</h3>
          <div>54,99$ / Mois</div>
          <p>Votre abonnement se renouvelera le 1er Juin 2020</p>
        </div>

        <div style={{ marginBottom: 40 }}>
          <div className='formule-actuelle'>MOYEN DE PAIEMENT</div>
          <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>
            **** **** **** 4976
          </div>
          <div style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}>08/2022</div>
        </div>

        <div>
          <div className='formule-actuelle'>HISTORIQUE DE FACTURATION</div>
          {/* modele a maper pour ligne de facturation */}
          <div
            style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}
            className='paid-month-ligne'
          >
            <div style={{ width: '40%' }}>JUIN 2020</div>
            <div style={{ width: '30%' }}>54,99$</div>
            <div style={{ width: '30%' }}>Payé</div>
          </div>
          <div
            style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}
            className='paid-month-ligne'
          >
            <div style={{ width: '40%' }}>MAI 2020</div>
            <div style={{ width: '30%' }}>54,99$</div>
            <div style={{ width: '30%' }}>Payé</div>
          </div>
          <div
            style={{ display: 'flex', marginBottom: 10, marginTop: 10 }}
            className='paid-month-ligne'
          >
            <div style={{ width: '40%' }}>AVRIL 2020</div>
            <div style={{ width: '30%' }}>54,99$</div>
            <div style={{ width: '30%' }}>Payé</div>
          </div>

          <div style={{ marginTop: 35 }} className='formule-actuelle'>
            ANNULER MON ABONNEMENT
          </div>
          <div
            style={{ display: 'flex', marginBottom: 10, marginTop: 20 }}
            className='paid-month-ligne'
          >
            <div style={{ color: '#e9ee00' }}>
              <i>
                Pour toute demande de remboursement ou de résiliation, veuillez contacter
                directement l'établissement
              </i>{' '}
              <Link passHref href='/contact'>
                <a>ici</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Abonnement;
