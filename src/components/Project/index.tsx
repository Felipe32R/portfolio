import { Tag } from "../Tag";

export type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export function Project({ title, description, tags, link }: ProjectProps) {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="flex flex-col justify-between p-4 max-w-[240px] min-w-[160px] w-full h-[140px] bg-stone-800 cursor-pointer rounded-md transition-all ease-in duration-200  relative
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-stone-500 after:transition-all after:duration-300 hover:after:w-full hover:text-amber-100"
      onClick={() => handleClick(link)}
    >
      <h4 className="text-lg font-semibold text-stone-300">{title}</h4>
      <p className="text-sm">{description}</p>
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
    </div>
  );
}
