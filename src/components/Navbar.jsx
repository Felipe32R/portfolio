import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, githubIcon, linkedinIcon } from "../assets";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActiveSection(""), window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain mr-2"
          />
          <p className="text-white  text-[18px] font-bold cursor-pointer">
            Felipe Ramalho{" "}
            <span className="text-teal-200 sm:block hidden">
              Desenvolvedor Fullstack
            </span>
          </p>
        </Link>
        {/* <p className="text-red-500">asa</p> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              className={`${
                activeSection === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              key={link.id}
              onClick={() => setActiveSection(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a
            href="https://github.com/Felipe32R"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} className="h-7 hover:opacity-80" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-ramalho-442569197/"
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} className="h-7 hover:opacity-80" />
          </a>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggleMenu ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <div
            className={`${
              !toggleMenu ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] Z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  className={`${
                    activeSection === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] z-10 `}
                  key={link.id}
                  onClick={() => {
                    setActiveSection(link.title);
                    setToggleMenu(!toggleMenu);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
