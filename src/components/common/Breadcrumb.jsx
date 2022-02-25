import React from 'react'
import { BsChevronRight } from "react-icons/bs"
const Breadcrumb = ({ currentPage = "About" }) => {
    return (
        <div className="custom-breadcrumns border-bottom">
            <div className="container">
                <a href="#">Home</a>
                <span className="mx-3"> <BsChevronRight /></span>

                <span className="current">{currentPage}</span>
            </div>
        </div >
    )
}

export default Breadcrumb