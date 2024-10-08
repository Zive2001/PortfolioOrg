import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaGithub, FaFigma, FaTwitter, FaLinkedin } from "react-icons/fa";
import pp2 from "../assets/pp2.jpeg";
import bg3 from "../assets/bg3.svg"; 
import bg2 from "../assets/bg2.png"; 
import bg from "../assets/bg.png"; 

export default function Landing({ activeSection }) {
  return (
    <section className="h-screen flex items-center bg-white text-center relative overflow-hidden">
      {/* Social Media Icons */}
      <div className="absolute top-4 right-4 flex space-x-4 z-10">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 hover:text-pink-500 transition duration-300" size={28} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-600 hover:text-blue-600 transition duration-300" size={28} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 hover:text-black transition duration-300" size={28} />
        </a>
        <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
          <FaFigma className="text-gray-600 hover:text-purple-600 transition duration-300" size={28} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-600 hover:text-blue-400 transition duration-300" size={28} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-600 hover:text-blue-800 transition duration-300" size={28} />
        </a>
      </div>

      {/* Profile photo and text positioned in the top left corner */}
      <div className="absolute top-1/4 left-1/4 flex items-start space-x-6 z-10">
        {/* Profile photo */}
        <motion.img
          src={pp2}
          alt="Supun's Photo"
          className="w-48 h-48 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Text next to the image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-left"
        >
          <h1 className="text-3xl font-bold mb-4">Portfolio Title</h1>
          <p className="text-xl">Hi, I'm Supun Seneviratne, Welcome to my portfolio!</p>
        </motion.div>
      </div>

      {/* Doodle-style image in the right bottom corner */}
      <motion.img
        src={bg3}
        alt="Doodle Background"
        className="absolute bottom-0 right-0 w-[30%] h-auto object-cover z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection === "landing" ? 0.7 : 0 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}
