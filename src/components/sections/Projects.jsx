import { FaArrowRightLong } from "react-icons/fa6";
import projectsData from "../../data/projects.json";
import ProjectsCard from "../ProjectsCard";

export default function Projects() {
  const categoryOrder = ["Business", "Sideproject", "Portfolio", "Design"];

  const groupedProjects = projectsData.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  for (const category in groupedProjects) {
    groupedProjects[category].sort((a, b) => b.id - a.id);
  }

  const sortedCategories = categoryOrder.filter((category) => groupedProjects[category]);

  return (
    <section className="mt-32 flex flex-col justify-center">
      <div className="flex w-full flex-col items-center gap-8 rounded-t-md p-4">
        <h3 className="text-center font-mono text-4xl font-semibold">Work</h3>
        <div className="flex flex-col gap-6">
          {sortedCategories.map((category) => (
            <div key={category} className="w-full">
              <h4 className="mb-4 text-lg italic md:text-xl">{category}</h4>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {groupedProjects[category].map((project) => (
                  <ProjectsCard key={project.id} p={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="https://github.com/Oslonline" className="group mt-4">
        <p className="flex items-center gap-2 text-center text-sm font-semibold uppercase duration-200 group-hover:gap-4 md:text-start">
          More on github <FaArrowRightLong />
        </p>
      </a>
    </section>
  );
}
