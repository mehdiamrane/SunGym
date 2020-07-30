import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Acceuil - Sun Gym</title>
      </Head>
      <Navbar />

      <div className='container'>
        <div className='flex-banner'>
          <div className='logo-main'></div>
        </div>
        
      </div>

      {/* Banniere prepa physique */}
      <div className='presentation-container'>
        <h2>PRESENTATION SUN GYM</h2>
        <div className='logo-bg-trans' style={{display:'flex',backgroundImage:'url(../logo-trans.png)',backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className='presentation-left'>
              <p>Selon le principe de Lavoisier <i>« rien ne se perd, rien ne se crée, tout se transforme »</i>  SUN GYM rebat les cartes de l’activité physique, en prenant partie de communiquer sur les vérités physiologiques, plutôt que sur des mythes non vérifiés ou non vérifiables.</p>
              <h3>LE CONCEPT</h3>
              <p>Ce n’est pas un retour en arrière que vouloir faire du « old school » une nouvelle manière d’aborder la pratique du fitness. SUN GYM choisit de vous apporter les réponses que vous attendez, en vous proposant de manière exclusive une pratique du fitness axées sur les lois de la thermodynamique, principe physique bien connu. Chez nous pas de blablabla...du concret.</p>
              <h3>POURQUOI ?</h3>
              <p>L’utilisation de charges additionnelles est la seule réponse fiable et durable pour modifiée la composition corporelle dans le sens de la santé et de l’esthétisme.Cette pratique porte plusieurs appellations : Bodybuilding, culturisme, renforcement musculaire, préparation physique, pump, cross-fit...</p>
              <h3>OBJECTIFS</h3>
              <p>Vous donner les clefs de votre succès avec de vrais coaching personnalisés. Les programmes tiennent compte de vos besoins autant que de vos désirs en s’appuyant sur des bases physiologiques éprouvées.</p>
            </div>
            <div className='presentation-right'>
            <h3>COMMENT ?</h3>
              <p>Les coachs SUN GYM sont diplômés avec des qualifications  sportives, nutritionnelles, ingénieriales, para médicales, et thérapies alternatives, avec une expérience de terrain et de compétition au plus haut niveau.</p>
              <h3>CONCLUSION</h3>
              <p>Le sport santé est promotionné par l’état.La réponse à l’ostéoporose et à la sarcopénie, ainsi que le sport à visée esthétique sont subordonnée à l’utilisation de charges additionnelles.</p>
              <p>Pour lutter contre l’obésité et le surpoids, ainsi que les diverses maladies métaboilques (diabète de type 2…) L’exercice est indispensable non seulement par les dépenses réalisées au cours de l’activité elle-même, mais aussi par la persistance de cette augmentation dans les heures suivant la pratique. l’activité physique permet un maintien de la masse maigre et donc de la dépense énergétique de repos, Pour ce qui concerne les troubles de la tolérance glucidique, Le muscle squelettique joue un rôle majeur dans l’équilibre glycémique. C’est le tissu le plus sensible à l’insulino-résistance. On peut ainsi dire que l’exercice musculaire peut aider à contrôler la glycémie au jour le jour. Après l’arrêt d’un exercice musculaire, on observe une augmentation de la captation du glucose par le muscle squelettique liée à une insulino-sensibilité accrue, qui persiste pendant plusieurs heures,</p>
              <p>Pour être en bonne santé, il faut bouger, mais pas n’importe comment, mais aussi manger, mais pas n’importe quoi.</p>
            </div>
        </div>
      </div>

      
      
      <div className='redirect-transformation-container'>
        <div className='transfo-img-home'></div>
        <div className='transfo-text-and-btn'>
          <h2>TRANSFORMEZ VOUS</h2>
          <p style={{textAlign:'center'}}>12 semaines pour changer de corps,changer de vie, gagner en confiance en soi, perdre du poids ou prendre du muscle, quelque soit vos raisons SUN GYM vous accompagne dans votre transformation</p>
          <Link href='/transformations' passHref>
            <div className='redirect-transfo-btn'>En Savoir +</div>
          </Link>
        </div>
      </div>



      {/* SENIOR */}
      <div className='senior-container'>
        <div className='senior-text-zone'>
          <h2 style={{textTransform:'uppercase'}}>LE SPORT SANTé</h2>
          <p>Sun Gym souhaite vous accompagner dans cette démarche sport & santé via différents services :</p>
          <ul>
            <li><div className='losange-list'></div>	Activité physique</li>
            <li><div className='losange-list'></div>	Conseil nutritionnel</li>
            <li><div className='losange-list'></div>	Activité physique</li>
          </ul>
          <Link href='/senior' passHref>
            <div className='senior-btn'>En Savoir +</div>
          </Link>
        </div>
      </div>


      {/* FEMMES */}
      <div className='woman-container'>
        <div className='woman-index-img'></div>
        <div className='woman-index-txt'>
          <h2>POUR VOUS LES FEMMES</h2>
          <p>Stop aux idées reçues, les femmes au « fitness » et les hommes à la musculation ! </p>
          <p>Bouger c’est bien mais investir dans des efforts efficaces c’est mieux ! </p>
          <Link href='/woman' passHref>
            <div className='redirect-transfo-btn'>En Savoir +</div>
          </Link>
        </div>

      </div>
      


      {/* TEA%M */}
      <div className='serge-card'>
          <div className='serge-left'></div>
          <div className='serge-right'>
            <h3>DESSEL Serge</h3>
            <span style={{fontWeight:'bold'}}>Coach Sportif - Consultant sport et bien être - Préparateur Physique</span>
            <ul>
              <li><div className='losange-list'></div>Champion de France AFFBB 1992</li>
              <li><div className='losange-list'></div>Champion d'Europe NABBA 1996</li>
              <li><div className='losange-list'></div>Champion du monde toute catégories NABBA 1996</li>
              <li><div className='losange-list'></div>Mr Univers NABBA 1996</li>
              <li><div className='losange-list'></div>Professionnel IFBB PROLEAGUE 1998-2001</li>
            </ul>
          </div>
        </div>
      <div>
        
        <div className='vanina-card'></div>
      </div>
      

      
        <Footer/>
    </div>
  );
}
