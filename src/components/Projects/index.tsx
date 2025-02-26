import { Project, ProjectProps } from "../Project";

type ProjectsProps = {
  projects: ProjectProps[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 h-auto max-h-[50vh] overflow-y-auto">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}
