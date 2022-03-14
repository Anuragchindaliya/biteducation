import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
    return (
        <div className="site-section ftco-subscribe-1" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <h2>Get In Touch</h2>
                        <p>Stay future-ready with new-age courses </p>
                    </div>
                    <div className="col-lg-2">
                        <Link to={"/contact"} className="btn btn-primary rounded py-3 px-4 w-100" type="submit">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta