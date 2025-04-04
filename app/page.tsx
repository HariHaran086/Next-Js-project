import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl  font-extrabold">
        Hello I'm{" "}
        <span className="bg-gradient-to-r from-red-700 via-red-300 to-blue-500 bg-clip-text text-transparent">
          Hari
        </span>
      </h1>
      <p className="text-2xl mt-5 text-gray-600">
        Hi there! Check out my portfolio
      </p>
      <h2 className="text-3xl mt-24 font-bold">Projects</h2>
      {projects.map((project) => (
        <div key={project._id} className=" border border-gray-500 rounded-lg">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={250}
              height={250}
              className="object-cover rounded-lg border border-gray-200"
            />
          )}

          <div className="font-extrabold bg-gradient-to-r from-red-700 via-red-400 to-blue-700 bg-clip-text text-transparent">
            {project.name}
          </div>
        </div>
      ))}
    </div>
  );
}
