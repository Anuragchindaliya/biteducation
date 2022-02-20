import React from 'react'

const DescriptionCard = ({ data }) => {
    return (
        <div className="row mb-5">
            <div className={`col-lg-6 mb-lg-0 mb-4 ${data.imgPos === "left" && "order-1 order-lg-2"}`}>
                <img src={data.img} alt="Image" className="img-fluid" />
            </div>
            <div className={`col-lg-5 align-self-center ${data.imgPos === "left" ? "order-2 order-lg-1 mr-auto" : "order-2 order-lg-1 ml-auto"}`}>
                <h2 className="section-title-underline mb-5">
                    <span>{data.title}</span>
                </h2>
                {data.descriptions.map((desc, i) => <p key={i}>{desc}</p>)}
                {data.duration && <span className='btn btn-primary'>{data.duration}</span>}
            </div>
        </div>
    )
}

export default DescriptionCard