import React from 'react'
import { SiMicrosoftacademic } from 'react-icons/si'
import { VscKey, VscMortarBoard } from 'react-icons/vsc'

const Services = () => {
    return (
        <div
            className="section-bg style-1"
            style={{ backgroundImage: 'url("assets/images/hero_1.jpg")' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="icon">
                            <VscMortarBoard />
                        </span>
                        <h3>Our Philosphy</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Reiciendis recusandae, iure repellat quis delectus ea? Dolore,
                            amet reprehenderit.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="icon">
                            <SiMicrosoftacademic />
                        </span>
                        <h3>Academics Principle</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Reiciendis recusandae, iure repellat quis delectus ea? Dolore,
                            amet reprehenderit.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="icon">
                            <VscKey />
                        </span>
                        <h3>Key of Success</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Reiciendis recusandae, iure repellat quis delectus ea? Dolore,
                            amet reprehenderit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services