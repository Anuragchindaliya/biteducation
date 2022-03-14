import React from 'react'
import { Carousel } from 'react-bootstrap';

const BannerSliders = () => {

    const nextIcon = <span aria-hidden="true" className="carousel-control-next-icon" />;
    const settings = {
        prevLabel: false,
        nextLabel: false,
        touch: true,
        fade: true,
        nextIcon
    }
    const images = [
        "assets/banner/all-computer.jpg",
        "assets/banner/banner2.jpg",
        "assets/banner/manyta.jpg",
        "assets/banner/teachers.jpg",
        "assets/banner/studying.jpg",
        "assets/banner/website-design.jpg",
        "assets/banner/learn-computer.jpg",
        "assets/banner/our-courses.jpg",
        "assets/banner/banner-2.jpg",
    ]
    return (
        <div className='site-section mt-5 mt-sm-5'>
            <Carousel {...settings}>
                {images.map((img, idx) => (<Carousel.Item key={idx}>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>))}
            </Carousel>
        </div>
    )
}

export default BannerSliders