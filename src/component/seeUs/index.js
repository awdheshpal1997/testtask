import React from "react";
import { SeeUsData } from "./constants";

const SeeUs = () => {
  return (
    <div className="xl:mx-96 lg:mx-52 md:44 sm:32 my-20 px-14 py-6 bg-light-gray ">
      <p className="text-black font-bold text-xl pb-12">What See Us Apart</p>
      {SeeUsData.map((item, index) => (
        <div
          className={`flex p-8 sm:items-center sm:justify-between flex-col text-center w-full sm:text-left sm:flex-row ${
            index === 2 ? "" : "border-b-2"
          }`}
        >
          <div className="w-full flex justify-center sm:block sm:w-2/12">
            <img width={100} height={100} src={item.image} alt={item} />
          </div>
          <div className="pl-8">
            <p className="text-black font-bold text-lg pb-4">{item.title}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeUs;
