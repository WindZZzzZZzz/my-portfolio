import React, { useContext } from "react";
import "./css/Skills.css";
import SoftwareSkill from "./SoftwareSkill";
import { illustration, skillsSection } from "../portfolio";
import { motion } from "framer-motion";
import codingPerson from "../assets/lottie/codingPerson";
import DisplayLottie from "./DisplayLottie";
import StyleContext from "../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* Left fade-in (image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="skills-image-div"
        >
          {illustration.animated ? (
            <DisplayLottie animationData={codingPerson} />
          ) : (
            <img
              alt="Man Working"
              src={require("../../assets/images/developerActivity.svg")}
            />
          )}
        </motion.div>

        {/* Right fade-in (text content) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="skills-text-div"
        >
          <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
            {skillsSection.title}{" "}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle}
          </p>
          <SoftwareSkill />
          <div>
            {skillsSection.skills.map((skills, i) => (
              <p
                key={i}
                className={
                  isDark
                    ? "dark-mode subTitle skills-text"
                    : "subTitle skills-text"
                }
              >
                {skills}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
