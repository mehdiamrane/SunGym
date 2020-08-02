import React, { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from 'context/auth';
import Cookies from 'js-cookie';
import Router from 'next/router';
import cogoToast from 'cogo-toast';
import toastOptions from 'helpers/toastOptions';

function Navbar() {
  const { userData, setUserData } = useContext(AuthContext);

  const logout = () => {
    Cookies.remove('auth-token');
    setUserData({ token: null, user: null });
    cogoToast.success('Vous vous êtes déconnecté', toastOptions);
    Router.push('/');
  };

  if (!userData.user) {
    return (
      <div>
        <ul className='navbar'>
          <div className='nav-left'>
            <div className='acceuil-logo'></div>
            <li>
              <Link href='/' passHref>
                <a>Acceuil</a>
              </Link>
            </li>
            <li>
              <Link href='/tarifs' passHref>
                <a>Tarifs</a>
              </Link>
            </li>
            <li>
              <Link href='/contact' passHref>
                <a>Nous contacter</a>
              </Link>
            </li>
          </div>

          <div className='nav-right'>
            <Link passHref href='/register'>
              <li>
                <a>S'inscrire</a>
              </li>
            </Link>
            <Link passHref href='/login'>
              <li>
                <a>Se connecter</a>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className='navbar'>
          <div className='nav-left'>
            <div className='acceuil-logo'></div>

            <li>
              <Link passHref href='/'>
                <a>Acceuil</a>
              </Link>
            </li>

            <li>
              <Link passHref href='/tarifs'>
                <a>Tarifs</a>
              </Link>
            </li>

            <li>
              <Link passHref href='/contact'>
                <a>Nous contacter</a>
              </Link>
            </li>
          </div>

          <div className='nav-right'>
            <li>
              <Link passHref href='/compte'>
                <a>Mon Compte</a>
              </Link>
            </li>

            <li onClick={logout}>
              <a href='#'>Se Déconnecter</a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;
