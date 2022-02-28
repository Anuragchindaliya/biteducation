
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Jumbotron from '../components/common/Jumbotron'
import DescriptionCard from '../components/DescriptionCard'
import { courses } from './api/courses'

const Courses = () => {
    return (
        <div className=''>
            <Jumbotron title='Our Courses' />
            <Breadcrumb currentPage='Courses' />
            <div className="mt-5">
                <div className="container">

                    {/* {courses.map((course, i) => <CourseCard key={i} course={course} />)} */}
                    {courses.map((service, i) => <DescriptionCard key={i} data={service} index={i} />)}

                </div>
            </div>
        </div>
    )
}

export default Courses