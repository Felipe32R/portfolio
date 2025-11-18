import { Project, ProjectProps } from "../Project";

type ProjectsProps = {
  projects: ProjectProps[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col w-full h-full gap-10">

      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-6 h-auto max-h-[40vh] sm:max-h-[50vh] overflow-y-auto">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <span className="text-sm text-amber-100">New projects are coming!</span>
    </div>
  );
}
