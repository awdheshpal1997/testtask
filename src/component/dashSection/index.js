import React from "react";
import image33 from "../../asset/image33.png";
import image34 from "../../asset/image34.png";
import image1350 from "../../asset/Frame1350.png";

const DashSection = () => {
  return (
    <div className="flex h-90 ">
      <div className="sm:w-6/12 sm:pl-96 sm:pt-16 sm:mt-14 w-full mt-90">
        <p className="font-bold text-3xl pb-12">We Tech your money.</p>{" "}
        <p className="text-xl pb-6 text-light-text">
          Elever is a hybrid, robo-advisory firm that offers a range of
          end-to-end retail and corporate investment advisory, powered by the
          latest in rule-based strategies.
        </p>{" "}
        <button className="bg-buttoncolor text-white text-xl px-4 py-2 rounded-half">
          Get to know us
        </button>
      </div>
      <div className="absolute top-[0px] sm:w-5/12 sm:top-[-89px] sm:right-[0] z-[0]">
        <img className="absolute" src={image34} alt="backImage" />
        <img className="relative " src={image33} alt="backImage" />
        <img
          className="relative sm:bottom-[652px] sm:left-[161px] bottom-[466px] w-9/12 left-[120px]"
          src={image1350}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default DashSection;
