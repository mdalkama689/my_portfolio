import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const HomeLayout = () => {
  const github_Link = "https://github.com/mdalkama689";
  const linkedin_Link =
    "https://www.linkedin.com/in/md-alkama-ashraf-37359725b/";
  const twitter_Link = "https://x.com/alkama_07";
  const email = "mdalkama074@gmail.com";

  const handleNavigateToEmail = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center justify-center max-w-4xl bg-gray-900 px-5 py-3 gap-7 fixed bottom-3 rounded-full shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-2xl">
        <Link
          to="/"
          className="text-white hover:text-blue-500 text-2xl transition-all duration-200 transform hover:scale-110"
        >
          <IoMdHome />
        </Link>
        <Link
          to={github_Link}
          target="_blank"
          className="text-white hover:text-gray-400 text-2xl transition-all duration-200 transform hover:scale-110"
        >
          <FaGithub />
        </Link>
        <Link
          to={twitter_Link}
          target="_blank"
          className="text-white hover:text-blue-400 text-2xl transition-all duration-200 transform hover:scale-110"
        >
          <FaXTwitter />
        </Link>
        <Link
          to={linkedin_Link}
          target="_blank"
          className="text-white hover:text-blue-600 text-2xl transition-all duration-200 transform hover:scale-110"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="#"
          onClick={handleNavigateToEmail}
          target="_blank"
          className="text-white hover:text-gray-400 text-2xl transition-all duration-200 transform hover:scale-110"
        >
          <MdEmail />
        </Link>
      </div>
    </div>
  );
};

export default HomeLayout;
