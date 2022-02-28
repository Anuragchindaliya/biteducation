import React from 'react'
import { Carousel } from 'react-bootstrap'

const BannerSliders = () => {

    const nextIcon = <span aria-hidden="true" className="carousel-control-next-icon" />;
    const settings = {
        prevLabel: false,
        nextLabel: false,
        touch: true,
        fade: true,
        nextIcon
    }
    return (
        <div className='site-section mt-5 mt-sm-5'>
            <Carousel {...settings}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/ccc.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/banner-2.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/banner2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerSliders