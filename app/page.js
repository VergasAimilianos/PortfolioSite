"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { wakeUpServices } from "./utils/pingServices";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    wakeUpServices();
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
      <Work darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}
