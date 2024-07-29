import React from 'react'
import "./OurClient.css"
import SVG from "../../components/SVG/SVG"
import Svg2 from "../../components/Svg2/Svg2"
const OurClient = () => {
    const color1 = "#B01F63";
  const color2 = "#fff";
  return (
    <>
      <div className="our">
        <div className="our1">
            <div className="our1-1">
                <span>Our Clients</span>
            </div>
            <div className="our1-2">
                <div className="a">
                <div className="our1-2-1"><img src="/Images/c1.png" alt="rfr" /></div>
                <div className="our1-2-2"><img src="/Images/c2.png" alt="cdc" /></div>
                <div className="our1-2-3"><img src="/Images/c3.png" alt="er" /></div>
                <div className="our1-2-4"><img src="/Images/c4.png" alt="ju" /></div>
                <div className="our1-2-5"><img src="/Images/c5.png" alt="wer" /></div>
                </div>
               <div className="b">
               <div className="our1-2-6"><img src="/Images/c6.png" alt="vfe" /></div>
                <div className="our1-2-7"><img src="/Images/c7.png" alt="rgewe" /></div>
                <div className="our1-2-8"><img src="/Images/c8.png" alt="werw" /></div>
                <div className="our1-2-9"><img src="/Images/c9.png" alt="gft" /></div>
                <div className="our1-2-10"><img src="/Images/c10.png" alt="wer" /></div>
                <div className="our1-2-11"><img src="/Images/c11.png" alt="erghb" /></div>
            </div>
               </div>
               
        </div>
        {/* <div className="our2">
<Svg2 main={color1}/>
        </div> */}
      </div>
    </>
  )
}

export default OurClient
