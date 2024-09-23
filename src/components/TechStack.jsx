import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiGit, SiFigma, SiMysql } from "react-icons/si";
import bg2 from "../assets/bg2.png"; // Import the background image

// Example tech stack data with modern icons
const techStack = [
  { name: "MongoDB", icon: <SiMongodb  className=" hover:text-green-400 transition-colors"/> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Figma", icon: <SiFigma /> },
];

export default function TechStack() {
  return (
    <>
      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl mb-8 font-semibold">Tech Stack I Use</h2>
        <div className="flex justify-center space-x-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl hover:text-indigo-400 transition-colors"
            >
              <div className="mb-2">{tech.icon}</div>
              <p className="text-lg font-medium mt-2">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </>
  );
}
