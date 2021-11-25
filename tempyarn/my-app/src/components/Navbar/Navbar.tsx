import React from 'react'
import s from './Navbar.module.css'

/*let s = {
    'nav': 'Navbar_nav__16hbf ',
    'item': 'Navbar_item__1SLlW '
}*/

const Navbar = () => {
   return  <nav className={s.nav}>
       <div className={s.item}><a href="">Profile</a></div>
       <div className={s.item}><a href="">Messages</a></div>
       <div className={s.item}><a href="">New</a></div>
       <div className={s.item}><a href="">Music</a></div>
       <div className={s.item}><a href="">Settings</a></div>

   </nav>
}

export default Navbar