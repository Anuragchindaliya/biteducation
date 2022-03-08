import React from 'react'
import { menus } from '../../pages/api/menus';
import NavLink from './NavLink';

const MobileMenu = () => {
    return (
        <ul className="site-nav-wrap">
            {menus.map((menu, i) => (
                <NavLink key={i} href={menu.url} exact >{menu.title}</NavLink>
            ))}
            <NavLink href={"/"} exact >Home</NavLink>
            <NavLink href={"/about"} exact >About Us</NavLink>
            <NavLink href={"/courses"} exact >Courses</NavLink>
            <NavLink href={"/downloadCertificate"} exact >Download Certificate</NavLink>
            <NavLink href={"/contact"} exact >Contact</NavLink>
        </ul>
    )
}

export default MobileMenu