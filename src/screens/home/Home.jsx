import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Svg1 from "../../components/svg1/Svg1";
import "./Home.css";
import Button from "../../components/Button/Button";
import We_do from "../../components/Wedo/Wedo";
import SPS from "../../components/SPS/SPS";
import Support from "../../components/Support/Support";
import OurClient from "../../components/OurClient/OurClient";
import Footer from "../../components/Footer/Footer";
// import We_do from "../../components/Wedo/Wedo"
// import AppAssets from '../../core/App_assests'
const Home = () => {
  const color1 = "#ECE7E4";
  const color2 = "#fff";
  return (
    <>
      <div className="home-main">
        <div className="home-m-1">
          {/* <img src="../../assets/Images/10001.jpg" alt="where i am"/> */}
          <Navbar />
          <div className="home-m-1-1">
            <div className="home-m-1-1-1">
              <div className="home-m-1-1-1-1">
                <span id="m-s-1">SMARTER SOLUTIONS FOR A CLEANER FUTURE</span>
              </div>
              <div className="home-m-1-1-1-2">
                <span id="m-s-2">
                  We are power system engineering consultants specialising in
                  modelling, simulation, and analysis.
                </span>
              </div>
              <div className="home-m-1-1-1-3">
                <span id="m-s-3">
                  <Button
                    btnText="Contact Us Today"
                    height="60px"
                    width="250px"
                    onClick={() => alert("Button clicked!")}
                  />
                </span>
              </div>
            </div>
            <div className="home-m-1-1-2">
              <Svg1 main={color1} />
            </div>
          </div>
        </div>
        <div className="home-m-2">
          <We_do />
        </div>
        <div className="home-m-3">
          <SPS />
        </div>
        <div className="home-m-4">
          <OurClient />
        </div>
        <div className="home-m-5">
          <Support color2={color2}/>
        </div>
        <div className="home-m-6">
          <Footer  />
        </div>
      </div>
    </>
  );
};

export default Home;
