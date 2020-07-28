import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

export default function Cgv() {
    return (
      <div>
        <Head>
          <title>CGV - Sun Gym</title>
        </Head>
        <Navbar className='cgv-nav'/>
        <div className='cgv-text'>
            <h1>Conditions Générales de Vente Sun Gym</h1>
            <h2>Clause n° 1 : Objet</h2>
            <p>Les conditions générales de vente décrites ci-après détaillent les droits et obligations de la société SUN GYM et de son client dans le cadre de la vente de services et des marchandises suivantes : Prestations de services de mise en forme, Prestations de transformation physique. Produits diététiques. Toute prestation accomplie par la société SUN GYM implique donc l'adhésion sans réserve de l'acheteur aux présentes conditions générales de vente.</p>
            <h2>Clause n° 2 : Prix</h2>
            <p>Les prix des services et marchandises vendues sont ceux en vigueur au jour de la prise de commande. Ils sont libellés en euros et calculés toutes taxes. Par voie de conséquence, La société SUN GYM s'accorde le droit de modifier ses tarifs à tout moment. Toutefois, elle s'engage à facturer les marchandises commandées aux prix indiqués lors de l'enregistrement de la commande.</p>
            <h2>Clause n° 3 : Rabais et ristournes</h2>
            <p>Les tarifs proposés comprennent les rabais et ristournes que la société SUN GYM serait amenée à octroyer compte tenu de ses résultats ou de la prise en charge par l'acheteur de certaines prestations.</p>
            <h2>Clause n° 4 : Escompte</h2>
            <p>Un escompte de 10 % sera consenti en cas de paiement total anticipé.</p>
            <h2>Clause n° 5 : Modalités de paiement</h2>
            <p>Le règlement des commandes s'effectue : par tout moyen mis a disposition du client</p>
            <h2>Clause n° 6 : Retard ou défaut de paiement</h2>
            <p>En cas de défaut de paiement total ou partiel, la société SUN GYM stopera l’accès aux installation sportives, jusqu’ réparation du préjudice. Si des frais son engagés à l’encontre de la société SUN GYM, lors d’un prélèvement bancaire, le rétablissement de l’accès aux installation sportives ne sera effectifs qu’après que le client ait remboursé les frais prélevés.</p>
            <p>En sus des indemnités, toute somme, y compris l’acompte, non payée à sa date d’exigibilité produira de plein droit le paiement d’une indemnité forfaitaire de 40 euros due au titre des frais de recouvrement. Articles 441-6, I alinéa 12 et D. 441-5 du code de commerce.</p>
            <h2>Clause n° 7 : Clause résolutoire</h2>
            <p>Si dans les quinze jours qui suivent la mise en œuvre de la clause " Retard de paiement ", l'acheteur ne s'est pas acquitté des sommes restant dues, la vente sera résolue de plein droit et pourra ouvrir droit à l'allocation de dommages et intérêts au profit de la société SUN GYM</p>
            <h2>Clause n° 8 : Clause de réserve de propriété</h2>
            <p>La société SUN GYM conserve la propriété des biens vendus jusqu'au paiement intégral du prix, en principal et en accessoires. À ce titre, si l'acheteur fait l'objet d'un redressement ou d'une liquidation judiciaire, la société SUN GYM se réserve le droit de revendiquer, dans le cadre de la procédure collective, les marchandises vendues et restées impayées.</p>
            <h2>Clause n° 9 : Livraison</h2>
            <p>La livraison est effectuée :</p>
            <ul>
                <li>soit par la remise directe de la marchandise à l'acheteur </li>
                <li>soit par l'envoi d'un avis de mise à disposition en magasin à l'attention de l'acheteur</li>
                <li>soit au lieu indiqué par l'acheteur sur le bon de commande.</li>
            </ul>
            <p>Le délai de livraison indiqué lors de l'enregistrement de la commande n'est donné qu'à titre indicatif et n'est aucunement garanti.Par voie de conséquence, tout retard raisonnable dans la livraison des produits ne pourra pas donner lieu au profit de l'acheteur à l'allocation de dommages et intérêts ; et / ou à l'annulation de la commande.</p>
            <p>Le risque du transport est supporté en totalité par l'acheteur.En cas de marchandises manquantes ou détériorées lors du transport, l'acheteur devra formuler toutes les réserves nécessaires sur le bon de commande à réception desdites marchandises. Ces réserves devront être, en outre, confirmées par écrit dans les cinq jours suivant la livraison, par courrier recommandé AR.</p>
            <h2>Clause n° 10 : Force majeure</h2>
            <p>La responsabilité de la société SUN GYM ne pourra pas être mise en œuvre si la non-exécution ou le retard dans l'exécution de l'une de ses obligations décrites dans les présentes conditions générales de vente découle d'un cas de force majeure. À ce titre, la force majeure s'entend de tout événement extérieur, imprévisible et irrésistible au sens de l'article 1148 du Code civil.</p>
            <h2>Clause n° 11 : Tribunal compétent</h2>
            <p>Tout litige relatif à l'interprétation et à l'exécution des présentes conditions générales de vente est soumis au droit français.À défaut de résolution amiable, le litige sera porté devant le Tribunal de commerce de Lyon</p>
            <p>Fait à Rillieux la pape à la date de la transaction</p>
            <p>Le paiement d’une prestation implique que le client accepte les conditions générales de ventes</p>
        </div>
        <Footer/>
      </div>
    );
  }