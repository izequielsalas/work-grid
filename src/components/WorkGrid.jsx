import WorkItem from "./WorkItem";
import projects from "../data/projects";

export default function WorkGrid() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project) => (
        <WorkItem key={project.id} title={project.title} imageUrl={project.imageUrl} />
      ))}
    </div>
  );
}
