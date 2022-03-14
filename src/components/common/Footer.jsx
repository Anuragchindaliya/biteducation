import React from 'react'

import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { courses } from '../../pages/api/courses';
import { menus } from '../../pages/api/menus';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="mb-4"><img src="./assets/images/BIT-LOGO-600.png" alt='logo' width="100" height={"100"} className="img-fluid" /></p>
                        <p>BIT Computer Education and Services offers training and development solutions to individuals, Enterprises and Institutions. We care deeply about each and every one of our students and don’t want any of them to have to suffer the consequences of living in poverty, which is our main motivation for teaching.</p>
                        <p><Link to="/about">Read More</Link></p>
                    </div>
                    <div className="col-lg-2">
                        <h3 className="footer-heading"><span>Menu</span></h3>
                        <ul className="list-unstyled">
                            {menus.map((menu, i) => (<li key={i}><Link to={menu.link}>{menu.title}</Link></li>))}
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="footer-heading"><span>Our Courses</span></h3>
                        <ul className="list-unstyled">
                            {courses.map((course, i) => (<li key={i}> {course.url ? <Link to={course.url && ""}>{course.title}</Link> : <span> {course.title}</span>}</li>))}
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="footer-heading"><span>Contact</span></h3>
                        <ul className="list-unstyled">
                            <li><strong className='font-weight-bold'>Address:</strong> Shop No. 17/18, Nain chowk, Nangla Road, Jawahar colony NIT Faridabad, Haryana 121005</li>
                            <li><strong className='font-weight-bold'>Email:</strong> bitcomputer007@gmail.com</li>
                            <li><strong className='font-weight-bold'>Contact No.:</strong> 8287166159, 9315523546</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="copyright">
                            <p>
                                Copyright © All rights reserved | This template is made with <FaHeart /> by <a href="https://web2rise.com" target="_blank" rel='noreferrer'>Web2Rise</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer