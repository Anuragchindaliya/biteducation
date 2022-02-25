import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Cta from '../components/common/Cta'
import Jumbotron from '../components/common/Jumbotron'
import Services from '../components/common/Services'
import DescriptionCard from '../components/DescriptionCard'

const about = () => {
    const servicesDescription = [
        {
            title: "Why Academics Works",
            descriptions: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?", "Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere."],
            img: "/assets/images/course_4.jpg",
            imgPos: "right"
        },
        {
            title: "Personalized Learning",
            descriptions: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?", "Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere."],
            img: "/assets/images/course_5.jpg",
            imgPos: "left"
        }
    ]
    return (
        <>
            <Head>
                <title>About - Bit Education</title>
            </Head>

            <Jumbotron title='About Us' />
            <Breadcrumb currentPage='About' />
            <div className="container pt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="section-title-underline">
                            <span>Academics History</span>
                        </h2>
                    </div>
                    <div className="col-lg-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, iure dolorum! Nam veniam tempore tenetur aliquam architecto, hic alias quia quisquam, obcaecati laborum dolores. Ex libero cumque veritatis numquam placeat?</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Nam veniam tempore tenetur aliquam
                            architecto, hic alias quia quisquam, obcaecati laborum dolores. Ex libero cumque veritatis numquam placeat?</p>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    {servicesDescription.map((service, i) => <DescriptionCard key={i} data={service} />)}
                </div>
            </div>

            <Services />
            {/* our teacher section */}
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-lg-4 mb-5">
                            <h2 className="section-title-underline mb-5">
                                <span>Our Teachers</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                            <div className="feature-1 border person text-center">
                                <div className="top-shift">
                                    <Image src="/assets/images/person_1.jpg" alt="Image" className="img-fluid"
                                        width={"100px"} height="100px"
                                    />
                                </div>

                                <div className="feature-1-content">
                                    <h2>Craig Daniel</h2>
                                    <span className="position mb-3 d-block">Math Teacher</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                            <div className="feature-1 border person text-center">
                                <div className="top-shift">
                                    <Image src="/assets/images/person_2.jpg" alt="Image" className="img-fluid"
                                        width={"100px"} height="100px"
                                    />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Taylor Simpson</h2>
                                    <span className="position mb-3 d-block">Math Teacher</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                            <div className="feature-1 border person text-center">
                                <div className="top-shift">
                                    <Image src="/assets/images/person_3.jpg" alt="Image" className="img-fluid"
                                        width={"100px"} height="100px"
                                    />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Jonas Tabble</h2>
                                    <span className="position mb-3 d-block">Math Teacher</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                            <div className="feature-1 border person text-center">
                                <div className="top-shift">
                                    <Image src="/assets/images/person_4.jpg" alt="Image" className="img-fluid"
                                        width={"100px"} height="100px"
                                    />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Craig Daniel</h2>
                                    <span className="position mb-3 d-block">Math Teacher</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                            <div className="feature-1 border person text-center">
                                <div className="top-shift">
                                    <Image src="/assets/images/person_1.jpg" alt="Image" className="img-fluid"
                                        width={"100px"} height="100px"
                                    />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Taylor Simpson</h2>
                                    <span className="position mb-3 d-block">Math Teacher</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                            <div className="feature-1 border person text-center">
                                <div className="top-shift">
                                    <Image src="/assets/images/person_1.jpg" alt="Image" className="img-fluid"
                                        width={"100px"} height="100px"
                                    />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Jonas Tabble</h2>
                                    <span className="position mb-3 d-block">Math Teacher</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <Cta />
        </>
    )
}

export default about