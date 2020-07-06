import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from 'helpers/api';
import Router from 'next/router';
import ErrorNotice from 'components/ErrorNotice';
import isUserLoggedIn from 'helpers/isUserLoggedIn';
import redirectTo from 'helpers/redirectTo';
import Plans from 'data/plans';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

const TabsMenu = ({ activeTab, lastActive, switchTab }) => {
  return (
    <div className='tabs'>
      <div
        style={{ backgroundColor: activeTab === 1 ? 'yellow' : 'grey' }}
        onClick={() => (lastActive >= 1 ? switchTab(1) : null)}
      >
        Etape 1
      </div>
      <div
        style={{ backgroundColor: activeTab === 2 ? 'yellow' : 'grey' }}
        onClick={() => (lastActive >= 2 ? switchTab(2) : null)}
      >
        Etape 2
      </div>
      <div
        style={{ backgroundColor: activeTab === 3 ? 'yellow' : 'grey' }}
        onClick={() => (lastActive >= 3 ? switchTab(3) : null)}
      >
        Etape 3
      </div>
    </div>
  );
};

function Paiement({ token }) {
  const [activeTab, setActiveTab] = useState(1);
  const [lastActive, setLastActive] = useState(1);
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [adresse, setAdresse] = useState();
  const [codePostal, setCodePostal] = useState();
  const [ville, setVille] = useState();
  const [planId, setPlanId] = useState();
  const [cardHolder, setCardHolder] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  // Handle the submission of card details
  const handlePay = async (e) => {
    setLoading(true);
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);

    // Create Payment Method
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      cogoToast.error(error.message, toastOptions).then(() => {
        setLoading(false);
      });
      return;
    }

    // Create Subscription on the Server
    const data = { planId, payment_method: paymentMethod.id };
    const subscription = await api.post('subscriptions/', data, {
      headers: { 'x-auth-token': token },
    });

    // The subscription contains an invoice
    // If the invoice's payment succeeded then you're good,
    // otherwise, the payment intent must be confirmed
    const { latest_invoice } = subscription.data;

    if (latest_invoice.payment_intent) {
      const { client_secret, status } = latest_invoice.payment_intent;

      if (status === 'requires_action') {
        const { error: confirmationError } = await stripe.confirmCardPayment(client_secret);
        if (confirmationError) {
          // console.error(confirmationError);
          cogoToast.error('Nous ne parvenons pas à confirmer la carte.', toastOptions);
          return;
        }
      }

      // success
      cogoToast.success('Abonnement confirmé !', toastOptions).then(() => {
        setLoading(false);
        Router.push('/compte');
        return;
      });
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const apiRes = await api.get('account/', {
        headers: { 'x-auth-token': token },
      });

      setNom(apiRes.data.nom);
      setPrenom(apiRes.data.prenom);
      setAdresse(apiRes.data.adresse);
      setCodePostal(apiRes.data.codePostal);
      setVille(apiRes.data.ville);
      setPlanId(apiRes.data.planId);
      if (apiRes.data.prenom && apiRes.data.nom)
        setCardHolder(apiRes.data.prenom + ' ' + apiRes.data.nom);
    };
    getUserInfo();
  }, []);

  const submitBillingInfo = async (e) => {
    e.preventDefault();

    setError();

    try {
      const data = { nom, prenom, adresse, ville, codePostal };
      const apiRes = await api.post('account/facturation', data, {
        headers: { 'x-auth-token': token },
      });
      if (apiRes) {
        cogoToast.success('Informations ajoutées avec succès', toastOptions);
        setActiveTab(2);
        setLastActive(2);
      }
    } catch (err) {
      if (err.response.data.msg) setError(err.response.data.msg);
    }
  };

  const submitPlan = async (e) => {
    e.preventDefault();

    setError();

    try {
      const data = { planId };
      const apiRes = await api.post('account/plan', data, {
        headers: { 'x-auth-token': token },
      });
      if (apiRes) {
        cogoToast.success('Plan choisi avec succès!', toastOptions);
        setActiveTab(3);
        setLastActive(3);
      }
    } catch (err) {
      if (err.response.data.msg) setError(err.response.data.msg);
    }
  };

  if (activeTab === 1) {
    return (
      <div>
        <Head>
          <title>Paiement-étape1 - Sun Gym</title>
        </Head>
        <Navbar />
        <div className='paiement-bg'>
          <div className='tabs-payment'>
            <TabsMenu
              switchTab={(n) => setActiveTab(n)}
              activeTab={activeTab}
              lastActive={lastActive}
            />
            <div className='tab-content'>
              <h3>Informations de facturation</h3>
              {error ? <ErrorNotice message={error} clearError={() => setError()} /> : ''}
              <form className='paiment-form' onSubmit={submitBillingInfo}>
                <label htmlFor='prenom'>Prénom:</label>
                <input
                  className='paiement-input'
                  type='text'
                  id='prenom'
                  name='prenom'
                  value={prenom || ''}
                  placeholder='Jean'
                  required
                  onChange={(e) => setPrenom(e.target.value)}
                />

                <label htmlFor='nom'>Nom:</label>
                <input
                  className='paiement-input'
                  type='text'
                  id='nom'
                  name='nom'
                  value={nom || ''}
                  placeholder='Dupont'
                  required
                  onChange={(e) => setNom(e.target.value)}
                />

                <label htmlFor='adresse'>Adresse:</label>
                <input
                  className='paiement-input'
                  type='text'
                  id='adresse'
                  name='adresse'
                  value={adresse || ''}
                  placeholder='1 rue de la paix'
                  required
                  onChange={(e) => setAdresse(e.target.value)}
                />

                <label htmlFor='ville'>Ville:</label>
                <input
                  className='paiement-input'
                  type='text'
                  id='ville'
                  name='ville'
                  value={ville || ''}
                  placeholder='Lyon'
                  required
                  onChange={(e) => setVille(e.target.value)}
                />

                <label htmlFor='code-postal'>Code Postal:</label>
                <input
                  className='paiement-input'
                  type='number'
                  id='code-postal'
                  name='code-postal'
                  value={codePostal || ''}
                  placeholder='69002'
                  required
                  maxLength={5}
                  onChange={(e) => setCodePostal(e.target.value)}
                />
                <input type='submit' className='btn-select' value='Valider' />
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
            <TabsMenu
              switchTab={(n) => setActiveTab(n)}
              activeTab={activeTab}
              lastActive={lastActive}
            />
            <div className='tab-content'>
              <h3>Mon Abonnement</h3>
              {error ? <ErrorNotice message={error} clearError={() => setError()} /> : ''}
              <form className='paiment-form' onSubmit={submitPlan}>
                <label htmlFor='abonnement'>Choisir un abonnement:</label>
                <select
                  id='abonnement'
                  className='paiement-input'
                  value={planId || '0'}
                  onChange={(e) => {
                    setPlanId(e.target.value);
                  }}
                >
                  <option value='0' disabled hidden>
                    Choisir
                  </option>
                  {Plans.map((plan) => (
                    <option key={plan.id} value={plan.planId}>
                      {plan.titre} - {plan.prix} / {plan.periode}
                    </option>
                  ))}
                </select>
                <input type='submit' className='btn-select' value='Confirmer mon choix' />
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
            <TabsMenu
              switchTab={(n) => setActiveTab(n)}
              activeTab={activeTab}
              lastActive={lastActive}
            />
            <div className='tab-content'>
              <h3>Moyen de Paiement</h3>
              {error ? <ErrorNotice message={error} clearError={() => setError()} /> : ''}
              <form className='paiment-form' onSubmit={handlePay}>
                <label>Nom du Titulaire de la carte :</label>
                <input
                  className='paiement-input'
                  type='text'
                  id='card-holder'
                  name='card-holder'
                  placeholder='Jean Dupont'
                  value={cardHolder || ''}
                  required
                  onChange={(e) => setCardHolder(e.target.value)}
                />

                <label htmlFor='stripe-element'>Carte de paiement :</label>
                <div className='paiement-input'>
                  <CardElement />
                </div>

                <p>Paiement sécurisé par Stripe</p>
                <input
                  type='submit'
                  value='Valider et payer xx€'
                  className='btn-select'
                  disabled={loading}
                />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// EXECUTES BEFORE PAGE LOADS
Paiement.getInitialProps = async (ctx) => {
  // CHECKS IF USER IS LOGGED IN
  const { token, isLoggedIn } = await isUserLoggedIn(ctx, '/register');

  if (isLoggedIn) {
    const user = await api.get('account', {
      headers: { 'x-auth-token': token },
    });

    // Redirige vers /compte si abonnement déja actif
    // if (user.planStatus && user.planStatus == 'Actif') {
    //   redirectTo(ctx, '/compte');
    //   return { isLoggedIn: isLoggedIn };
    // }
  }

  // Redirige vers /register si pas connecté
  if (!isLoggedIn) {
    redirectTo(ctx, '/register');
    return { isLoggedIn: isLoggedIn };
  }

  // Must return an object
  if (isLoggedIn) return { token: token };
};

export default Paiement;
