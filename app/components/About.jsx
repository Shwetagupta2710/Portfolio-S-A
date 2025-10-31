import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen" id="about">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max:w-none">
          <Image
            src={assets.user_image}
            alt="Sanchit Agarwal"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/80">
            I'm <span className="font-semibold">Sanchit Agarwal</span>, Founder
            of <span className="font-semibold">Thynaa</span> — a startup focused
            on building sustainable and data-driven agricultural solutions. I
            was awarded the
            <span className="font-semibold">
              {" "}
              Social Innovation (SPARSH) Fellowship 2022–23
            </span>{" "}
            by BIRAC, DBT, India, for my work in bridging gaps in agriculture
            using Data Science.
            <br />
            I’ve also participated in the{" "}
            <span className="font-semibold">
              Stanford Seed Spark Program 2023
            </span>
            , served as an Agri Trainer with SSIAST, and mentored professionals
            through UpGrad and LJMU. With over 14 years of experience, I’ve
            worked across domains including Machine Learning, Computer Vision,
            NLP, IoT, and MLaaS products — helping startups innovate and scale
            through AI-driven insights.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                           hover:bg-lightHover hover:-translate-y-1 transition duration-300
                           hover:shadow-black dark:border-white dark:hover:shadow-white
                           dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
