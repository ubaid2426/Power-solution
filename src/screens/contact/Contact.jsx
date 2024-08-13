import React from 'react'
import "./Contact.css"
import Support from '../../components/Support/Support'
import Footer from '../../components/Footer/Footer'
import Svg1 from '../../components/svg1/Svg1'
import Navbar from '../../components/Navbar/Navbar'
import Mail from '../../components/Mail/Mail'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from '../../components/Map/Map'
const Contact = () => {
  const color="#fff"
  return (
    <>
     <div className="contact">
     <div className="contact1">
          <Navbar />
          <div className="contact1-1">
            <div className="contact1-1-1">
              <span>Contact</span>
            </div>
            <div className="contact1-1-2">
              {" "}
              <Svg1 main={color} />
            </div>
          </div>
        </div>
      <div className="contact2">
        <Mail/>
        <ContactForm/>
        <Map/>
      </div>
      <div className="contact3">
        <Support color2={color}/>
      </div>
      <div className="contact4">
        <Footer/>
      </div>
     </div>
    </>
  )
}

export default Contact
