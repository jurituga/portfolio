import { COURSES } from "../constants"


const Courses = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Courses & Trainings</h1>
        <div>
            {COURSES.map((courses, index) =>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{courses.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{courses.role} -{" "}
                            <span className="text-sm text-blue-400">
                                {courses.company}
                            </span>
                        </h6>
                        <p className="mb-5 text-neutral-200">{courses.description}</p>
                        {courses.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Courses