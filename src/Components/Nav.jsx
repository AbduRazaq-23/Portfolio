import React, { useState } from "react";
import logo from "../assets/ar.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [Nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!Nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2e424d] text-gray-300 z-10">
      <div className="z-10">
        <img src={logo} alt="logo" className="w-[150px] " />
      </div>
      <div>
        <ul className="hidden md:flex items-center font-bold ">
          <li className="mx-3 hover:text-white cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mx-3 hover:text-white cursor-pointer">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="mx-3 hover:text-white cursor-pointer">
            {" "}
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="mx-3 hover:text-white cursor-pointer">
            {" "}
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="mx-3 hover:text-white cursor-pointer">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              ContactUs
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex ">
        <li className="mx-3 hover:scale-125 ">
          <a href="https://github.com/AbduRazaq-23" target="blank">
            <FaGithub />
          </a>
        </li>
        <li className="mx-3 hover:scale-125">
          <a
            href="https://www.linkedin.com/in/abdu-razaq-03a647277/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="mx-3 hover:scale-125">
          <a href="https://www.facebook.com/husta.alak" target="blank">
            <FaFacebook />
          </a>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-[80%] h-screen bg-[#2e424d] flex flex-col "
        }
      >
        <li className="text-2xl py-4 font-bold ml-5 mt-[85px]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-2xl py-4 font-bold ml-5">
          {" "}
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className="text-2xl py-4 font-bold ml-5">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-2xl py-4 font-bold ml-5">
          {" "}
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="text-2xl py-4 font-bold ml-5">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            ContactUs
          </Link>
        </li>

        <ul className="flex ">
          <li className="m-5 hover:scale-125">
            <a href="https://github.com/AbduRazaq-23" target="blank">
              <FaGithub />
            </a>
          </li>
          <li className="m-5 hover:scale-125">
            <a
              href="https://www.linkedin.com/in/abdu-razaq-03a647277/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="m-5 hover:scale-125">
            <a href="https://www.facebook.com/husta.alak" target="blank">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Nav;
