import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div className='contact-page'>
            <Head>
                    <title>Contact - Sun Gym</title>
            </Head>
            <Navbar/>
            <div className='contact-zone'>
                
                <form className='contact-form'>
                    <h2 className='h2-title'>NOUS  CONTACTER</h2>
                    <input type='texte' placeholder='Votre Nom'></input>
                    
                    <input type='text' placeholder='Votre numéro de téléphone'></input>
                    <textarea placeholder='Votre message'></textarea>
                    <button className='btn-select' type='submit'>ENVOYER</button>
                </form>

            </div>
            <Footer/>
        
              
        </div>
    )
}

export default Contact
