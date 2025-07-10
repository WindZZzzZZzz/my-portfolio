import React, { useContext } from "react";
import "./css/Contact.css";
import SocialMedia from "./SocialMedia";
import { illustration, contactInfo, isHireable } from "../portfolio";
import { motion } from "framer-motion";
import email from "../assets/lottie/email";
import DisplayLottie from "./DisplayLottie";
import StyleContext from "../contexts/StyleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="main contact-margin-top"
      id="contact"
    >
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            {contactInfo.subtitle}
          </p>

          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {contactInfo.number && (
              <>
                <a className="contact-detail">
                  <FontAwesomeIcon icon={faLocationDot} /> {contactInfo.location}
                </a>
                <br />
                <br />
              </>
            )}
            <a
              className="contact-detail"
            >
              Open for Opportunities: {isHireable ? "Yes": "No"}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>

        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src={require("../assets/images/contactMailDark.svg")}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
