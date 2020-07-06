import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Link from 'next/link';
import isUserLoggedIn from 'helpers/isUserLoggedIn';
import api from 'helpers/api';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Moment from 'helpers/Moment';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

const CreditCard = (props) => {
  const { last4, brand, exp_month, exp_year } = props.card;
  return (
    <label htmlFor={props.pm}>
      <input
        type='radio'
        id={props.pm}
        name='defaultCard'
        value={props.pm}
        checked={props.isChecked}
        onChange={props.setCard}
      />
      {brand} **** **** **** {last4} exp. {exp_month}/{exp_year}{' '}
      {props.default ? '(par défault)' : ''}
    </label>
  );
};

function Abonnement({ token, subs, invoices }) {
  const stripe = useStripe();
  const elements = useElements();

  const [setupIntent, setSetupIntent] = useState();
  const [wallet, setWallet] = useState([]);
  const [defaultCard, setDefaultCard] = useState();
  const [newDefaultCard, setNewDefaultCard] = useState();

  // WALLET //
  const getWallet = async () => {
    const paymentMethods = await api.get('wallet', {
      headers: { 'x-auth-token': token },
    });
    const defaultPaymentmethod = await api.get('wallet/default', {
      headers: { 'x-auth-token': token },
    });
    setWallet(paymentMethods.data);
    setDefaultCard(defaultPaymentmethod.data);
    setNewDefaultCard(defaultPaymentmethod.data);
  };

  // Get the user's wallet on mount
  useEffect(() => {
    getWallet();
  }, []);

  // Create the setup intent
  const createSetupIntent = async () => {
    const si = await api.post(
      'wallet',
      {},
      {
        headers: { 'x-auth-token': token },
      }
    );
    setSetupIntent(si.data);
  };

  // Handle the submission of card details
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);

    // Confirm Card Setup
    const { setupIntent: updatedSetupIntent, error } = await stripe.confirmCardSetup(
      setupIntent.client_secret,
      {
        payment_method: { card: cardElement },
      }
    );

    if (error) {
      cogoToast.error(error.message, toastOptions);
    } else {
      setSetupIntent(updatedSetupIntent);
      await getWallet();
      cogoToast.success('La carte a bien été ajoutée au compte', toastOptions);
    }
  };

  // Handle the submission of new default card
  const handleDefaultCard = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        'wallet/default',
        { payment_method: newDefaultCard },
        {
          headers: { 'x-auth-token': token },
        }
      );

      await getWallet();
      cogoToast.success(
        'La carte a bien été définie comme moyen de paiement par défault.',
        toastOptions
      );
    } catch (err) {
      if (err.response.data.msg) cogoToast.error(err.response.data.msg, toastOptions);
    }
  };
  return (
    <div className='abonnement'>
      <Head>
        <title>Abonnement - Sun Gym</title>
      </Head>
      <Navbar />
      <div className='abonnement-infos-container'>
        <div>
          <h2>Abonnement</h2>
        </div>
        {subs[0] !== undefined ? (
          <div>
            <div style={{ marginBottom: 40 }} className='formule-actuelle'>
              FORMULE ACTUELLE
            </div>
            <h3>Formule {subs[0].plan.nickname}</h3>
            <div>
              {subs[0].plan.amount / 100}€ / {subs[0].plan.interval_count}{' '}
              {subs[0].plan.interval === 'day' ? 'jours' : 'mois'}
            </div>
            <p>
              Votre abonnement se renouvelera le <Moment unix>{subs[0].current_period_end}</Moment>
            </p>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: 40 }} className='formule-actuelle'>
              FORMULE ACTUELLE
            </div>
            <p>Aucun abonnement en cours</p>
          </div>
        )}

        <div style={{ marginBottom: 40 }}>
          <div className='formule-actuelle'>MOYENS DE PAIEMENT</div>
          <form onSubmit={handleDefaultCard}>
            {wallet.length >= 1 ? (
              wallet.map((paymentSource) => (
                <CreditCard
                  key={paymentSource.id}
                  pm={paymentSource.id}
                  card={paymentSource.card}
                  setCard={(e) => setNewDefaultCard(e.target.value)}
                  isChecked={newDefaultCard === paymentSource.id}
                  default={paymentSource.id === defaultCard ? true : false}
                />
              ))
            ) : (
              <p>Aucun moyen de paiement défini</p>
            )}
            <button type='submit' hidden={newDefaultCard === defaultCard} className='btn-select'>
              Définir carte par défaut
            </button>
          </form>
          <button onClick={createSetupIntent} hidden={setupIntent} className='btn-select'>
            Ajouter un nouveau moyen de paiement
          </button>
          <form onSubmit={handleSubmit} hidden={!setupIntent || setupIntent.status === 'succeeded'}>
            <CardElement />
            <button type='submit' className='btn-select'>
              Ajouter la carte
            </button>
          </form>
        </div>

        <div>
          <div className='formule-actuelle'>HISTORIQUE DE FACTURATION</div>
          {invoices.map((invoice) => (
            <a
              style={{ marginBottom: 10, marginTop: 10 }}
              className='paid-month-ligne'
              key={invoice.id}
              href={invoice.hosted_invoice_url}
              target='blank'
            >
              <Moment unix>{invoice.period_start}</Moment> - {invoice.amount_due / 100}€
            </a>
          ))}
          {invoices.length < 1 ? <p>Aucune facture trouvée</p> : ''}

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

// EXECUTES BEFORE PAGE LOADS
Abonnement.getInitialProps = async (ctx) => {
  // CHECKS IF USER IS LOGGED IN
  const { token, isLoggedIn } = await isUserLoggedIn(ctx, '/login');

  if (isLoggedIn) {
    // GET SUBS FROM API
    const subs = await api.get('subscriptions', {
      headers: { 'x-auth-token': token },
    });
    // GET INVOICES FROM API
    const invoices = await api.get('subscriptions/invoices', {
      headers: { 'x-auth-token': token },
    });
    // Must return an object
    return { token: token, subs: subs.data, invoices: invoices.data };
  }
  if (!isLoggedIn) return { isLoggedIn: isLoggedIn };
};

export default Abonnement;
