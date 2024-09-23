// // src/components/Projects.jsx
// import { motion } from "framer-motion";

// // Example projects data
// const projects = [
//   { title: "Project 1", description: "Description of project 1", link: "#" },
//   { title: "Project 2", description: "Description of project 2", link: "#" },
// ];

// export default function Projects() {
//   return (
//     <section className="py-20 bg-white text-center">
//       <h2 className="text-3xl mb-8">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="p-6 shadow-lg rounded-lg bg-gray-100"
//           >
//             <h3 className="text-xl font-bold">{project.title}</h3>
//             <p className="mt-2">{project.description}</p>
//             <a
//               href={project.link}
//               className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               View Project
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
// src/components/Projects.jsx
import { motion } from "framer-motion";

// Example projects data with PowerApp link for Project 1
const projects = [
  {
    title: "Project 1",
    description: "This project links to PowerApp.",
    link: "https://apps.powerapps.com/play/e/default-852c5799-8134-4f15-9d38-eba4296cc76f/a/502a7bad-3eb4-4d17-9382-f851dd2bf3b7?tenantId=852c5799-8134-4f15-9d38-eba4296cc76f&hint=f8860fd2-9115-4448-9743-8cc979c1c50e&sourcetime=1727071115803&hidenavbar=true",
  },
  { title: "Project 2", description: "Description of project 2", link: "#" },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 shadow-lg rounded-lg bg-gray-100"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
