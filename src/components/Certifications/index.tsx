export function Certifications() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center pt-10 gap-10">
      <div className="sm:w-[80%] md:w-[60%] xl:w-[40%] text-sm sm:text-lg text-center">
        software engineer, computer engineering graduate and open source contributor <br />
        building impactful and efficient solutions
      </div>
      <div className="flex flex-col gap-4">
        <h3>Main Technologies</h3>
        <span className="text-sm text-amber-100">
          JavaScript, TypeScript, React, Nextjs, Nodejs, React Native
        </span>
        <h3>Secondary</h3>
        <span className="text-sm text-amber-100">
          Vue, Nuxt, Ruby on Rails
        </span>
      </div>
    </div>
  );
}
