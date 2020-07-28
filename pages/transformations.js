import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';


function transformations() {
    return (
        <div>
        <Head>
            <title>Acceuil - Sun Gym</title>
        </Head>
        <Navbar />
       

        <h2 className='h2-title' style={{color:'black'}}>Transformation physique</h2>
        <div className='step-detail card-detail-padding'>
            <p style={{padding:'25px 100px'}}>Changer de corps durablement ne se fait pas en quelques séances de sport, ou, en adoptant des régimes restrictifs de manière aléatoire.
                Il vous faudra du temps. Il vous faudra du courage et des efforts. Mais le résultat en vaut vraiment la peine.
            </p>
        </div>
        <div className='h3-detail card-h3-padding'>
            <h3>Les 4 étapes de votre transformation</h3>
        </div>
        <div className='step-card'>
            <div className='step-number card-padding'><img src='../sun1.png' alt=''></img></div>
            <p className='step-text card-padding'>
                Premièrement vous allez prendre votre vie en main, et peut être changer de vie. Effectivement, le fait de changer de silhouette, va modifier votre comportement, votre attitude et même votre posture. Le regard des autres sur vous sera différent, beaucoup seront surpris de votre force de caractère, parce qu’il faut bien avouer, qu’il faut en avoir….pour faire ce choix. Beaucoup vous montreront du respect. En bref vous allez faire envie.
            </p>
        </div>
        <div className='step-card'>
            <div className='step-number card-padding'><img src='../sun2.png' alt=''></img></div>
            <p className='step-text card-padding'>
            Deuxièmement, si vous voulez réellement changer de corps, il va falloir modifier la composition de votre corps de manière structurelle. C’est à dire qu’il va falloir augmenter votre masse maigre, qui est la seule a brûler des calories tout au long de la journée. Pour cela nous vous dirigeons sur des techniques d’entraînement issues de la méthode de Serge DESSEL, qui ont fait leur preuves et que vous ne trouverez pas ailleurs.
            </p>
        </div>
        <div className='step-card'>
            <div className='step-number card-padding'><img src='../sun3.png' alt=''></img></div>
            <p className='step-text card-padding'>
            Troisièmement, vous allez apprendre à réguler votre alimentation sans mourir de faim, encore une fois sur des bases physiologiques. Vous ne dépendrez plus de quelqu’un pour choisir ce que vous devez manger ou pas. Vous n’aurez plus a craindre l’effet yoyo, parce ce que vous allez maîtriser votre assiette.
            </p>
        </div>
        <div className='step-card'>
            <div className='step-number card-padding'><img src='../sun4.png' alt=''></img></div>
            <p className='step-text card-padding'>
                Quatrièmement, vous allez progressivement améliorer votre estime de vous même. Nous allons vous donner des outils de développement personnels, qui en quelques séances vont faire de vous une nouvelle personne. Votre niveau de stress va diminuer et vous aurez confiance en vous.
            </p>
        </div>
        <div className='step-detail card-detail-padding'>
            <p>
                Parce que ce qu’un changement aussi radical dans une vie ne tient pas qu’à un régime ou à une activité physique. SUN GYM vous apporte la meilleure combinaison pour réussir en travaillant sur les différents aspects de l’être humain que sont la structure, l’énergétique et l’émotionnel.
            </p>
            <p>
                SUN GYM vous accompagne dans le changement.
            </p>
        </div>
        <Footer/>

        
            
        </div>
    )
}

export default transformations
