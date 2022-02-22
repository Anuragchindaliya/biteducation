import React from 'react'

const Cta = () => {
    return (
        <div className="site-section ftco-subscribe-1" style={{ backgroundImage: 'url("assets/images/bg_1.jpg")' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h2>Subscribe to us!</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                    </div>
                    <div className="col-lg-5">
                        <form className="d-flex">
                            <input type="text" className="rounded form-control mr-2 py-3" placeholder="Enter your email" />
                            <button className="btn btn-primary rounded py-3 px-4" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta