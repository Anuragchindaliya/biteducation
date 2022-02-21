import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'

const Header = () => {
  // const [isMenuActive, setMenuActive] = useState(false)
  const handleMenu = () => {
    const body = document.querySelector("body")
    if (body.classList.contains("offcanvas-menu")) {
      body.classList.remove("offcanvas-menu");
    } else {
      body.classList.add("offcanvas-menu");
    }
  }

  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3" onClick={handleMenu}>
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <NavLink href={"/"} exact >Home</NavLink>
            <NavLink href={"/about"} exact >About Us</NavLink>
            <NavLink href={"/courses"} exact >Courses</NavLink>
            <NavLink href={"/downloadCertificate"} exact >Download Certificate</NavLink>
            <NavLink href={"/contact"} exact >Contact</NavLink>
          </ul>
        </div>
      </div>
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 d-none d-lg-block">
              <a href="#" className="small mr-3"><span className="icon-question-circle-o mr-2" /> Have a questions?</a>
              <a href="#" className="small mr-3"><span className="icon-phone2 mr-2" /> 10 20 123 456</a>
              <a href="#" className="small mr-3"><span className="icon-envelope-o mr-2" /> info@mydomain.com</a>
            </div>
            <div className="col-lg-3 text-right">
              <Link href="/login" className="small mr-3"><a><span className="icon-unlock-alt" />Log In </a></Link>
              <a href="register.html" className="small btn btn-primary px-4 py-2 rounded-0"><span className="icon-users" /> Register</a>
            </div>
          </div>
        </div>
      </div>
      <header className="site-navbar py-4 js-sticky-header site-navbar-target sticky-wrapper" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">

              <Link href="/" className="d-block">
                <a>
                  <Image src="/assets/images/logo.jpg" alt="Image" className="img-fluid" width="100px" height="30px" />
                </a>
              </Link>
            </div>
            <div className="mr-auto">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  <NavLink href={"/"} exact >Home</NavLink>
                  <NavLink href={"/about"} exact >About Us</NavLink>
                  <NavLink href={"/courses"} exact >Courses</NavLink>
                  <NavLink href={"/downloadCertificate"} exact >Download Certificate</NavLink>
                  <NavLink href={"/contact"} exact >Contact</NavLink>
                </ul>
              </nav>
            </div>
            <div className="ml-auto">
              <div className="social-wrap">
                <a href="#"><span className="icon-facebook" /></a>
                <a href="#"><span className="icon-twitter" /></a>
                <a href="#"><span className="icon-linkedin" /></a>
                <a onClick={handleMenu} href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header