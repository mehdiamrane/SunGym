import React from 'react'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

function Woman() {
    return (
        <div>
            <Head>
                <title>Femmes - Sun Gym</title>
            </Head>
            <Navbar />
            <div className='woman-page-banner'></div>
            <div className='woman-txt'>
                <h1 style={{marginBottom:'50px',textAlign:'center'}}>LES BIENFAITS POUR LES FEMMES</h1>
                <p>La musculation ne signifie pas bodybuilding, ça ne se résume pas au volume et au développement à outrance de la masse musculaire… C’est d’ailleurs un des outils majeurs de la prévention santé, de la transformation corporelle durable, de l’entretien de la vitalité. </p>
                <p>Les bienfaits de cette pratique sont nombreux et sont particulièrement recommandées aux femmes pour les principales raisons suivantes :</p>
                <ul>
                    <li><div className='losange-list'></div>Dessiner une silhouette féminine et svelte</li>
                    <li><div className='losange-list'></div>Avoir des tissus fermes et une peau tonique</li>
                    <li><div className='losange-list'></div>Combattre la cellulite </li>
                    <li><div className='losange-list'></div>Entretien votre capital osseux</li>
                    <li><div className='losange-list'></div>Entretien votre masse maigre</li>
                    <li><div className='losange-list'></div>Lutte contre l’accumulation des graisses</li>
                    <li><div className='losange-list'></div>Stimule votre système hormonal</li>
                    <li><div className='losange-list'></div>Stimule votre système immunitaire</li>
                    <li><div className='losange-list'></div>Stabilise votre glycémie</li>
                    <li><div className='losange-list'></div>...</li>
                </ul>
                <p>Depuis plusieurs années je clame haut et fort les bénéfices santé de la musculation pour la femme. Il n’y a pas d’âge ni de niveau requis, notre approche personnalisée s’adapte à chacune d’entre vous. Elle prend en compte le fonctionnement particulier du métabolisme féminin. Cette méthode testée et approuvée par un grand nombre de femmes de tous les horizons est mon cheval de bataille ! Je la met en pratique dans mon quotidien et j’ai à cœur de vous la faire partager.</p>
                <p>Crée par une femme, pensée pour la femme, la méthode MISS DESSEL fera partie intégrante de votre équilibre et de votre bien-être. Ces fondamentaux vous donneront tout le confort nécessaire à votre épanouissement et vous accompagneront au fil du temps</p>
                <p>L’objectif n’est pas de vous rendre dépendant d’un coach mais bien de vous accompagner dans la découverte de vos capacités. Vous faire comprendre comment fonctionne votre organisme pour que vous puissiez réguler vos efforts en fonction de vos objectifs. Vous rendez maître de votre corps !</p>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Woman
