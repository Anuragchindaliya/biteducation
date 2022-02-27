import React from 'react'

const Jumbotron = ({ title = "Home", desc = "Bit Computer Education" }) => {
    // site-section ftco-subscribe-1 site-blocks-cover pt-sm-5
    return (
        <div className="site-section ftco-subscribe-1 mt-5 mt-sm-5" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7">
                        <h2 className="mb-0">{title}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron