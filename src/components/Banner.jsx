import { Link } from 'react-router-dom'
import React from 'react'

const Banner = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./assets/images/banner.svg" className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="section-title-underline mb-5"><span>You only have know one thing

                    </span></h1>
                    <p className="lead">  You can learn anything BIT COMPUTER EDUCATION</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/courses" className="btn btn-primary fw-500 me-2">
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right ms-2"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                        </Link>
                        <a className="btn btn-link fw-500" href="#!">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner