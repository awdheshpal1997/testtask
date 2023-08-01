import React from "react";
import image33 from "../../asset/image33.png";
import image34 from "../../asset/image34.png";
import image1350 from "../../asset/Frame1350.png";
import frame from "../../asset/Frame.png";
import frame1 from "../../asset/Frame 1.png";

const DashSection = () => {
  return (
    <>    <div className="flex h-90">
      <div className="sm:w-6/12 sm:pl-8 md:pl-28 lg:pl-32 sm:pt-16 sm:mt-14 w-full mt-32 sm:text-left text-center">
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
      <div className="absolute top-[0px] w-6/12  right-[0] z-[0]">
        <img className="absolute" src={image34} alt="backImage" />
        <div className="relative">
          <img className="absolute" src={image33} alt="backImage" />
          <img className="relative " src={image1350} alt="banner" />
        </div>
      </div>
    </div>
    <div className="md:flex md:justify-between hidden">
    <img className="relative bottom-72 "src={frame} alt="frame"/>
     <img className="relative"src={frame1} alt="frame"/>
    </div>
    </>

  );
};

export default DashSection;
