import React from "react";
import "./Mail.css";
import { GoMail } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsLinkedin } from "react-icons/bs";
const Mail = () => {
  return (
    <>
      <div className="mail">
        <div className="mail1">
          <div className="mail1-1">
            <div className="mail1-1-1">
              <div className="mail1-1-1-1"><CiLocationOn /></div>
              <div className="mail1-1-1-2">
                <div className="mail1-1-1-2-1">
                  <span>Visit</span>
                </div>
                <div className="mail1-1-1-2-2">
                  <span>
                    1604 530 Little Collins St, Melbourne VIC 3008, Australia
                  </span>
                </div>
              </div>
            </div>
            <div className="mail1-1-2">
              <div className="mail1-1-2-1"><GoMail /></div>
              <div className="mail1-1-2-2">
                <div className="mail1-1-2-2-1">
                  <span>Email</span>
                </div>
                <div className="mail1-1-2-2-2">
                  <a href="https://mail.google.com">info@spsconsulting.com</a>
                </div>
              </div>
            </div>
            <div className="mail1-1-3">
              <div className="mail1-1-3-1"><BsLinkedin /></div>
              <div className="mail1-1-3-2">
                <div className="mail1-1-3-2-1">
                  <span>Follow</span>
                </div>
                <div className="mail1-1-3-2-2">
                  <span>Find us on LinedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mail;
