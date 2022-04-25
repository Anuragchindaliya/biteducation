import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import CourseCard from "../components/CourseCard";
import { VscMortarBoard, VscWorkspaceTrusted } from "react-icons/vsc";
import { BiLaptop } from "react-icons/bi";
import Cta from "../components/common/Cta";
import BannerSliders from "../components/BannerSliders";
import { courses } from "./api/courses";

export default function Home() {
  return (
    <>
      <BannerSliders />
      <Banner />
      {/* feature */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="feature-1 border">
                <div className="icon-wrapper bg-primary">
                  <span>
                    <VscMortarBoard />
                  </span>
                </div>
                <div className="feature-1-content">
                  <h2>Personalize Learning</h2>
                  <p>
                    Personalized learning is an educational approach that aims
                    to customize learning for each student's strengths, needs,
                    skills, and interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="feature-1 border">
                <div className="icon-wrapper bg-primary">
                  <span>
                    <VscWorkspaceTrusted />
                  </span>
                </div>
                <div className="feature-1-content">
                  <h2>Trusted Courses</h2>
                  <p>
                    This course introduces students to the processes of
                    creating, developing based on personal experiences,
                    observations, and reactions to short reading selections.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="feature-1 border">
                <div className="icon-wrapper bg-primary">
                  <span>
                    <BiLaptop />
                  </span>
                </div>
                <div className="feature-1-content">
                  <h2>Tools for Students</h2>
                  <p>
                    We provide best learning quipment for Students. Each student
                    gets a learning plan that's based on what they know and how
                    they learn best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about our University */}
      <div
        className="section-bg style-1"
        style={{ backgroundImage: 'url("assets/images/about_1.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="section-title-underline style-2">
                <span>About Our Institute</span>
              </h2>
            </div>
            <div className="col-lg-8">
              <p className="lead">
                BIT Computer Education &amp; services has been established with
                a primary objective to enhance the skills of the youth of India
                at Affordable Fee to meet the growing demands of modern
                industrialization.
              </p>
              <p className="lead">
                Even though the central and state Governments have made
                considerable effort to enhance the Skill of the Youth, there
                Continues to be a huge gap between the demand and supply of
                Skilled Workforce. This is magnified by the fact that with a
                population of over a billion people and majority in the average
                age of 15 years, nearly 300 million are underemployed or
                unemployed. On the other side industry is in acute shortage of
                skilled labor. This clearly highlights that most of our
                population is under skilled and therefore unemployable.
              </p>
              <p>
                <Link to="/about">Read more</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* popular courses */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-6 mt-5">
              <h2 className="section-title-underline mb-3">
                <span>Popular Courses</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {courses
              .filter((course) => course.url)
              .slice(0, 6)
              .map((course, i) => (
                <CourseCard key={i} course={course} />
              ))}
          </div>
          <div className="row justify-content-center">
            <Link
              to={"/courses"}
              className="btn btn-primary rounded-0 px-4 text-white"
            >
              View all Courses
            </Link>
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
}
