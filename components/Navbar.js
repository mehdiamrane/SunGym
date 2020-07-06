import React, {useState} from 'react'
import Link from 'next/link'

function Navbar() {

    const [isLogin, setIsLogin] = useState(true)

   
    if(isLogin === false){return (
        <div>
            <ul className='navbar'>

                <div className='nav-left'>
                    <div className='acceuil-logo'></div>
                    <Link passHref href='/'><li><a>Acceuil</a></li></Link>
                    <Link passHref href='/tarifs' ><li><a>Tarifs</a></li></Link>
                    <Link passHref href='/contact' ><li><a>Nous contacter</a></li></Link>
                </div>
                
                <div className='nav-right'>
                    <Link passHref href='/subscribe'><li><a>S'inscrire</a></li></Link>
                    <Link passHref href='/login'><li onClick={()=>setIsLogin(true)}><a>Se connecter</a></li></Link>
                </div>

            </ul>
        </div>
    )} 
    else { return (
        <div>
            <ul className='navbar'>

                <div className='nav-left'>
                    <div className='acceuil-logo'></div>
                    <Link passHref href='/'><li><a>Acceuil</a></li></Link>
                    <Link passHref href='/tarifs' ><li><a>Tarifs</a></li></Link>
                    <Link passHref href='/contact' ><li><a>Nous contacter</a></li></Link>
                </div>
                
                <div className='nav-right'>
                    <Link passHref href='/account'><li><a>Mon Compte</a></li></Link>
                    <Link passHref href='/' ><li onClick={()=>setIsLogin(false)}><a>Se Déconnecter</a></li></Link>
                </div>

            </ul>
        </div>
    )}
}

export default Navbar

