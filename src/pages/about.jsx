
import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import Cta from '../components/common/Cta'
import Jumbotron from '../components/common/Jumbotron'
import Services from '../components/common/Services'
import DescriptionCard from '../components/DescriptionCard'
import { BiBullseye } from "react-icons/bi";
import { BsEyeFill, BsFillFlagFill } from "react-icons/bs";

const About = () => {
    const servicesDescription = [
        {
            title: "Why Academics Works",
            descriptions: ["BIT Computer Education and Services is a leading Skills and Talent Development Institute that is building a manpower pool for global industry requirements. The institute was set up in 2007 to help the industry overcome its human resource challenges."],
            img: "./assets/images/course_4.jpg",
            imgPos: "right"
        },
        {
            title: "Personalized Learning",
            descriptions: ["BIT Computer Education and Services offers training and development solutions to individuals, Enterprises and Institutions. We care deeply about each and every one of our students and don’t want any of them to have to suffer the consequences of living in poverty, which is our main motivation for teaching.", "A wide variety of career, professional, short-term & certification courses designed for the learning & career needs of students, working professionals & others."],
            img: "./assets/images/course_5.jpg",
            imgPos: "left"
        },
        {
            title: "Director Message",
            descriptions: ["The Software industry has witnessed rapid growth in recent years. Personal computers are now being virtually in every office and corporate sector.", "With the increase in machines, the industry has demanded professionals to work with computers. Therefore the industry has commanded a greater demand for trained and skilled software, data management and networking experts to cater to this ever increasing need to support. We are here to create an institution that can make people self dependent in the era of ever increasing unemployment.So come, join us and enter the world of computer professionals and get into the most demanded trade today and tomorrow."],
            img: "./assets/images/bheem-raj.jpg",
            imgPos: "right"
        }
        ,
        {
            title: "Become Computer Professional",
            descriptions: ["We train students in such a way that they can become expert computer professional with less effort by providing a complete education package along with strong network, quality friends, alumni, corporate relations, fun, excitement, celebrations, discipline, mentoring, counseling, skill building, personality development, showcasing talent, stimulating creativity, human relationships, ethics, value and much more.", "Experience all this with “ BIT Computer Education and Services”."],
            img: "./assets/images/hire-from-wifilearning.jpg",
            imgPos: "left"
        }
    ]
    return (
        <>
            <Jumbotron title='About Us' />
            <Breadcrumb currentPage='About' />
            <div className="container pt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="section-title-underline">
                            <span>Academics History</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="display-4 text-primary">
                            <BiBullseye />
                        </span>
                        <h3 className='text-primary'>Mission</h3>
                        <p>
                            Provide every student with a platform to refine his/ her skills and make a mark in the computer literate world. To sharpen one's skill and master new technologies and establish itself with a mission of “Bringing People and Computers Together Successfully”
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="display-4 text-primary">
                            <BsEyeFill />
                        </span>
                        <h3 className='text-primary'>Vision</h3>
                        <p>
                            BCE looks forward to being a recognized Model Private Computer Training Institute in the Country in meeting the prevailing needs of technical manpower through quality, efficient and resourceful training.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                        <span className="display-4 text-primary">
                            <BsFillFlagFill />
                        </span>
                        <h3 className='text-primary'>Motto / Goal</h3>
                        <p>
                            The MOTTO of "STRIVE FOR EXCELLENCE" adopted by the institute truly stands testimony to the commitment, enlightened vision and foresight. It is said “A FOCUSED MIND IS THE SOURCE OF ALL POWER”.
                        </p>
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
                                <div>
                                    <img src="./assets/images/person_1.jpg" alt="person 1" className="img-fluid"
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
                                <div>
                                    <img src="./assets/images/person_2.jpg" alt="person 2" className="img-fluid"
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
                                <div>
                                    <img src="./assets/images/person_3.jpg" alt=" 23" className="img-fluid"

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
                                <div>
                                    <img src="./assets/images/person_4.jpg" alt=" 23" className="img-fluid"

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
                                <div>
                                    <img src="./assets/images/person_1.jpg" alt=" 23" className="img-fluid"

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
                                <div>
                                    <img src="./assets/images/person_1.jpg" alt=" 23" className="img-fluid"

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

export default About