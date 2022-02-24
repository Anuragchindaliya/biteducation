import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaUsers } from "react-icons/fa";
import { BsUnlockFill, BsQuestionCircle, BsTelephoneFill, BsEnvelope } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



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
            <span className=" js-menu-toggle"><AiOutlineClose /></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <NavLink href={"/"} exact mob="true" >Home mobile</NavLink>
            <NavLink href={"/about"} exact mob="true" >About Us</NavLink>
            <NavLink href={"/courses"} exact mob="true" >Courses</NavLink>
            <NavLink href={"/downloadCertificate"} exact mob="true">Download Certificate</NavLink>
            <NavLink href={"/contact"} exact mob="true" >Contact</NavLink>
          </ul>
        </div>
      </div>
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 d-none d-lg-block">
              <a href="#" className="small mr-3">
                <span className=" mr-2"><BsQuestionCircle /></span> Have a questions?</a>
              <a href="#" className="small ml-3">
                <span><BsTelephoneFill /></span> 10 20 123 456
              </a>
              <a href="#" className="small ml-3">
                <span className="mr-2"><BsEnvelope /></span> info@mydomain.com
              </a>
            </div>
            <div className="col-lg-3 text-right">
              <Link href="/login" className="small mr-3"><a>
                <BsUnlockFill /> Log In </a></Link>
              <a href="register.html" className="small btn btn-primary rounded-0"><span className='pr-1'><FaUsers /></span> Register</a>
            </div>
          </div>
        </div>
      </div>
      {/* site-navbar py-4 js-sticky-header site-navbar-target shrink */}
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
                <a href="#"><span><FaFacebookF /></span> </a>
                <a href="#"><span ><FaTwitter /></span></a>
                <a href="#"><span><FaLinkedinIn /></span> </a>
                <a onClick={handleMenu} href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black">
                  <span className="icon-menu h3" />
                  <span><AiOutlineMenu /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div >
  )
}

export default Header