import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function Dropdown({ linkSubmenu, mouseState, setMouseState }) {

    const [active, setActive] = useState(false)

    return (
        <ul
            onMouseEnter={() => setMouseState(true)} onMouseLeave={() => setMouseState(false)}
            className={mouseState ? "dropdown dropdown--open" : "dropdown"}
        >
            {
                linkSubmenu ? linkSubmenu.map((link) =>
                    <li
                        key={link.title}
                        className='dropdown-li'>
                        <NavLink
                            to={link.path}
                            key={link.title}
                            className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}

                        >
                            {link.title}
                        </NavLink>
                    </li>
                )
                    : null}
        </ul>
    )
}
