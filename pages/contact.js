import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import api from 'helpers/api';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

function Contact() {
  const [email, setEmail] = useState();
  const [nom, setNom] = useState();
  const [tel, setTel] = useState();
  const [message, setMessage] = useState();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = { email, nom, message, tel };
      await api.post('email', data);

      cogoToast.success('Message envoyé avec succès', toastOptions);
      setEmail();
      setNom();
      setTel();
      setMessage();
    } catch (err) {
      if (err.response.data.msg) setError(err.response.data.msg);
    }
  };
  return (
    <div className='contact-page'>
      <Head>
        <title>Contact - Sun Gym</title>
      </Head>
      <Navbar />
      <div className='contact-zone'>
        <form className='contact-form' onSubmit={submit}>
          <h2 className='h2-title'>NOUS CONTACTER</h2>
          <input
            type='text'
            id='nom'
            name='nom'
            placeholder='Votre nom'
            required
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Votre email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='number'
            id='tel'
            name='tel'
            placeholder='Votre numéro de téléphone'
            required
            onChange={(e) => setTel(e.target.value)}
          />
          <textarea
            type='text'
            id='message'
            name='message'
            placeholder='Votre message'
            required
            onChange={(e) => setMessage(e.target.value)}
          />

          <input type='submit' value='ENVOYER' className='btn-select' />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
