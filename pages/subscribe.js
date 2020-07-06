import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function Subscribe() {
    return (
        
        <div>
            <div className='subscribe-page'>
                <Head>
                    <title>S'inscrire - Sun Gym</title>
                </Head>
                <Navbar/>

                <form className='form-container'>
                    <h2 className='h2-title'>Inscription</h2>
                    <div className='form-input-div'>
                        <input type='text' name='text' placeholder='Nom'></input>
                        
                    </div>

                    <div className='form-input-div'>
                        <input type='text' name='text' placeholder='Prénom'></input>
                    </div>
                    
                    <div className='form-input-div'>
                        <input type='email' name='email' placeholder='Email'></input>
                    </div>

                    <div className='form-input-div'>
                        <input type='password' name='password' placeholder='Mot de passe'></input>
                    </div>
                    
                    <button className='subscribe-btn' type='submit'>S'INSCRIRE</button>
                    
                </form>
                

            </div>
            <Footer/>
        </div>
    )
}

export default Subscribe
