import React, { useState, Fragment, useEffect } from 'react'

import { FiMenu } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { BsBag } from 'react-icons/bs';
import MenuNavLink from './MenuNavLink';

const navLinks = [
    {
        title: 'Home',
        path: '/',
        submenu: [
            {
                title: "Home",
                path: "/",
            },
            {
                title: "Home 2",
                path: "/Home2",
            },
            {
                title: "Home 3",
                path: "/Home3",
            },

        ]

    },
    {
        title: 'Features',
        path: '/features',
        submenu: [
            {
                title: "Home",
                path: "/",
            },
            {
                title: "Home5",
                path: "/Home5",
            },
            {
                title: "Home6",
                path: "/Home6",
            },
            {
                title: "Home7",
                path: "/Home7",
            },
            {
                title: "Home8",
                path: "/Home8",
            },
            {
                title: "Home9",
                path: "/Home9",
            },
        ]
    },
    {
        title: 'News',
        path: '/news'
    },
    {
        title: 'Lifestyle',
        path: '/lifestyle'
    },
    {
        title: 'Videos',
        path: '/videos'
    },
    {
        title: 'Shop',
        path: '/shop'
    },
]


export default function Navigation({ toggleSidebar }) {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 900px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 900px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);


    return (
        <Fragment>
            {matches ? (
                <div className='navigation'>
                    <div className='navigation-container'>
                        <div
                            className='navigation-container-ham-menu'
                            onClick={toggleSidebar}
                        >
                            <FiMenu />
                        </div>
                        <ul className='navigation-container-menu-links'>
                            {
                                navLinks.map((link) => (
                                    <MenuNavLink key={link.title} link={link} />
                                ))
                            }
                        </ul>
                        <div className='navigation-container-search'>
                            <IoIosSearch />
                        </div>
                    </div>
                </div>
            ) :
                (
                    <div className='navigationTablet'>
                        <div className='navigationTablet-logo'>
                            <img alt='Logo' src='https://bazinga.themerex.net/wp-content/uploads/2017/11/logo-2.png' />
                        </div>
                        <div className='navigationTablet-container-tablet'>
                            <div
                                className='navigationTablet-hamMenu'
                                onClick={toggleSidebar}
                            >
                                <FiMenu />
                            </div>
                            <div className='navigationTablet-search'>
                                <IoIosSearch />
                            </div>
                            <div className='navigationTablet-shop-cart'>
                                <BsBag />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}
