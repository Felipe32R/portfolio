export function Certifications() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/Resume-Felipe_Ramalho.pdf";
    link.download = "Resume-Felipe_Ramalho";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-full flex justify-center pt-10">
      <div className="sm:w-[80%] md:w-[60%] xl:w-[40%] h-full text-justify">
        Hello! I'm 23 years old and have a Bachelor's degree in Computer
        Engineering. I enjoy exploring new technologies with Javascript tools.
        Want to know more about my experience?{" "}
        <button
          onClick={handleDownload}
          className="text-amber-100 cursor-pointer underline"
        >
          {" "}
          Download my resume!
        </button>
      </div>
    </div>
  );
}
