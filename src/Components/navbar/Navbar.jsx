import React, { useState } from "react";
import { Menu } from "./NavMenu";

import logo from "../../assets/ar.png";
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
          {Menu.map((item) => {
            return (
              <Link key={item.id} to={item.path} smooth={true} duration={500}>
                <li className="mx-3 hover:text-white cursor-pointer">
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <ul className="hidden md:flex ">
        <li className="mx-3 hover:scale-125 ">
          <a href="https://github.com/AbduRazaq-23" target="blank">
            <FaGithub size={25} />
          </a>
        </li>
        <li className="mx-3 hover:scale-125">
          <a
            href="https://www.linkedin.com/in/abdu-razaq-03a647277/"
            target="blank"
          >
            <FaLinkedin size={25} />
          </a>
        </li>
        <Link to="https://www.facebook.com/husta.alak">
          <li className="mx-3 hover:scale-125">
            <FaFacebook size={25} />
          </li>
        </Link>
      </ul>

      {/* Mobile  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      <ul
        className={
          !Nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-[80%] h-screen bg-[#2e424d] flex flex-col pt-24"
        }
      >
        {Menu.map((item) => {
          return (
            <Link key={item.id} to={item.path} smooth={true} duration={500}>
              <li className="text-2xl  font-bold ml-5 py-3 ">{item.title}</li>
            </Link>
          );
        })}

        <ul className="flex">
          <li className="m-5 hover:scale-125">
            <a href="https://github.com/AbduRazaq-23" target="blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li className="m-5 hover:scale-125">
            <a
              href="https://www.linkedin.com/in/abdu-razaq-03a647277/"
              target="blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="m-5 hover:scale-125">
            <a href="https://www.facebook.com/husta.alak" target="blank">
              <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Nav;
