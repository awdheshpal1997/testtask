import React from "react";
import { SeeUsData } from "./constants";
import frame from "../../asset/Frame (2).png";
import group from "../../asset/Group.png"

const SeeUs = () => {
  return (
    <>
    <div className="sm:w-full sm:flex sm:justify-between md:items-center hidden">
      <img className="relative top-16 left-0"src={frame} alt="frame" />
      <img className="relative top-20 right-10" src={group} alt="group" />
    </div>
    <div className="xl:mx-32 lg:mx-32 md:mx-32 sm:mx-32 mt-8 mb-24 px-14 py-6 bg-ligth-blue ">
      <p className="text-black font-bold text-xl pb-12 text-center">What See Us Apart</p>
      {SeeUsData.map((item, index) => (
        <div
          className={`flex p-8 sm:items-center sm:justify-between flex-col text-center w-full sm:text-left sm:flex-row ${
            index === 2 ? "" : "border-b-2"
          }`}
        >
          <div className="w-full flex justify-center items-center sm:block sm:w-3/12">
            <img src={item.image} alt={item} />
          </div>
          <div className="w-full" >
            <p className="text-black font-bold text-xs	xl:text-lg md:text-lg">{item.title}</p>
            <p className="text-xs xl:text-lg md:text-lg	" >{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default SeeUs;
