import Head from 'next/head';
import Navbar from '../components/Navbar';

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
    </div>
  );
}
