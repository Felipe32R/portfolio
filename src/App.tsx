import { useState } from "react";
import { ProjectProps } from "./components/Project";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Certifications } from "./components/Certifications";

function App() {
  const projects: ProjectProps[] = [
    {
      title: "WaiterApp",
      description: "Food Ordering",
      tags: ["react", "express", "react native"],
      link: "https://github.com/Felipe32R/JStack/tree/main/WaiterApp",
    },
    {
      title: "SGCE",
      description: "Election Campaign Management",
      tags: ["react", "nestjs", "docker", "postgresql"],
      link: "https://github.com/Felipe32R/SGCE",
    },
    {
      title: "Podcastr",
      description: "Spotify-like Podcast Player",
      tags: ["nextjs"],
      link: "https://github.com/Felipe32R/SGCE",
    },
    {
      title: "Letmeask",
      description: "Q&A Platform",
      tags: ["react", "firebase"],
      link: "https://github.com/Felipe32R/letmeask",
    },
  ];

  const [selectedView, setSelectedView] = useState("certs");

  return (
    <div className="flex flex-col items-center h-dvh w-full bg-zinc-900 text-white justify-center py-10 sm:py-20">
      <header className="flex flex-col gap-1  mb-10 w-[78%] items-start">
        <h3 className="font-medium text-3xl">Felipe Ramalho</h3>
        <h3 className="text-zinc-300 xl">
          Full Stack Engineer - Front End Focus
        </h3>
      </header>
      <div className="w-[90%] sm:w-[80%] h-full flex flex-col p-4 gap-8">
        <nav className="w-full flex items-center justify-end gap-4 ">
          <span
            onClick={() => setSelectedView("certs")}
            className={`cursor-pointer ${
              selectedView === "certs" ? "text-amber-100 " : "text-white"
            }`}
          >
            About
          </span>
          <span
            onClick={() => setSelectedView("projects")}
            className={`cursor-pointer ${
              selectedView === "projects" ? "text-amber-100 " : "text-white"
            }`}
          >
            Projects
          </span>
        </nav>
        {selectedView === "projects" && <Projects projects={projects} />}
        {selectedView === "xp" && <Projects projects={projects} />}
        {selectedView === "certs" && <Certifications />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
