
import React from 'react'
import { Link } from 'react-router-dom'

const DescriptionCard = ({ data, index }) => {
    return (
        <div className="row mb-5" id={`${data.title.replaceAll(" ", "-").toLowerCase()}`}>
            <div className={`col-lg-6 mb-lg-0 mb-4 p-relative ${data.imgPos === "left" && "order-1 order-lg-2"}`}>
                <img src={data.img} alt="blog6" className="img-fluid"
                />
            </div>
            <div className={`col-lg-6 align-self-center ${data.imgPos === "left" ? "order-2 order-lg-1 mr-auto" : "order-2 order-lg-1 ml-auto"}`}>
                <h2 className="section-title-underline mb-3">
                    <span>{data.title}</span>
                </h2>
                {data.descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
                {data.duration && <span className='btn btn-primary mr-2'>{data.duration}</span>}
                {data.url && <Link to={data.url} className='btn btn-primary'>Read More</Link>}
            </div>
        </div>
    )
}

export default DescriptionCard