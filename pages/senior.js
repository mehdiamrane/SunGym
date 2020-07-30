
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import React from 'react'

function Senior() {
    return (
        <div>
            <Head>
                <title>Santé - Sun Gym</title>
            </Head>
            <Navbar />
            <div className='senior-page-banner'></div>
            <div className='senior-txt' style={{minHeight:'80vh',width:'80%',marginLeft:'10%',color:'black'}}>
                <h1 style={{marginBottom:'50px',textAlign:'center'}}>Sport Santé et Anti-Age</h1>
                <p>La musculation est en autre utile pour prévenir des maladies suivantes:</p>
                <ul>
                    <li><div className='losange-list'></div>Sarcopénie</li>
                    <li><div className='losange-list'></div>Ostéoporose</li>
                    <li><div className='losange-list'></div>Lutter contre les troubles de la ménopause</li>
                    <li><div className='losange-list'></div>Maladies métaboliques</li>
                </ul>
                <p>On cherche parfois des artifices pour cacher les effets du vieillissement ; cosmétiques, habillement, chirurgie… mais l’un des moyens le plus efficace pour prévenir des effets de l’âge c’est de stimuler nos fonctions biologiques naturelles. </p>
                <p>Sun Gym vous propose une méthode vous permettant de prendre soin de votre santé sur du long terme. Une approche personnalisée, construite par des spécialistes, prenant en compte les recommandations officielles des organismes de santé tel que l’OMS (Organisation Mondiale de la Santé). </p>
                <p>Pour mémoire les effets majeurs du vieillissement sont : </p>
                <ul>
                    <li><div className='losange-list'></div>La perte de masse musculaire</li>
                    <li><div className='losange-list'></div>La perte de force</li>
                    <li><div className='losange-list'></div>La perte de mobilité</li>
                    <li><div className='losange-list'></div>Une diminution de la capacité aérobie.</li>
                </ul>
                <p>En effet, le vieillissement entraîne une modification de la composition corporelle. Les fibres musculaires s’atrophient petit à petit. Les plus touchées sont les fibres rapides responsables du développement de la force ; ce phénomène s’appelle « la sarcopénie ». Cette modification structurelle entraîne une diminution de la force, une augmentation de la masse grasse, une baisse du métabolisme, une baisse d’activité physique liée à l’augmentation de la fatigabilité … et peu à peu engendre une perte de l’autonomie.</p>
                <p style={{margin:'70px 0 0 0'}}>La seule activité reconnue par l’OMS et de nombreux états et pays pour lutter contre la sarcopénie est la musculation. Cette activité physique utilisant les charges additionnelles est recommandée pour plusieurs autres pathologies liées au vieillissement :</p>
                <ul>
                    <li style={{margin:'20px 0'}}>Lutter contre la dégénérescence ostéo-articulaire : l’activité physique adaptée stimule la régénérescence des tissus et augmente la densité osseuse (ostéoporose). Bouger vous permettra de préserver votre mobilité et de réduire les douleurs liées à l’arthrose. </li>
                    <li style={{margin:'20px 0'}}>Lutter contre le vieillissement hormonal : avec l’âge notre système hormonal décline (DHEA, hormones sexuelles…), ce phénomène est plus marqué chez les femmes lors de la ménopause. La musculation en préservant suffisamment de masse musculaire permet de maintenir un niveau minimum de synthèse hormonale pour un métabolisme naturellement jeune !</li>
                    <li style={{margin:'20px 0'}}>Lutter contre les maladies métaboliques : la prévalence aux maladies métaboliques croit d’année en année : sédentarité, manque d’hygiène de vie, stress, choc émotionnel…. Si vous souhaitez offrir une protection efficace à votre organisme, la musculation est la clef. L’entretien de votre masse maigre et la réduction de la masse grasse stimule votre système immunitaire, maintient un métabolisme actif et efficace pour s’adapter aux écarts du quotidien et vous permettra de récupérer plus vite des troubles de la vie. </li>
                </ul>
                <p style={{margin:'70px 0 0 0'}}>Notre engagement « sport & santé » est notre leitmotiv. Nous prônons les principes déclinés par l’OMS :</p>
                <p>« <i>Associées à une bonne alimentation, les Activités Physiques et Sportives (APS) pratiquées de manières Régulières, Adaptées, Sécurisantes et Progressives sont un outil préventif majeur des maladies liées à la sédentarité et au vieillissement. </i>»</p>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Senior
