import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

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

      <div className='coatch-card-zone'>
          <div className='coatch-card>'>

              <div className='card-front'>
                <img src='../element2.jpg' alt='coatch-woman'></img>
              </div>

              <div className='card-back'>
                <div className='back-content'>
                </div> 
              </div>

          </div>
        </div>
        <Footer/>
    </div>
  );
}
