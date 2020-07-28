import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className='footer'>
            <div></div>
            <div className='rgpd-zone'>
                <Link href='/cgv' passHref><div>CGV</div></Link>
                <Link href='/reglement' passHref><div>REGLEMENT INTERIEUR</div></Link>
                <Link href='/rgpd' passHref><div>RGPD</div></Link>
            </div>
            <div className='social-media'>
                <div><img className='social-rounded' src='../fb1.png'></img></div>
                <div><img className='social-rounded' src='../twit.png'></img></div>
                <div><img className='social-rounded' src='../insta.png'></img></div>
            </div>
            <div className='2020 @ Okami compagny , All right reserved'></div>
        </div>
    )
}

export default Footer
