import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
// import Home from "./screens/home/Home";
import Contact from "./screens/contact/Contact";
import Services from "./screens/services/Service";
import About from "./screens/about/About";
import Home from "./screens/home/Home";
import ScrollToTop from "./components/SrollToTop/ScrollToTop";
// import ToggleParagraph from "./components/Toggle/Toggle";
// import Home from "./screens/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
