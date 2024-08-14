import React from "react";
import "./Service.css";
import Svg1 from "../../components/svg1/Svg1";
import Navbar from "../../components/Navbar/Navbar";
// import Snapshot from "../../components/Snapshot/Snapshot";
import Director from "../../components/Director/Director";
import Mission from "../../components/Mission/Mission";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";
import Wedo from "../../components/Wedo/Wedo";
import Connection from "../../components/Connection/Connection";
import Tog from "../../components/Tog/Tog";
import Network from "../../components/Network/Network";
import Acre from "../../components/Acre/Acre";
const Service = () => {
  const color1 = "#EBE7E4";
  const color2 ="#EBE7E4";
  
  return (
    <>
      <div className="service">
        <div className="ser1">
          <Navbar />
          <div className="ser1-1">
            <div className="ser1-1-1">
              <span>Services</span>
            </div>
            <div className="ser1-1-2">
              {" "}
              <Svg1 main={color1} />
            </div>
          </div>
        </div>
        <div className="ser2">
         <Wedo/>
        </div>
        <div className="ser3">
          <Connection/>
          {/* <Tog/> */}
          {/* <Network/> */}
          {/* <Director /> */}
        </div>
        <div className="ser4">
          {/* <Acre/> */}
         {/* <Mission /> */}
        </div>
        <div className="ser5">
          <Support color2={color2} />
        </div>
        <div className="ser6">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Service;
