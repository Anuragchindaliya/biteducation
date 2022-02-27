import React from 'react'
import { BsChevronRight } from "react-icons/bs"
import { Link } from 'react-router-dom'
const Breadcrumb = ({ currentPage = "About" }) => {
    return (
        <div className="custom-breadcrumns border-bottom">
            <div className="container">
                <Link to="/">Home</Link>
                <span className="mx-3"> <BsChevronRight /></span>

                <span className="current">{currentPage}</span>
            </div>
        </div >
    )
}

export default Breadcrumb