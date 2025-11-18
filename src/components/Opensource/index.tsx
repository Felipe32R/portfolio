import { ArrowUpRight } from "lucide-react";

type Contribution = {
  link: string;
  project: string,
}
export function Opensource() {

  const contributions: Contribution[] = [
    {
      link: "https://github.com/usekaneo/kaneo/pulls?q=is%3Apr+is%3Aclosed+author%3AFelipe32R",
      project: "kaneo",
    }
  ]

  return (
    <div className="flex flex-col gap-2 w-full ">
      <ul>
        {contributions.map((contribution) =>
          <li >
            <a href={contribution.link} target="_blank" className="hover:text-amber-100 border border-amber-100 max-w-20 p-1.5 text-center flex gap-2" >{contribution.project}
              <ArrowUpRight size={22} />
            </a>
          </li>
        )}
      </ul>

    </div>
  )
}
