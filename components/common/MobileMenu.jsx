import React, { useState } from 'react'
import NavLink from './NavLink';

const MobileMenu = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    return (
        <ul className="site-nav-wrap">
            <NavLink href={"/"} exact >Home</NavLink>
            <NavLink href={"/about"} exact >About Us</NavLink>
            <NavLink href={"/courses"} exact >Courses</NavLink>
            <NavLink href={"/downloadCertificate"} exact >Download Certificate</NavLink>
            <NavLink href={"/contact"} exact >Contact</NavLink>
        </ul>
    )
}

export default MobileMenu