import React, { useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap';
import Breadcrumb from '../components/common/Breadcrumb'

import Jumbotron from '../components/common/Jumbotron'

const Gallery = () => {
    const [modalShow, setModalShow] = useState(false);
    const [activeData, setActiveData] = useState({})
    const allImages = [
        {
            title: "course 1",
            imgUrl: "./assets/images/course_1.jpg",
        },
        {
            title: "course 2",
            imgUrl: "./assets/images/course_2.jpg",
        },
        {
            title: "course 3",
            imgUrl: "./assets/images/course_3.jpg",
        },
        {
            title: "course 4",
            imgUrl: "./assets/images/course_4.jpg",
        },
        {
            title: "course 5",
            imgUrl: "./assets/images/course_5.jpg",
        },
        {
            title: "course 6",
            imgUrl: "./assets/images/course_6.jpg",
        }
    ];
    const handleActiveData = (img) => {
        setActiveData(img)
        setModalShow(true)
    }
    const settings = {
        prevLabel: false,
        nextLabel: false,
        touch: true,
        fade: true,
    }
    return (
        <div className='mb-5 pb-5'>
            <Jumbotron title='Our Gallery' />
            <Breadcrumb currentPage='Gallery' />
            <div className="container my-5">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-4"><h2 className="section-title-underline mb-5"><span>Our Gallery</span></h2></div>
                </div>
                <div className="row">
                    {allImages.map((img, idx) => (<div key={idx} className="col-md-4 mb-2">
                        <img src={img.imgUrl} onClick={() => handleActiveData(img)} className='container-fluid btn' alt="" />
                    </div>))}
                </div>
            </div>
            <Modal
                show={modalShow}
                size="xl"
                onHide={() => setModalShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                fullscreen
                centered
            >
                <Carousel {...settings}>
                    {allImages.map((img, idx) => (<Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={img.imgUrl}
                            alt={img.title}
                        />
                    </Carousel.Item>))}
                </Carousel>
            </Modal>
        </div>
    )
}

export default Gallery