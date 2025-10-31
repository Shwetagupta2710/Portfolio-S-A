import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      id="top"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        ></Image>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm <span className="font-semibold">Sanchit Agarwal</span>
        <Image src={assets.hand_icon} alt="hand icon" className="w-6"></Image>
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo "
      >
        Founder at Thynaa | Data Science & Agri-Tech Innovator
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I'm a mentor and innovator with over 14 years of experience in AI,
        machine learning, and IoT, building solutions that bridge data science
        and agriculture.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border
                  border-white 
                    rounded-full
                  bg-black
                   text-white 
                    flex 
                    items-center 
                     gap-2 
                     dark:bg-transparent
                    "
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          ></Image>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/ShwetaGupta-Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          ></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
