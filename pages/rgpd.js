import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

export default function Rgpd() {
    return (
      <div>
        <Head>
          <title>RGPD- Sun Gym</title>
        </Head>
        <Navbar />
        <div className='cgv-text'>
            <h1>Protection des données personnelles Sun Gym</h1>
            <p>Les informations recueillies sur les formulaires présents sur le site Sun Gym sont enregistrées dans un fichier informatisé par la société SUN GYM pour valider votre inscription à une prestation de service de mise en forme. La base légale du traitement est utilisée et pour l’octroi d’un pass d’accès aux aménagements sportifs.</p>
            <p>Les données collectées ne seront pas communiquées à d’autres structures.</p>
            <p>Les données sont conservées pendant une durée de 3 ans</p>
            <p>Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données.</p>
            <p>Consultez le site cnil.fr pour plus d’informations sur vos droits.</p>
            <p>Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter le responsable de la société SUN GYM par le biais de l’email : sungymlyon@gmail.com</p>
            <p>Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.</p>   
        </div>
        <Footer/>
      </div>
    );
  }