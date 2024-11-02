import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center">
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-36 h-36 object-cover"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="mb-2 font-bold hover:text-blue-500">
                {project.title}
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

