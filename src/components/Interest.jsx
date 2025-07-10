import React, { useContext, useState, useEffect } from "react";
import "./css/Interest.css";
import { interestInfo } from "../portfolio";
import StyleContext from "../contexts/StyleContext";
import { motion } from "framer-motion";
import cloud from "../assets/images/cloud.svg";
import meta from "../assets/images/meta.png"

export default function Interest() {
  const { isDark } = useContext(StyleContext);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!interestInfo.display || interestInfo.interests.length === 0) return;

    const maxAttempts = 100;
    const bubbleSize = 100; // assuming fixed size
    const padding = 10; // extra space to avoid edge collision
    const placed = [];

    interestInfo.interests.forEach(() => {
        let attempts = 0;
        let top, left;
        let overlaps;

        do {
        overlaps = false;
        top = Math.random() * (100 - bubbleSize / 5);   // convert px to %
        left = Math.random() * (100 - bubbleSize / 5);

        for (const other of placed) {
            const dx = other.left - left;
            const dy = other.top - top;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (bubbleSize + padding) / 5) {
            overlaps = true;
            break;
            }
        }

        attempts++;
        } while (overlaps && attempts < maxAttempts);

        placed.push({ top, left });
    });

    setPositions(placed);
    }, [interestInfo]);


  if (!interestInfo.display) return null;

  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="interest">
      <div className="interest-main-div">
        <div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="interest-text-div"
        >
          <h1 className={isDark ? "dark-mode interest-heading" : "interest-heading"}>
            {interestInfo.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle interest-text-subtitle"
                : "subTitle interest-text-subtitle"
            }
          >
            {interestInfo.subTitle}
          </p>

          <div className="interest-bubbles-canvas">
            {interestInfo.interests.map((interest, i) => {
              const position = positions[i] || { top: 0, left: 0 };

              return (
                <div
                  key={i}
                  className={`${isDark ? "dark-mode interest-bubble interest-bubble-dark" : "interest-bubble"}`}
                  style={{
                    top: `${position.top}%`,
                    left: `${position.left}%`,
                  }}
                  onClick={() => openUrlInNewTab(interest.link, interest.name)}
                >
                  <span className="interest-bubble-text">{interest.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
