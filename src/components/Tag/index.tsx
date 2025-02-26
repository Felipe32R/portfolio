export type TagProps = {
  name: string;
};

export function Tag({ name }: TagProps) {
  return (
    <span className="flex bg-stone-600 px-1 text-xs py-0.5 text-center rounded-md w-auto ">
      {name}
    </span>
  );
}
