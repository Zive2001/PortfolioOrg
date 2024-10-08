import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example projects data with gallery images
const projects = [
  {
    title: "Project 1",
    description: "Description",
    images: [
      "https://via.placeholder.com/800x600?text=Project+1+Image+1",
      "https://via.placeholder.com/800x600?text=Project+1+Image+2",
      "https://via.placeholder.com/800x600?text=Project+1+Image+3",
    ],
    link: "https://apps.powerapps.com/play/e/default-852c5799-8134-4f15-9d38-eba4296cc76f/a/502a7bad-3eb4-4d17-9382-f851dd2bf3b7?tenantId=852c5799-8134-4f15-9d38-eba4296cc76f&hint=f8860fd2-9115-4448-9743-8cc979c1c50e&sourcetime=1727071115803&hidenavbar=true",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    images: [
      "https://via.placeholder.com/800x600?text=Project+2+Image+1",
      "https://via.placeholder.com/800x600?text=Project+2+Image+2",
    ],
    link: "#",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    images: [
      "https://via.placeholder.com/800x600?text=Project+3+Image+1",
      "https://via.placeholder.com/800x600?text=Project+3+Image+2",
    ],
    link: "#",
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    images: [
      "https://via.placeholder.com/800x600?text=Project+4+Image+1",
      "https://via.placeholder.com/800x600?text=Project+4+Image+2",
    ],
    link: "#",
  },
];

// Modal component for focused view of images
const ImageModal = ({ images, isOpen, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative max-w-4xl w-full p-4">
        <img
          src={images[currentImage]}
          alt="Project Image"
          className="w-full h-auto object-cover rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          &times;
        </button>
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (projectIndex) => {
    setSelectedProject(projects[projectIndex]);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="p-6 shadow-lg rounded-lg bg-white cursor-pointer transform transition-transform duration-100 ease-in-out hover:shadow-2xl"
            onClick={() => handleOpenModal(index)}
          >
            <ProjectGallery images={project.images} />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedProject && (
        <ImageModal
          images={selectedProject.images}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}


// Component for the image gallery inside each project tile
const ProjectGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5-second interval

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [images]);

  return (
    <motion.img
      src={images[currentImage]}
      alt="Project Image"
      className="w-full h-40 object-cover rounded-lg transition-opacity duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};
