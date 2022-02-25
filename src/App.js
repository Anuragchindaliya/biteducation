import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Courses,
  Contact,
  DownloadCertificate,
  Login,
} from "./pages";
import "./styles/globals.css";
import "./styles/bootstrap/bootstrap.scss";
import "./styles/bootstrap/bootstrap-grid.scss";
import "./styles/style.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/downloadCertificate"
            element={<DownloadCertificate />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
