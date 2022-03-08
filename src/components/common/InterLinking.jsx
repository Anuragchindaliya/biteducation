import React from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../../pages/api/courses'

const InterLinking = () => {
    return (
        <div className='container mb-5'>
            <hr />
            <h2 className="section-title-underline mb-3"><span>Other Courses</span></h2>
            {courses.filter((course) => course.url).map((course, i) => (<Link key={i} to={course.url} className="badge badge-pill badge-primary p-2 m-1 px-3">{course.title}</Link>))}
        </div>
    )
}

export default InterLinking