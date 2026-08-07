import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { infoList, toolsData } from "@/assets/assets";

const AboutMe = ({ darkMode, setDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>

      <div className="flex w-full flex-col items-center gap-12 my-20">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none flex justify-center">
          {assets.user_image && (
            <Image
              src={assets.user_image}
              alt="user"
              className="rounded-full w-full max-w-[280px]"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 max-w-2xl text-center flex flex-col items-center">
          <p className="mb-10 font-ovo">
            Computer Science graduate with experience developing applications
            across web, desktop, and 3D environments. Seeking a junior software
            engineering role focused on backend or full-stack development.
          </p>

          {/* Cards List */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              const iconSrc = darkMode ? iconDark : icon;
              return (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50 flex flex-col items-center text-center"
                >
                  {iconSrc && (
                    <Image src={iconSrc} alt={title} className="w-7 mt-3" />
                  )}
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>

          {/* Tools Section */}
          <h4 className="my-6 text-gray-700 font-ovo dark:text-white/80 text-center">
            Tools I Use
          </h4>

          <ul className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                {tool && <Image src={tool} alt="Tool" className="w-5 sm:w-7" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
