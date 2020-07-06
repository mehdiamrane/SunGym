import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

function Infochange() {
    return (
        <div className='change-info-form-container'>
                <Head>
                    <title>Modifier mes informations - Sun Gym</title>
                </Head>
                <Navbar/>
                <div className='infos-form-container'>
                    <form className='change-info-form'>
                        <h2 className='h2-title'>MODIFIER MES INFORMATIONS</h2>

                        <div  className='respChange' style={{display:'flex',justifyContent:'flex-start',width:'100%'}}>
                            <div className='form-input-div'>
                                <input type='text' name='nom' placeholder='Nom'></input>
                            </div>
                            <div className='form-input-div'>
                                <input type='text' name='prenom' placeholder='Prénom'></input>
                            </div>
                        </div>

                        <div  className='respChange' style={{display:'flex',justifyContent:'flex-start',width:'100%'}}>
                            <div className='form-input-div'>
                                <input type='email' name='email' placeholder='Email'></input>
                            </div>
                        </div>

                        <div  className='respChange' style={{display:'flex',justifyContent:'flex-start',width:'100%'}}>
                            <div className='form-input-div'>
                                <input type='text' name='rue' placeholder='Nom et Numéro de rue'></input>
                            </div>
                            <div className='form-input-div'>
                                <input type='text' name='cp' placeholder='Code Postal'></input>
                            </div>
                        
                        <div className='form-input-div'>
                            <input type='text' name='ville' placeholder='Ville'></input>
                        </div>
                        </div>
                    </form>
                    <Link href='/account'><button className='btn-select'>MODIFIER</button></Link>
                </div>
                <Footer/>
            
        </div>
    )
}

export default Infochange
