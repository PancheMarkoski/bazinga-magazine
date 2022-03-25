import React from 'react'

import { BsBag } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { GrPinterest } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';



export default function Header() {
    return (
        <div className="header-container">
            <div className='header'>
                <div className='header-shop-cart'>
                    <BsBag />
                    <span>0</span>
                </div>
                <div className='header-logo'>
                    <img alt='Logo' src='https://bazinga.themerex.net/wp-content/uploads/2017/11/logo-1.png' />
                </div>
                <div className='header-social-icons'>
                    <IoLogoTwitter />
                    <GrFacebookOption />
                    <GrPinterest />
                    <GrInstagram />
                </div>
            </div>
        </div>
    )
}
