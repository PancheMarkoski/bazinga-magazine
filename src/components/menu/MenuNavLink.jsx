import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

import { MdKeyboardArrowDown } from 'react-icons/md';
import Dropdown from '../menu/Dropdown'

export default function MenuNavLink({ link }) {

    const [mouseState, setMouseState] = useState(false)

    return (
        <li className='navLink'
            key={link.title}
        >
            <NavLink
                to={link.path}
                onMouseEnter={() => setMouseState(true)} onMouseLeave={() => setMouseState(false)}
                className={({ isActive }) => (isActive ? 'navLink-link isActive' : 'navLink-link')}

            >
                {link.title}
            </NavLink>
            {link.submenu && <MdKeyboardArrowDown />}
            <Dropdown linkSubmenu={link.submenu} mouseState={mouseState} setMouseState={setMouseState} />
        </li>
    )
}
