import React from "react";
import "./About.css";
import Svg1 from "../../components/svg1/Svg1";
import Navbar from "../../components/Navbar/Navbar";
import Snapshot from "../../components/Snapshot/Snapshot";
import Director from "../../components/Director/Director";
import Mission from "../../components/Mission/Mission";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";
const About = () => {
  const color1 = "#fff";
  return (
    <>
      <div className="about">
        <div className="abo1">
          <Navbar />
          <div className="abo1-1">
            <div className="abo1-1-1">
              <span>About</span>
            </div>
            <div className="abo1-1-1">
              {" "}
              <Svg1 main={color1} />
            </div>
          </div>
        </div>
        <div className="abo2">
          <Snapshot />
        </div>
        <div className="abo3">
          <Director />
        </div>
        <div className="abo4">
          <Mission />
        </div>
        <div className="abo5">
          <Support />
        </div>
        <div className="abo6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
