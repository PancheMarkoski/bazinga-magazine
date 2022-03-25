import React from 'react'
import { Link } from "react-router-dom"

import { IoLogoTwitter } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { GrPinterest } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { VscDebugStackframeDot } from 'react-icons/vsc';

const navLinks = [
    {
        title: "Adventure",
        path: "/adventure"
    },
    {
        title: "Don't Miss",
        path: "/dontmiss"
    },
    {
        title: "Featured",
        path: "/featured"
    },
    {
        title: "High Tech",
        path: "/hightech"
    },
    {
        title: "Lifestyle",
        path: "/lifestyle"
    },
    {
        title: "News & Updates",
        path: "/news&updates"
    },
    {
        title: "Popular",
        path: "/popular"
    },
    {
        title: "Random News",
        path: "/randomnews"
    },
    {
        title: "Style",
        path: "/style"
    },
    {
        title: "Trending",
        path: "/trending"
    },
    {
        title: "Video",
        path: "/video"
    },
]

export default function Sidebar({ sidebar }) {
    return (
        <div id='active' className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
            <div id='active' className='sidebar-logo'>
                <img id='active' alt='Logo' src='https://bazinga.themerex.net/wp-content/uploads/2017/11/logo-1.png' />
            </div>
            <div id="active" className='sidebar-category'>
                <img id='active' alt="categori-icon" src="https://bazinga.themerex.net/wp-content/themes/bazinga/images/title-bg.png" />
                <h5 id='active'>
                    Categories
                </h5>
            </div>
            <div id="active" className='sidebar-line'></div>
            <div className='sidebar-categories-container'>
                <ul id='active'>
                    {navLinks.map((link) => (
                        <li id='active' key={link.title}>
                            <VscDebugStackframeDot />
                            <Link to={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='sidebar-social-icons' id='active'>
                <IoLogoTwitter />
                <GrFacebookOption />
                <GrPinterest />
                <GrInstagram />
            </div>
        </div>
    )
}
