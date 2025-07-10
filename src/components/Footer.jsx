import React, { useContext } from "react";
import "./css/Footer.css";
import { motion } from "framer-motion"; // ✅ Replacing Fade with motion
import emoji from "react-easy-emoji";
import StyleContext from "../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made by Leo Zhang @ 2025")}
        </p>
      </div>
    </motion.div>
  );
}
