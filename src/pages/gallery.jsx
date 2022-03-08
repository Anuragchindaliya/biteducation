import React, { useState } from 'react'
import { Carousel, Modal } from 'react-bootstrap';
import Breadcrumb from '../components/common/Breadcrumb'

import Jumbotron from '../components/common/Jumbotron'

const Gallery = () => {
    const [modalShow, setModalShow] = useState(false);
    const [index, setIndex] = useState(0);

    const allImages = [
        {
            title: "course 1",
            imgUrl: "./assets/gallery/outsite.jpeg",
        },
        {
            title: "course 2",
            imgUrl: "./assets/gallery/studying.jpeg",
        },
        {
            title: "course 3",
            imgUrl: "./assets/gallery/interior-1.jpeg",
        },
        {
            title: "course 4",
            imgUrl: "./assets/gallery/teacher.jpeg",
        },
        {
            title: "course 5",
            imgUrl: "./assets/gallery/English-speaking.jpeg",
        },
    ];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleActiveData = (idx) => {
        setIndex(idx);
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
                        <img src={img.imgUrl} onClick={() => handleActiveData(idx)} className='container-fluid btn' alt="" />
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
                <Carousel {...settings} activeIndex={index} onSelect={handleSelect}>
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