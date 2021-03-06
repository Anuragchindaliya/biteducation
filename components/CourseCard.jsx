import Image from 'next/image'
import React from 'react'

const CourseCard = ({ course }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="course-1-item">
                <figure className="thumnail">
                    {/* 800 x 494 px  */}
                    <Image src={course.img} alt="Image" className="img-fluid"
                        width={"800px"} height="494px"
                        //   layout='fill' objectFit='cover'
                        layout='responsive'
                    />
                    <div className="price">{course.price}</div>
                    <div className="category"><h3>{course.title}</h3></div>
                </figure>
                <div className="course-1-content pb-4">
                    <p className="desc mb-4">{course.description}</p>
                    <p><a className="btn btn-primary rounded-0 px-4 text-white">Duration : {course.duration}</a></p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard