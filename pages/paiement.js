import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Payments() {
  const [activeTab, setActiveTab] = useState(1);

  if (activeTab === 1) {
    return (
      <div>
        <Head>
          <title>Paiement-étape1 - Sun Gym</title>
        </Head>
        <Navbar />
        <div className='paiement-bg'>
          <div className='tabs-payment'>
            <div className='tabs'>
              <div style={{ backgroundColor: activeTab === 1 ? 'yellow' : 'grey' }}>Etape 1</div>
              <div
                style={{ backgroundColor: activeTab === 2 ? 'yellow' : 'grey' }}
                onClick={() => setActiveTab(2)}
              >
                Etape 2
              </div>
              <div
                style={{ backgroundColor: activeTab === 3 ? 'yellow' : 'grey' }}
                onClick={() => setActiveTab(3)}
              >
                Etape 3
              </div>
            </div>
            <div className='tab-content'>
              <h3>Informations de facturation</h3>
              <form className='paiment-form'>
                <label>Prénom :</label>
                <input className='paiement-input' type='text' placeholder='ex: Jean'></input>

                <label>Nom :</label>
                <input className='paiement-input' type='text' placeholder='ex: Durand'></input>

                <label>Adresse :</label>
                <input
                  className='paiement-input'
                  type='text'
                  placeholder='ex: 2 rue des lillas'
                ></input>

                <label>Ville :</label>
                <input className='paiement-input' type='text' placeholder='ex: Lyon'></input>

                <label>Code Postal:</label>
                <input className='paiement-input' type='text' placeholder='ex: 69000'></input>

                <button className='btn-select' type='submit'>
                  Valider{' '}
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if (activeTab === 2) {
    return (
      <div>
        <Head>
          <title>Paiement-étape2 - Sun Gym</title>
        </Head>
        <Navbar />
        <div className='paiement-bg'>
          <div className='tabs-payment'>
            <div className='tabs'>
              <div
                style={{ backgroundColor: activeTab === 1 ? 'yellow' : 'grey' }}
                onClick={() => setActiveTab(1)}
              >
                Etape 1
              </div>
              <div style={{ backgroundColor: activeTab === 2 ? 'yellow' : 'grey' }}>Etape 2</div>
              <div
                style={{ backgroundColor: activeTab === 3 ? 'yellow' : 'grey' }}
                onClick={() => setActiveTab(3)}
              >
                Etape 3
              </div>
            </div>
            <div className='tab-content'>
              <h3>Mon Abonnement</h3>
              <form className='paiment-form'>
                <label>Choissez un Abonnement</label>
                <select className='paiement-input'>
                  <option>Après-Midi, 29.90$</option>
                  <option>Journée, 39.90$</option>
                  <option>Anytime, 54.90$</option>
                  <option>Etudiant, 39.90$</option>
                  <option>Année Scolaire, 49.90$</option>
                  <option>Week-End, 29.90$</option>
                </select>
                <button className='btn-select' type='submit'>
                  Confirmer mon choix
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if (activeTab === 3) {
    return (
      <div>
        <Head>
          <title>Paiement-étape3 - Sun Gym</title>
        </Head>
        <Navbar />
        <div className='paiement-bg'>
          <div className='tabs-payment'>
            <div className='tabs'>
              <div
                style={{ backgroundColor: activeTab === 1 ? 'yellow' : 'grey' }}
                onClick={() => setActiveTab(1)}
              >
                Etape 1
              </div>
              <div
                style={{ backgroundColor: activeTab === 2 ? 'yellow' : 'grey' }}
                onClick={() => setActiveTab(2)}
              >
                Etape 2
              </div>
              <div style={{ backgroundColor: activeTab === 3 ? 'yellow' : 'grey' }}>Etape 3</div>
            </div>
            <div className='tab-content'>
              <h3>Moyen de Paiement</h3>
              <form className='paiment-form'>
                <label>Nom du Titulaire de la carte :</label>
                <input className='paiement-input' type='text' placeholder='ex: Jean Durand'></input>

                <label>Carte de Paiement</label>
                <div>button stripe pour numero carte a introduire ici</div>

                <p>Paiement sécurisé par Stripe</p>
                <button className='btn-select' type='submit'>
                  Valider et payer xx.xx$
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Payments;
