import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from '../Friends/Friends';

const Navbar = (props) => {
    return(
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/gallary" activeClassName={style.active}>Gallary</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.friends}>
                <NavLink to="/friends" activeClassName={style.active}>Friends</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;