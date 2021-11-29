import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div><NavLink to="/profile" className={navLink => navLink.isActive ? s.activeLink : s.item}>Profile</NavLink>
        </div>
        <div><NavLink to="/dialogs" className={navLink => navLink.isActive ? s.activeLink : s.item}>Messages</NavLink>
        </div>
        <div><NavLink to="">News</NavLink></div>
        <div><NavLink to="">Music</NavLink></div>
        <div><NavLink to="">Settings</NavLink></div>

    </nav>
}

export default Navbar