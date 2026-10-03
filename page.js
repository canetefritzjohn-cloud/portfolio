import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    title: "This Portfolio",
    description:
      "My ADV101 class project. A Next.js website with 4 pages and a header that highlights the current page.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "MLOVE",
    description:
      "Online music streaming service.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Layout Practice",
    description:
      "Small practice pages I made to get used to Flexbox and Grid before learning Next.js.",
    technologies: ["HTML", "CSS"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1b] sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-3 text-base text-[#5a5956] md:text-lg">
          Some of the things I&apos;ve worked on.
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </main>
  );
}
