import React from "react";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MockGen-AI",
    description:
      "AI Mock Interview Platform that generates interview questions using Google Gemini API with features like speech-to-text, AI feedback, and user authentication.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Google Gemini API",
      "Clerk",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    github: "https://github.com/Shwetagupta2710/MockGen-AI",
    demo: "#",
    image: "/project1.jpg",
  },
  {
    title: "Codeview",
    description:
      "AI-powered code analysis tool that reviews code and provides instant feedback, improving review efficiency by 40%.",
    tech: ["Node.js", "Express.js", "React.js", "Google Gemini API"],
    github: "https://github.com/Shwetagupta2710/Codeview",
    demo: "#",
    image: "/project2.jpg",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Real-time attendance system using face recognition, trained on 100+ images for fast and accurate verification.",
    tech: ["Python", "OpenCV", "Tkinter", "MySQL", "Haar Cascade"],
    github: "https://github.com/Shwetagupta2710/Face-Recognition-Attendance",
    demo: "#",
    image: "/project3.jpg",
  },
  {
    title: "VocalMail",
    description:
      "Voice-Based Email System for the Visually Impaired using speech recognition and text-to-speech with secure email protocols.",
    tech: ["Python", "Django", "JavaScript", "HTML", "CSS", "SMTP", "IMAP"],
    github: "https://github.com/Shwetagupta2710/VocalMail",
    demo: "#",
    image: "/project4.jpg",
  },
];

const experiences = [
  {
    role: "SDE Intern",
    company: "Thynaa (Healthy Naturally)",
    duration: "July 2025 - Present",
    location: "Remote",
    description: [
      "Engineered and deployed 5+ MERN-based features, elevating customer engagement by 30% and reducing bounce rates.",
      "Optimized site architecture in coordination with the startup team, reducing page load time by 20%.",
    ],
  },
  {
    role: "SDE Intern",
    company: "NoQs Digital",
    duration: "Jan 2024 - Feb 2024",
    location: "Remote",
    description: [
      "Automated backend workflows using Google AppScript, cutting service load by 40% and improving reliability.",
      "Developed and customized responsive web pages with HTML/CSS and WordPress, ensuring seamless scalability.",
    ],
  },
  {
    role: "Event Management Lead",
    company: "GDG On-Campus, JKIAPT",
    duration: "Sept 2024 - May 2025",
    location: "Prayagraj, India",
    description: [
      "Spearheaded 2 monthly tech events, attracting 150+ participants and fostering a culture of peer-driven technical learning.",
    ],
  },
  {
    role: "Core Team Member",
    company: "College Official Website Team",
    duration: "Jun 2023 - Present",
    location: "Prayagraj, India",
    description: [
      "Maintained the official college website, reducing load time by 25% and improving navigation for 2K+ monthly visitors.",
    ],
  },
];

export const Work = ({ isDarkMode }) => {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-lg text-pink-600 mb-2">My Work</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my professional journey and the projects I've worked
            on
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Work Experience & Leadership
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role} · {exp.company}
                  </h4>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                    {exp.duration} · {exp.location}
                  </div>
                </div>
                <ul className="space-y-2 mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-pink-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                      >
                        <HiArrowTopRightOnSquare className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
            Achievements & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Winner - TechLab MUSE 1.0",
                description:
                  "Achieved 1st place for creating an innovative, fully-responsive website using HTML, CSS, JavaScript, React.js.",
                date: "July 2024",
              },
              {
                title: "Scholar - SheCodes Foundation",
                description:
                  "Completed advanced coding workshops and delivered a live project using HTML, CSS, JavaScript, React.js.",
                date: "August 2023",
              },
              {
                title: "FFE Scholar",
                description:
                  "Selected among the top 3,889 from 22,000 applicants for academic excellence and leadership potential.",
                date: "March 2023",
              },
              {
                title: "DSA & Competitive Programming",
                description:
                  "Solved 400+ problems across LeetCode and GeeksforGeeks. Participated in coding contests on LeetCode and CodeChef.",
                date: "Ongoing",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white shadow-md"
                }`}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {achievement.description}
                </p>
                <div className="text-sm text-pink-600 dark:text-pink-400">
                  {achievement.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
