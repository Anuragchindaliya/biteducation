import React from 'react'

const Breadcrumb = ({ currentPage = "About" }) => {
    return (
        <div className="custom-breadcrumns border-bottom">
            <div className="container">
                <a href="#">Home</a>
                <span className="mx-3 icon-keyboard_arrow_right" />
                <span className="current">{currentPage}</span>
            </div>
        </div>
    )
}

export default Breadcrumb