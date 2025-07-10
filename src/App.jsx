import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";
import Interest from "./components/Interest";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Contact from "./components/Contact";
import TopButton from "./components/TopButton";
import {StyleProvider} from "./contexts/StyleContext";
import "./App.css";
import {useLocalStorage} from "./hooks/useLocalStorage";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <>
          <Header />
          <Greeting />
          <Skills />
          <WorkExperience />
          <Project />
          <Interest />
          <Education />
          <Achievement />
          <Contact />
          <Footer />
          <TopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;
