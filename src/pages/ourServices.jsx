import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb'
import Jumbotron from '../components/common/Jumbotron'
import CourseCard from '../components/CourseCard'

const OurServices = () => {
    const services = [
        {
            title: "LAPTOP REPAIRING",
            descriptions: [
                "सभी प्रकार के कंप्यूटर व लैपटॉप रिपेयर किये जाते हैं|",
            ],
            img: "./assets/services/computer-repair.png",
            imgPos: "right",

            duration: "2 Months",
        },
        {
            title: "LAPTOP SALE & PURCHASE",
            descriptions: [
                "पुराने लैपटॉप उचित रेट पर खरीदें व बेचे जाते हैं।",
            ],
            img: "./assets/services/laptop.jpeg",
            imgPos: "right",

            duration: "2 Months",
        },
        {
            title: "COMPUTER & LAPTOP PARTS",
            descriptions: [
                "कम्प्यूटर व लैपटॉप का नया तथा पुराना सामान दिल्ली रेट पर मिलता है।",
            ],
            img: "./assets/services/computer-accessories.jpg",
            imgPos: "right",

            duration: "2 Months",
        },
        {
            title: "PASSPORT CONSULTANCY",
            descriptions: [
                "पासपार्ट बनवायें मात्र 25 दिन में|",
            ],
            img: "./assets//services/passport1.jpg",
            imgPos: "left",

            duration: "2 Months",
        },
        {
            title: "AADHAR CARD",
            descriptions: [
                "आधार कार्ड प्रिंट करके लेमिनेशन करवाएं|",
            ],
            img: "./assets/services/product-jpeg.jpeg",
            imgPos: "right",

            duration: "3 Months",
        },
        {
            title: "स्कूल व कॉलेज प्रौजेक्ट।",
            descriptions: [
                "सभी प्रकार के कॉलेज व स्कूल के प्रोजेक्ट बनाये जाते हैं|",
            ],
            img: "./assets/services/college-project-reports.jpg",
            imgPos: "left",
            duration: "2 Months",
        },
        {
            title: "ऐफिडेविट",
            descriptions: [
                "सभी प्रकार के ऐफिडेविट बनवाये जाते हैं|",
            ],
            img: "./assets/services/affidavit.jpg",
            imgPos: "right",
            duration: "2 Months",
        },
        {
            title: "Govt. JOB",
            descriptions: [
                "सरकारी व प्राइवेट नौकरी के ऑनलाइन फॉर्म भरे जाते हैं|",
            ],
            img: "./assets/services/sarkari-jobs.jpg",
            imgPos: "left",
            duration: "2 Months",
        },
        {
            title: "प्रिंट व लेमिनेशन ",
            descriptions: [
                "कलर व B&W प्रिंट निकाले जाते हैं| ",
            ],
            img: "./assets/services/lemination.webp",
            imgPos: "right",
            duration: "2 Months",
        }
    ]
    return (
        <div className='mb-5 pb-5'>
            <Jumbotron title='Other Services' />
            <Breadcrumb currentPage='Services' />
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-lg-6 mt-5">
                            <h2 className="section-title-underline mb-3">
                                <span>Other Services</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((course, i) => (
                            <CourseCard key={i} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices