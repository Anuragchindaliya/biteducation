import React from 'react'

const Jumbotron = ({ title = "Home" }) => {
    // site-section ftco-subscribe-1 site-blocks-cover pt-sm-5
    return (
        <div className="site-section container-fluid ftco-subscribe-1 mt-5" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7">
                        <h2 className="mb-0">{title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron