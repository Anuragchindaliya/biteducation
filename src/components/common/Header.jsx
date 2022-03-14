import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import { FaFacebookF, FaTwitter, } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsQuestionCircle, BsTelephoneFill, BsLockFill, BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Nav from './Nav';
import { menus } from '../../pages/api/menus';

const Header = () => {
  // const [isMenuActive, setMenuActive] = useState(false)
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  const handleMenu = () => {
    const body = document.querySelector("body")
    if (body.classList.contains("offcanvas-menu")) {
      body.classList.remove("offcanvas-menu");
    } else {
      body.classList.add("offcanvas-menu");
    }
  }



  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3" onClick={handleMenu}>
            <span className=" js-menu-toggle"><AiOutlineClose /></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            {menus.map((menu, i) => (<Nav key={i} href={menu.link} {...menu} mob />))}
          </ul>
        </div>
      </div>
      <div className="py-2 bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 d-none d-lg-block">
              <Link to="/contact" className="small mr-3 text-white">
                <span className=" mr-2"><BsQuestionCircle /></span> Have a questions?
              </Link>
              <a href="tel:+91-8287166159" className="small ml-3 text-white font-weight-bold">
                <span><BsTelephoneFill /></span> 8287166159,
              </a>
              <a href="tel:+91-9315523546" className="small ml-3 text-white font-weight-bold"> 9315523546
              </a>
              <a href="mailto:bitcomputer007@gmail.com" className="small ml-3 text-white font-weight-bold">
                <span className="mr-2"><AiOutlineMail /></span> bitcomputer007@gmail.com
              </a>
            </div>
            <div className="col-lg-4 text-right ">
              <Link to="/login" className="small mr-3 text-white">
                <BsLockFill /> Log In
              </Link>
              <Link to="/downloadcertificate" className="small btn bg-white text-danger"><span className='pr-1'><BsFillFileEarmarkArrowDownFill /></span> Download Certificate</Link>
            </div>
          </div>
        </div>
      </div>
      <header className="site-navbar py-4 js-sticky-header site-navbar-target sticky-wrapper" role="banner">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <Link to="/" className="d-block">
                <img src="./assets/images/BIT-LOGO-600.png" alt="logo" className="img-fluid" width="100px" height="30px" />
              </Link>
            </div>
            <div className="ml-auto">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                  {menus.map((menu, i) => (<Nav key={i} href={menu.link} {...menu} />))}
                </ul>
              </nav>
            </div>
            <div className="">
              <div className="social-wrap">
                <a href="#/"><span><FaFacebookF /></span> </a>
                <a href="#/"><span ><FaTwitter /></span></a>
                <a href="https://wa.me/+91-8287166159" target="_blank" rel="noreferrer"><span><RiWhatsappFill /></span> </a>
                <i onClick={handleMenu} className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black">
                  <span><AiOutlineMenu /></span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header