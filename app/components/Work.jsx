import React, { useState, useEffect } from "react";
import { workData } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Work = ({ darkMode, setDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>

      <h2 className="text-center text-5xl font-ovo">My Latest Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Feel free to explore!
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 flex flex-col gap-3 duration-500 group-hover:bottom-7 shadow-md">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                <a
                  href={project.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs font-medium py-1.5 px-3 border border-black rounded-full shadow-[2px_2px_0px_#000] hover:bg-lime-300 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.deploymentLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs font-medium py-1.5 px-3 border border-black rounded-full shadow-[2px_2px_0px_#000] hover:bg-lime-300 transition"
                >
                  Deployment
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover"
      >
        Show more{" "}
        <Image
          src={
            darkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
