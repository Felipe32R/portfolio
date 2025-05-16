import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedinIcon.svg";

export function Footer() {
  return (
    <div className="flex-1 items-end flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  flex w-full justify-end gap-5 lg:h-20 ">
      <span className="socials text-xs">© 2025 Felipe Ramalho</span>

      <div className="flex md:flex-row lg:flex-row xl:flex-row  items-center gap-4">
        <a href="https://github.com/Felipe32R" target="blank">
          <img
            src={githubIcon}
            alt="github"
            className="w-8.5 h-8.5 cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-ramalho-442569197/"
          target="blank"
        >
          <img
            src={linkedinIcon}
            alt="linkedin"
            className="w-7 h-7 cursor-pointer"
          />
        </a>
      </div>
      <span className="socials text-amber-100">feliperamalhoy@gmail.com</span>
    </div>
  );
}
