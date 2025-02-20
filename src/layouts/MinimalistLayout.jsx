import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import projects from "../data/projects.json";

const categorizeProjects = (projects, categoriesOrder) => {
  const categorizedProjects = {};

  projects.forEach((project) => {
    if (!categorizedProjects[project.category]) {
      categorizedProjects[project.category] = [];
    }
    categorizedProjects[project.category].push(project);
  });

  return categoriesOrder.map((category) => ({
    category,
    projects: (categorizedProjects[category] || []).sort((a, b) => b.id - a.id),
  }));
};

export default function MinimalistLayout() {
  const categoriesOrder = ["Business", "Portfolio", "Design", "Sideproject"];
  const categorizedProjects = categorizeProjects(projects, categoriesOrder);
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => {
      const newOpenCategories = {};
      newOpenCategories[category] = !prev[category];
      return newOpenCategories;
    });
  };

  return (
    <div className="flex min-h-screen justify-center bg-zinc-900">
      <div className="flex flex-col gap-4 p-4 py-4 text-zinc-50 md:w-3/5 md:gap-6 md:p-0 md:py-8 lg:gap-8 lg:py-12 xl:w-1/3">
        <section>
          <h1 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">About me</h1>
          <p className="text-zinc-300">
            Hi, I'm Lucas/Oslo418 a 19 years-old cyber enthusiast based in the French Alps and currently aspiring to become a web developer. I recently earned an{" "}
            <a className="text-cyan-500 underline duration-75 hover:text-cyan-400" href="https://www.francecompetences.fr/recherche/rncp/37674/">
              RNCP Level 5 title
            </a>{" "}
            and will be attending{" "}
            <a className="text-cyan-500 underline duration-75 hover:text-cyan-400" href="https://42.fr/">
              42 School
            </a>{" "}
            in November 2025.
          </p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Projects</h2>
          <div className="flex flex-col gap-2">
            {categorizedProjects.map(({ category, projects }) => (
              <div key={category}>
                <button
                  className={`flex w-full items-center justify-between border border-zinc-700 px-2 py-0.5 font-semibold hover:cursor-pointer md:text-lg ${openCategories[category] ? "rounded-t" : "rounded"}`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                  <FaChevronDown className={`ml-2 text-base transition-transform duration-200 ${openCategories[category] ? "rotate-180" : ""}`} />
                </button>
                <div className={`transition-max-height overflow-hidden duration-300 ease-in-out ${openCategories[category] ? "max-h-screen" : "max-h-0"}`}>
                  <ul className="rounded-b border border-t-0 border-zinc-700 px-2 py-1">
                    {projects.map((project) => (
                      <li className="mb-2" key={project.id}>
                        <a href={project.link} target="_blank" className="text-cyan-500 underline duration-75 hover:text-cyan-400">
                          {project.title}
                        </a>
                        <p className="line-clamp-2 text-zinc-300">{project.short_desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Interests</h3>
          <ul className="ml-4 list-disc text-zinc-300">
            <li>Full-stack dev</li>
            <li>Design</li>
            <li>Web3</li>
            <li>Cats</li>
            <li>Art</li>
            <li>Motorbikes</li>
          </ul>
        </section>
        <section>
          <h4 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Links & contact</h4>
          <span className="flex flex-wrap gap-2 text-sm text-zinc-300">
            <a target="_blank" className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50" href="https://github.com/Oslonline">
              Github
            </a>
            <a target="_blank" className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50" href="https://www.linkedin.com/in/benic-lucas/">
              LinkedIn
            </a>
            <a target="_blank" className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50" href="https://x.com/Oslo418">
              X
            </a>
            <a target="_blank" className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50" href="mailto:oslo418@proton.me">
              oslo418@proton.me
            </a>
          </span>
        </section>
      </div>
    </div>
  );
}
