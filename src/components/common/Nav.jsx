import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { BsChevronUp } from "react-icons/bs";

const Nav = ({ href = "/", title, mob, children }) => {
    const closeMenu = () => {
        const body = document.querySelector("body")
        body.classList.remove("offcanvas-menu");
    }
    const [isSubMenuOpen, setSubMenuOpen] = useState(mob && "collapse")
    const handleMenuOpen = () => {
        if (isSubMenuOpen === "") {
            setSubMenuOpen("collapse")
        } else {
            setSubMenuOpen("")
        }

    }
    if (children) {
        return (
            <li className='has-children'><NavLink to={href} exact onClick={mob && closeMenu}>{title}</NavLink> <span className='btn d-inline-flex submenu-icon' onClick={handleMenuOpen}>  <BsChevronUp className={isSubMenuOpen && "rotate-180"} /></span>
                <ul className={`dropdown ${isSubMenuOpen} `}>
                    {children.map((child, i) => (<li key={i}><Link to={child.url} onClick={mob && closeMenu} >{child.title}</Link></li>))}
                </ul>
            </li >
        )

    } else {
        return (
            <li><NavLink to={href} exact onClick={mob && closeMenu}>{title}</NavLink></li>
        )
    }
}

export default Nav