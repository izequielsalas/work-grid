import { motion } from "framer-motion";
import WorkItem from "./WorkItem";
import projects from "../data/projects";

export default function WorkGrid() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 100, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.8,
            ease: "backOut",
          }}
        >
          <WorkItem title={project.title} imageUrl={project.imageUrl} />
        </motion.div>
      ))}
    </div>
  );
}
