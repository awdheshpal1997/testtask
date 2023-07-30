import React from "react";
import { SeeUsData } from "./constants";

const SeeUs = () => {
  return (
    <div className="mx-96 my-20 px-14 py-6 bg-light-gray ">
      <p className="text-black font-bold text-xl pb-12">What See Us Apart</p>
      {SeeUsData.map((item, index) => (
        <div
          className={`flex p-8 items-center justify-between ${
            index === 2 ? "" : "border-b-2"
          }`}
        >
          <img src={item.image} alt={item} />
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
