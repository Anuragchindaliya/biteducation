import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import CourseCard from "../components/CourseCard";
import { VscMortarBoard, VscWorkspaceTrusted } from "react-icons/vsc";
import { BiLaptop } from "react-icons/bi";
import Services from "../components/common/Services";
import Cta from "../components/common/Cta";
import BannerSliders from "../components/BannerSliders";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const courses = [
    {
      title: "BASIC COMUTER COURSE",
      img: "./assets/images/course_6.jpg",
      description:
        "Basic fundamental, MS Paint, Keyboard Keys, Microsoft Word, Microsoft Excel,   Microsoft Power Point, File Management, Desktop Editing, Shortcut Keys. Internet:- Searching information and images, Prepare file & Project,  Printout, Create & sending email etc.",
      price: "Top",
      duration: "2 Months",
    },
    {
      title: "ADVANCE EXCEL & INTERNET",
      img: "./assets/images/course_2.jpg",
      description:
        "Advance Internet:- Scanning documents, Railway Ticket booking, Govt. Jobs Online Form. Advance Excel:-      Vlookup, H lookup , Consolidate, Data Filter, Chart/Graph, Pivot Table,  Conditional Formatting. Salary Slip, Data Entry , Company Work.",
      price: "Rs. 800/-",
      duration: "10 Days",
    },
    {
      title: "TALLY ERP 9",
      img: "./assets/images/course_4.jpg",
      description:
        "Basic fundamental of Accounting, Entries in Register, Company information, create delete and alteration of company, Accounting information: Accounting Voucher, Inventory Mangement, Stock item. GST (Goods and Service Tax), Payroll.",
      price: "Rs. 3000/-",
      duration: "3 Months	",
    },
    {
      title: "COMPUTER REPARING",
      img: "./assets/images/course_4.jpg",
      description:
        "Basic Information of Computer Parts:- Motherboard, RAM, CPU, Hard Disk, SMPS etc. Computer Assembling, Booting process and System setup, Create partition and formatting the partition, windows installation(Windows XP, Windows 7, Windows 8, Windows 10), Software Installation (System software and Application software), Desktop editing and File Management, Manage Computer Console, Administrative Rights , User creation and setting, Password Policy, Disk partition from Manage Console, Antivirus installation, Printer installation (inkjet & LaserJet).",
      price: "TOP",
      duration: "2 Months",
    },
    {
      title: "PHOTOSHOP & COREL DRAW",
      img: "./assets/images/course_4.jpg",
      description:
        "Opening new files, existing files, exploring the toolbox, Application Bar, Exploring panels & Menus, creating & viewing a new document. Zooming & panning an image rulers, guides undoing, steps with history , color correction, understanding pixels & resolution, Cropping & straightening an image, adjusting canvas size and canvas rotation. Elliptical marquee tool, using magic wand & free hand tool, combining selection, magnetic polygonal lasso tool. Quick selection & refine edge, modify selection, understanding the background layer. Creating, selecting, linking & deleting layers. Blending modes, opacity & fill, creating modifying text.",
      price: "TOP",
      duration: "3 Months	",
    },
    {
      title: "AUTOCAD MECHANICAL",
      img: "./assets/images/course_4.jpg",
      description:
        "Basic Information of Computer Parts:- Motherboard, RAM, CPU, Hard Disk, SMPS etc. Computer Assembling, Booting process and System setup, Create partition and formatting the partition, windows installation(Windows XP, Windows 7, Windows 8, Windows 10), Software Installation (System software and Application software), Desktop editing and File Management, Manage Computer Console, Administrative Rights , User creation and setting, Password Policy, Disk partition from Manage Console, Antivirus installation, Printer installation (inkjet & LaserJet).",
      price: "TOP",
      duration: "3 Months	",
    },
  ];
  return (
    <div className="">
      <BannerSliders />
      <Banner />
      {/* feature */}
      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-lg-4 mb-5">
              <h2 className="section-title-underline mb-5">
                <span>Why Academics Works</span>
              </h2>
            </div>
          </div>
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
                BIT Computer Education is an Accredited By Nielit Under MCIT
                (Ministry OF Communication and Information Technology) Govt. Of
                India. BIT has been established with a primary objective to
                enhance the skills of the youth of India at Affordable Fee to
                meet the growing demands of modern industrialization.
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
            {courses.slice(0, 3).map((course, i) => (
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
      {/* our Philosphy */}
      <Services />
      <Cta />
      <Testimonials />
      {/* news updates */}
      {/* <div className="news-updates">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="section-heading">
                <h2 className="text-black">News &amp; Updates</h2>
                <a href="#/">Read All News</a>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="post-entry-big">
                    <a href="news-single.html" className="img-link">
                      <img
                        src="./assets/images/blog_large_1.jpg"
                        alt="blog3"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#/">June 6, 2019</a>
                        <span className="mx-1">/</span>
                        <a href="#/">Admission</a>, <a href="#/">Updates</a>
                      </div>
                      <h3 className="post-heading">
                        <a href="news-single.html">
                          Campus Camping and Learning Session
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="post-entry-big horizontal d-flex mb-4">
                    <a href="news-single.html" className="img-link mr-4">
                      <img
                        src="./assets/images/blog_1.jpg"
                        alt="blog1"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#/">June 6, 2019</a>
                        <span className="mx-1">/</span>
                        <a href="#/">Admission</a>, <a href="#/">Updates</a>
                      </div>
                      <h3 className="post-heading">
                        <a href="news-single.html">
                          Campus Camping and Learning Session
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="post-entry-big horizontal d-flex mb-4">
                    <a href="news-single.html" className="img-link mr-4">
                      <img
                        src="./assets/images/blog_2.jpg"
                        alt="blop4"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#/">June 6, 2019</a>
                        <span className="mx-1">/</span>
                        <a href="#/">Admission</a>, <a href="#/">Updates</a>
                      </div>
                      <h3 className="post-heading">
                        <a href="news-single.html">
                          Campus Camping and Learning Session
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="post-entry-big horizontal d-flex mb-4">
                    <a href="news-single.html" className="img-link mr-4">
                      <img
                        src="./assets/images/blog_1.jpg"
                        alt="blog5"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content">
                      <div className="post-meta">
                        <a href="#/">June 6, 2019</a>
                        <span className="mx-1">/</span>
                        <a href="#/">Admission</a>, <a href="#/">Updates</a>
                      </div>
                      <h3 className="post-heading">
                        <a href="news-single.html">
                          Campus Camping and Learning Session
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="section-heading">
                <h2 className="text-black">Campus Videos</h2>
                <a href="#/">View All Videos</a>
              </div>
              <a
                href="https://vimeo.com/45830194"
                className="video-1 mb-4"
                data-fancybox
                data-ratio={2}
              >
                <span className="play">
                  <span>
                    <FaPlay />
                  </span>
                </span>
                <img
                  src="./assets/images/course_5.jpg"
                  alt="blog2"
                  className="img-fluid"
                />
              </a>
              <a
                href="https://vimeo.com/45830194"
                className="video-1 mb-4"
                data-fancybox
                data-ratio={2}
              >
                <span className="play">
                  <span>
                    <FaPlay />
                  </span>
                </span>
                <img
                  src="./assets/images/course_5.jpg"
                  alt="blog3"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
