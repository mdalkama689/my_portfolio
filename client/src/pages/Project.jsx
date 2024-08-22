import React from "react";
import transaction_image from "../assets/transaction_image.jpg";
import google_docs_image from "../assets/google_docs_image.png";
import blog_image from "../assets/blog_image.jpg";
import video_call_image from "../assets/video_call_image.jpg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
  const projectInfo = [
    {
      projectName: "Paytm Wallet",
      techStack: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Express",
        "MongoDB",
      ],
      projectDescription:
        "Paytm Wallet is an app for managing accounts, sending/receiving money.",
      projectLink: "https://github.com/mdalkama689/paytm-wallet",
      projectImage: transaction_image,
    },
    {
      projectName: "Google Docs",
      techStack: ["React", "Tailwind CSS", "Express", "MongoDB"],
      projectDescription:
        "A Google Docs application provides real-time document editing and collaboration features similar to Google Docs.",
      projectLink: "https://github.com/mdalkama689/google-docs-clone",
      projectImage: google_docs_image,
    },
    {
      projectName: "Blog App",
      techStack: [
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Express",
        "MongoDB",
      ],
      projectDescription:
        "A full stack blog app where users can create, delete, and update, and like and bookmark posts.",
      projectLink: "https://github.com/mdalkama689/blog",
      projectImage: blog_image,
    },
    {
      projectName: "Group Video Call App",
      techStack: ["React", "Tailwind CSS", "Express", "MongoDB"],
      projectDescription:
        "A simple app where multiple people can connect in a video call.",
      projectLink: "https://github.com/mdalkama689/group-video-call-app",
      projectImage: video_call_image,
    },
  ];

  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl bg-white font-bold text-black text-center py-1 px-3 rounded">
          My Latest Projects
        </h1>
        <p className="text-white text-xl font-semibold">
          Building projects is the best way to learn.
        </p>
        <div className="flex items-center justify-center flex-wrap w-full gap-4 p-4">
          {projectInfo.map((project) => (
            <div
              key={project.projectName}
              className="w-full border border-gray-200 h-[600px] sm:w-[45%] lg:w-[45%] bg-gray-950 rounded-lg text-white"
            >
              <img
                src={project.projectImage}
                alt={project.projectName}
                className=" h-80 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {project.projectName}
                </h2>
                <p className="mb-4">{project.projectDescription}</p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.techStack.map((tech, index) => (
                    <p
                      key={index}
                      className="px-3 py-0.5 bg-white text-black font-semibold text-xs rounded"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="flex items-center">
                  <Link
                    to={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
