import React from 'react'

const Jumbotron = ({ title = "Home" }) => {
    return (
        <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
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