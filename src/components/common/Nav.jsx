import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ href = "/", title, mob }) => {
    const closeMenu = () => {
        const body = document.querySelector("body")
        body.classList.remove("offcanvas-menu");
    }

    return (
        <li><NavLink to={href} exact onClick={mob && closeMenu}>{title}</NavLink></li>
    )
}

export default Nav