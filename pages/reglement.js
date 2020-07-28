import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

export default function Reglement() {
    return (
      <div className='reglement'>
        <Head>
          <title>Reglement intérieur - Sun Gym</title>
        </Head>
        <Navbar />
        <div className='reglement-text'>
            <h1>REGLEMENT INTERIEUR SUN GYM</h1>
            <p style={{fontWeight:'bold'}}>Chaque usager déclare se conformer au présent règlement intérieur, y adhérer sans restriction ni réserve et de respecter les consignes suivantes :</p>
            <p style={{fontWeight:'bold',marginTop:40}}>Pour des raisons d'hygiène :</p>
            <ul>
                <li>une tenue de sport correcte est obligatoire</li>
                <li>les chaussures doivent être propres, et servir exclusivement à l'usage de la salle de sport</li>
                <li>une serviette de toilette est obligatoire afin de protéger les appareils et les tapis de sol de la transpiration</li>
                <li>il est nécessaire de nettoyer les appareils (poignées, assise) après utilisation avec le papier et le spray qui sont à votre disposition</li>
            </ul>
            <p style={{fontWeight:'bold',marginTop:40}}>Pour des raisons de sécurité :</p>
            <ul>
                <li>lire et respecter les consignes d'utilisation de chaque appareil</li>
                <li>seule l’utilisation de bouteilles en plastique est autorisée </li>
                <li>l'accès est réservé aux personnes de plus de 18 ans (Autorisation parentale pour les mineurs)</li>
                <li>chaque usager s'engage, en cas d'accident dont il serait témoin à alerter immédiatement le personnel de l'établissement</li>
                <li>la Direction de SUN GYM vous invite à consulter votre médecin avant toute pratique sportive</li>
            </ul>
            <p style={{fontWeight:'bold',marginTop:40}}>Il est interdit :</p>
            <ul>
                <li>de fumer ou de vapoter dans la salle de sport</li>
                <li>de manger sur les zones d’exercices (un espace détente est prévu à cet effet)</li>
                <li>d'utiliser son téléphone portable pour émettre ou recevoir des appels</li>
                <li>de promotionner et/ou de commercialiser des substances illicites dans l’enceinte du club</li>
                <li>de coacher un tiers sans être qualifié et autorisé par SUN GYM sous le couvert d’un contrat</li>
                <li>de déranger les autres utilisateurs par des comportements néfastes (crier, chanter...)</li>
                <li>d'ouvrir les issues de secours (sauf en cas d'urgence)</li>
            </ul>
            <p style={{fontWeight:'bold',marginTop:40}}>Tout usager ne respectant pas ce règlement pourra être exclu de la salle sans être remboursé.</p>   
        </div>
        <Footer/>
      </div>
    );
  }