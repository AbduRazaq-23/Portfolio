import React from "react";
import pic from "../assets/Ar2.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#2e424d] flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center items-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-[#98dad9] font-bold xs:pt-10">
            Hi, My Name is
          </p>
          <h1 className="py-3 text-3xl md:text-7xl font-bold text-[#eaebed]">
            ABDU RAZAQ
          </h1>
          <p className="text-3xl text-[#eaebed]">I am Front End Developer</p>
        </div>

        <div className=" w-[80%] mx-auto bg-red-400  rotate-3 py-5 rounded-xl mt-20 h-100 relative ">
          <img
            className=" w-full object-cover bg-cyan-400 rounded-xl -rotate-3"
            src={pic}
            alt="abdurazaq"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
