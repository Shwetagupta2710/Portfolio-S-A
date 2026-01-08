"use client";

import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header({ isDarkMode }) {
  return (
    <section
      name="home"
      className={`w-full min-h-screen ${
        isDarkMode ? "bg-gradient-to-b from-[#0a192f] to-[#020c1b]" : "bg-white"
      } flex items-center`}
    >
      {/* Offset for fixed navbar (h-20) */}
      <div className="pt-20 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Intro */}
            <p className="text-sm md:text-base tracking-wider uppercase text-pink-600 mb-3">
              Hello, I’m
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Shweta Gupta
            </h1>

            {/* Role */}
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer · Problem Solver
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
              I build scalable, user-focused web applications using modern
              technologies. Currently pursuing B.Tech in Computer Science with a
              CGPA of 9.40.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-80}
                  className="flex items-center justify-center px-8 py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition-all cursor-pointer"
                >
                  Contact Me
                  <HiArrowNarrowRight className="ml-2" />
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="flex items-center justify-center px-8 py-3 border border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all"
              >
                Download CV
                <HiDownload className="ml-2" />
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/shwetagupta2710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://github.com/Shwetagupta2710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.1-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
