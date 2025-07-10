import React, { useContext, useRef, useState, useEffect } from "react";
import "./css/Project.css";
import ProjectCard from "./ProjectCard";
import { projectSection } from "../portfolio";
import { motion } from "framer-motion";
import StyleContext from "../contexts/StyleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const { isDark } = useContext(StyleContext);
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const visibleGroups = 2;
  const totalProjects = projectSection.projects.length;

  useEffect(() => {
    const updateCardWidth = () => {
      const container = scrollRef.current;
      if (!container || container.children.length === 0) return;

      const card = container.children[0];
      const cardStyle = getComputedStyle(card);
      const width = card.offsetWidth + parseFloat(cardStyle.marginRight || "0");

      setCardWidth(width);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const maxScrollIndex = Math.ceil(totalProjects / visibleGroups) - 1;

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container || cardWidth === 0) return;

    const scrollAmount = index * cardWidth * visibleGroups;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    setScrollIndex(index);
  };

  const handleLeftClick = () => {
    if (scrollIndex > 0) scrollToIndex(scrollIndex - 1);
  };

  const handleRightClick = () => {
    if (scrollIndex < maxScrollIndex) scrollToIndex(scrollIndex + 1);
  };

  if (!projectSection.display) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="main" id="projects">
        <div className="project-main-div">
          <div className="project-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading project-heading"
                  : "heading project-heading"
              }
            >
              Projects
            </h1>
          </div>

          <div className="project-navigation-container" style={{ justifyContent: "center" }}>
            <div className="project-cards-scroll" ref={scrollRef}>
              {projectSection.projects.map((card, i) => (
                <ProjectCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    projectName: card.projectName,
                    description: card.description,
                    link: card.link,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="dot-indicators-with-arrows">
            <button
              className="arrow-btn"
              onClick={handleLeftClick}
              disabled={scrollIndex === 0}
            >
              <FontAwesomeIcon icon={faArrowCircleLeft} size="x" />
            </button>

            <div className="dot-indicators">
              {Array.from({ length: maxScrollIndex + 1 }).map((_, i) => (
                <span
                  key={i}
                  className={`dot ${scrollIndex === i ? "active" : ""}`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>

            <button
              className="arrow-btn"
              onClick={handleRightClick}
              disabled={scrollIndex === maxScrollIndex}
            >
              <FontAwesomeIcon icon={faArrowCircleRight} size="x" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
