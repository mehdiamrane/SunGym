import React from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Link from 'next/link';
import Footer from 'components/Footer';

function Tarifs() {
  return (
    <div className='tarifs'>
      <Head>
        <title>Tarifs - Sun Gym</title>
      </Head>
      <Navbar />
      <h2 className='h2-title'>Nos formules</h2>
      <div className='cards-container'>
        <div className='price-card-one'>
          <div className='formule-name'>APRES MIDI</div>
          <div className='formule-price'>
            29,90 $<span> / 28 jours</span>
          </div>
          <div className='formule-detail'>
            <div className='detail-ligne'> - 10% si paiement en une fois</div>
            <div className='detail-ligne'>Acces de 14H00 à 17H00 uniquement </div>
            <div className='detail-ligne'>Accès illimité</div>
            <div className='detail-ligne'></div>
          </div>
          <Link href='/paiement' passHref>
            <a className='select-btn'>JE M'INSCRIS</a>
          </Link>
        </div>

        <div className='price-card-two'>
          <div className='formule-name'>JOURNEE</div>
          <div className='formule-price'>
            39,90 $<span> / 28 jours</span>
          </div>
          <div className='formule-detail'>
            <div className='detail-ligne'> - 10% si paiement en une fois</div>
            <div className='detail-ligne'>Accès Libre de 7H00 à 17H00</div>
            <div className='detail-ligne'>Accès illimité</div>
            <div className='detail-ligne'></div>
          </div>
          <Link href='/paiement' passHref>
            <a className='select-btn'>JE M'INSCRIS</a>
          </Link>
        </div>

        <div className='price-card-two'>
          <div className='formule-name'>ANYTIME</div>
          <div className='formule-price'>
            54,90 $<span> / 28 jours</span>
          </div>
          <div className='formule-detail'>
            <div className='detail-ligne'> - 10% si paiement en une fois</div>
            <div className='detail-ligne'>Accès Libre de 7H00 à 22H00</div>
            <div className='detail-ligne'>Accès illimité</div>
            <div className='detail-ligne'></div>
          </div>
          <Link href='/paiement' passHref>
            <a className='select-btn'>JE M'INSCRIS</a>
          </Link>
        </div>

        <div className='price-card-two'>
          <div className='formule-name'>WEEK END</div>
          <div className='formule-price'>
            29,90 $<span> / 28 jours</span>
          </div>
          <div className='formule-detail'>
            <div className='detail-ligne'>- 10% si paiement en une fois</div>
            <div className='detail-ligne'>Accès Libre de 7H00 à 22H00</div>
            <div className='detail-ligne'>Uniquement Samedi et Dimanche</div>
            <div className='detail-ligne'></div>
          </div>
          <Link href='/paiement' passHref>
            <a className='select-btn'>JE M'INSCRIS</a>
          </Link>
        </div>

        <div className='price-card-two'>
          <div className='formule-name'>ETUDIANTE</div>
          <div className='formule-price'>
            39,90 $<span> / 28 jours</span>
          </div>
          <div className='formule-detail'>
            <div className='detail-ligne'>- 10% si paiement en une fois</div>
            <div className='detail-ligne'>Accès Libre de 7H00 à 22H00</div>
            <div className='detail-ligne'>Acces illimité</div>
            <div className='detail-ligne'>Uniquement sous présentation d'une carte étudiante</div>
            <div className='detail-ligne'>Pas de paiement en ligne</div>
          </div>
          <Link href='/paiement' passHref>
            <a className='select-btn'>JE M'INSCRIS</a>
          </Link>
        </div>

        <div className='price-card-two'>
          <div className='formule-name'>ANNEE SCOLAIRE</div>
          <div className='formule-price'>
            49,90 $<span> / 28 jours</span>
          </div>
          <div className='formule-detail'>
            <div className='detail-ligne'>- 10% si paiement en une fois</div>
            <div className='detail-ligne'>Accès Libre de 7H00 à 22H00</div>
            <div className='detail-ligne'>Uniquement Septembre à fin Juin</div>
            <div className='detail-ligne'></div>
          </div>
          <Link href='/paiement' passHref>
            <a className='select-btn'>JE M'INSCRIS</a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tarifs;
