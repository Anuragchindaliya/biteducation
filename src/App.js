import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import About from "./pages/about";
import "./styles/globals.css";
import "./styles/bootstrap/bootstrap.scss";
import "./styles/bootstrap/bootstrap-grid.scss";
import "./styles/style.scss";
import Header from "./components/common/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
