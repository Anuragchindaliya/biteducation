// import "./styles/bootstrap/bootstrap.scss";
// import "./styles/bootstrap/bootstrap-grid.scss";
// import "./styles/style.scss";
import "./styles/custom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Courses,
  Contact,
  DownloadCertificate,
  Login,
} from "./pages";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Gallery from "./pages/gallery";
import { ADCA, DCA, BCC, CCC, Tally, DCTT } from "./components/courses";
import { courses } from "./pages/api/courses";
import InterLinking from "./components/common/InterLinking";
import OurServices from "./pages/ourServices";
function App() {
  return (
    <>
      <BrowserRouter basename="bitcomputer">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/downloadCertificate">
            <DownloadCertificate />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/services">
            <OurServices />
          </Route>
          {/* {courses.map((course, i) => (
            <Route
              key={i}
              path={course.title.replaceAll(" ", "-").toLowerCase()}
            >
              <ADCA />
            </Route>
          ))} */}
          {/* courses */}
          <Route path="/adca">
            <ADCA />
          </Route>
          <Route path="/dca">
            <DCA />
          </Route>
          <Route path="/bcc">
            <BCC />
          </Route>
          <Route path="/ccc">
            <CCC />
          </Route>
          <Route path="/tally">
            <Tally />
          </Route>
          <Route path="/dctt">
            <DCTT />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
