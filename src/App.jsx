import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Landing from "./components/Landing";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bg4 from "./assets/bg4.svg";

function App() {
  const [activeSection, setActiveSection] = useState("landing");

  // Define sections and their IDs
  const sections = [
    { id: "landing", label: "Welcome", icon: <FaHome /> },
    { id: "techStack", label: "Tech Stack", icon: <FaLaptopCode /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  // Scroll to section with offset
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offsetPosition = sectionElement.offsetTop - 50; // Adjust the offset as needed
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
  };

  // UseEffect to track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const sectionElement = document.getElementById(section.id);
        const { top, bottom } = sectionElement.getBoundingClientRect();
        return top < window.innerHeight / 2 && bottom >= window.innerHeight / 2;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-gray-100 text-gray-900">
      {/* Sidebar Scroll Navigation */}
      <nav className="fixed top-1/4 left-10 z-10">
        <div className="relative flex flex-col items-center">
          {/* Dynamically move active section to the top */}
          <AnimatePresence>
            <ul className="flex flex-col items-center space-y-10">
              {sections
                .sort((a, b) => (a.id === activeSection ? -1 : b.id === activeSection ? 1 : 0)) // Move active icon to the top
                .map((section) => (
                  <motion.li
                    key={section.id}
                    className={`cursor-pointer transition-all ${
                      activeSection === section.id
                        ? "text-indigo-600 font-bold"
                        : "text-gray-500"
                    }`}
                    whileHover={{ scale: 1.2, color: "#4f46e5" }} // Hover effect
                    animate={{
                      scale: activeSection === section.id ? 1.5 : 1, // Scale up active icon
                      color: activeSection === section.id ? "#4f46e5" : "#6b7280", // Highlight active color
                      y: activeSection === section.id ? -50 : 0, // Move active icon up
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.icon}
                  </motion.li>
                ))}
            </ul>
          </AnimatePresence>
        </div>
      </nav>

      {/* Main content sections */}
      <div id="landing" className="min-h-screen">
        <Landing />
      </div>
      <div>
      <img
          src={bg4}
          alt="Tech Stack Background"
          className="absolute top-[600px] left-[-20px] w-1/4 lg:w-1/4 opacity-80 z-50"
        />
         </div>
      <div id="techStack" className="min-h-screen bg-gray-100">
        <TechStack />
      </div>
      <div id="projects" className="min-h-screen bg-gray-200">
        <Projects />
      </div>
      <div id="contact" className="min-h-screen bg-gray-300">
        <Contact />
      </div>
    </div>
  );
}

export default App;
