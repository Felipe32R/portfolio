
type Contribution = {
  link: string;
}
export function Opensource() {

  const contributions: Contribution[] = [
    {
      link: "https://github.com/usekaneo/kaneo/pull/238"
    }
  ]

  return (
    <div className="flex flex-col gap-2 w-full ">
      <ul>
        {contributions.map((contribution) =>
          <li>
            <a href={contribution.link} target="_blank" className="hover:text-amber-100" >{contribution.link}</a>
          </li>
        )}
      </ul>

    </div>
  )
}
