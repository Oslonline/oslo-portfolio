import React from "react";
import { motion } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
};

const ProjectsModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div className="w-full max-w-md rounded-lg bg-white p-8" variants={modal} onClick={(e) => e.stopPropagation()}>
        <img src={project.modal_img_src} alt={project.title} className="mb-4 h-64 w-full rounded-lg object-cover" />
        <h2 className="mb-2 text-2xl font-semibold">{project.title}</h2>
        <p className="mb-4 text-gray-700">{project.full_desc}</p>
        <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <button onClick={onClose} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsModal;
