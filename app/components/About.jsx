import React from "react";

export default function About({ isDarkMode }) {
  return (
    <div
      className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-16 scroll-mt-20 min-h-screen"
      id="about"
    >
      <h4 className="text-center mb-2 text-lg text-pink-600">Introduction</h4>
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-white">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Education
            </h3>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  JK Institute of Applied Physics and Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  B.Tech in Computer Science
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  CGPA: 9.40/10.0
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  St. Xavier's High School
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Class 12th: 82.4% | Class 10th: 95.6%
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Skills & Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Technical Skills
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Java, Python, JavaScript, C
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      HTML, CSS, Tailwind CSS
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Node.js, Express.js, React.js
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      MySQL, MongoDB, Git
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Core CS Knowledge
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Data Structures & Algorithms
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Object-Oriented Programming
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Database Management Systems
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Operating Systems & Computer Networks
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md sm:col-span-2">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                    Public Speaking
                  </span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                    Leadership
                  </span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                    Team Collaboration
                  </span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-sm">
                    Problem Solving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
