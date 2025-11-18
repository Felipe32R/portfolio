import { useState } from "react";
import { ProjectProps } from "./components/Project";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Certifications } from "./components/Certifications";
import { Opensource } from "./components/Opensource";

function App() {
  const projects: ProjectProps[] = [
    {
      title: "WaiterApp",
      description: "food ordering",
      tags: ["react", "react native", "express", "mongodb"],
      link: "https://github.com/Felipe32R/JStack/tree/main/WaiterApp",
    },
    {
      title: "PlannerApp",
      description: "trip planner",
      tags: ["react native", "fastify"],
      link: "https://github.com/Felipe32R/plannerapp",
    },
    {
      title: "SGCE",
      description: "election campaign management",
      tags: ["react", "nestjs", "postgresql"],
      link: "https://github.com/Felipe32R/SGCE",
    },
  ];

  const [selectedView, setSelectedView] = useState("certs");

  return (
    <div className="flex flex-col items-center h-dvh w-full bg-zinc-900 text-white justify-center py-10 sm:py-20">
      <header className="flex flex-col gap-1 mb-2  sm:mb-10 w-[78%] items-start">
        <h3 className="font-medium text-xl sm:text-3xl">Felipe Ramalho</h3>
        <h3 className="text-zinc-300 sm:text-xl">
          Fullstack Engineer - Front End Focus
        </h3>
      </header>
      <div className="w-[90%] sm:w-[80%] h-full flex flex-col p-4 gap-8 text-sm sm:text-md">
        <h1 className="w-full flex items-center justify-end gap-4 font-semibold">
          <span
            onClick={() => setSelectedView("certs")}
            className={`cursor-pointer ${selectedView === "certs" ? "text-amber-100 " : "text-white"
              }`}
          >
            About
          </span>
          <span
            onClick={() => setSelectedView("projects")}
            className={`cursor-pointer ${selectedView === "projects" ? "text-amber-100 " : "text-white"
              }`}
          >
            Projects
          </span>
          <span
            onClick={() => setSelectedView("ops")}
            className={`cursor-pointer ${selectedView === "ops" ? "text-amber-100 " : "text-white"
              }`}
          >
            Contributions
          </span>
        </h1>
        {selectedView === "projects" && <Projects projects={projects} />}
        {selectedView === "xp" && <Projects projects={projects} />}
        {selectedView === "certs" && <Certifications />}
        {selectedView === "ops" && <Opensource />}
        {/* {selectedView === "ops" && <Blogposts />} */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
