import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { FaSquarespace, FaVuejs, FaWordpress } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { RiSupabaseLine } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiJavascript, SiTypescript } from "react-icons/si";

export default function Stacks() {
  const stacks = {
    frontend: [
      { name: "Javascript", icon: <SiJavascript className="h-6 w-6" /> },
      { name: "Typescript", icon: <SiTypescript className="h-6 w-6" /> },
      { name: "React", icon: <FaReact className="h-6 w-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
      { name: "Vue.js", icon: <FaVuejs className="h-6 w-6" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="h-6 w-6" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="h-6 w-6" /> },
      { name: "Express", icon: <SiExpress className="h-6 w-6" /> },
    ],
    database: [
      { name: "Supabase", icon: <RiSupabaseLine className="h-6 w-6" /> },
      { name: "MySQL", icon: <SiMysql className="h-6 w-6" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
    ],
    cms: [
      { name: "Wordpress", icon: <FaWordpress className="h-6 w-6" /> },
      { name: "Squarespace", icon: <FaSquarespace className="h-6 w-6" /> },
    ],
    other: [
      { name: "Git", icon: <FaGitAlt className="h-6 w-6" /> },
      { name: "Github", icon: <FaGithub className="h-6 w-6" /> },
      { name: "Figma", icon: <FiFigma className="h-6 w-6" /> },
    ],
  };

  return (
    <section className="flex w-full justify-center py-32">
      <div className="w-full max-w-(--breakpoint-xl)">
        <p className="mb-8 text-center font-mono text-4xl font-semibold">Stacks</p>

        <div className="flex flex-col items-center gap-4 md:gap-8">
          {Object.keys(stacks).map((category) => (
            <div key={category} className="flex flex-wrap justify-center gap-4 md:justify-start">
              {stacks[category].map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-2 rounded-md bg-gray-50 px-4 py-2 text-center text-lg font-medium shadow-xs select-none">
                  {icon}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
