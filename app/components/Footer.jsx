import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={darkMode ? assets.logo_dark : assets.logo}
          alt="Footer Logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={darkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Footer Logo"
            className="w-6"
          />
          vergasaimil@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2026 Aimilianos Vergas. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/VergasAimilianos">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aimilianos-vergas/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
