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
            <Link passHref href='/'>
              <li>
                <a>Acceuil</a>
              </li>
            </Link>
            <Link passHref href='/tarifs'>
              <li>
                <a>Tarifs</a>
              </li>
            </Link>
            <Link passHref href='/contact'>
              <li>
                <a>Nous contacter</a>
              </li>
            </Link>
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
            <Link passHref href='/'>
              <li>
                <a>Acceuil</a>
              </li>
            </Link>
            <Link passHref href='/tarifs'>
              <li>
                <a>Tarifs</a>
              </li>
            </Link>
            <Link passHref href='/contact'>
              <li>
                <a>Nous contacter</a>
              </li>
            </Link>
          </div>

          <div className='nav-right'>
            <Link passHref href='/compte'>
              <li>
                <a>Mon Compte</a>
              </li>
            </Link>
            <Link passHref href='/'>
              <li onClick={logout}>
                <a>Se Déconnecter</a>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navbar;
