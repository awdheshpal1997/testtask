import React from "react";
import image33 from "../../asset/image33.png";
import image34 from "../../asset/image34.png";
import image1350 from "../../asset/Frame1350.png";

const DashSection = () => {
  return (
    <div className="flex h-90">
      <div className="w-6/12 pl-96 pt-16">
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
      <div className="absolute top-[-89px] right-[0] z-[0]">
        <img
          className="absolute"
          src={image34}
          height={859}
          width={848}
          alt="backImage"
        />
        <img
          className="relative"
          src={image33}
          height={859}
          width={848}
          alt="backImage"
        />
        <img
          className="relative bottom-[652px] left-[161px]"
          height={532}
          width={632}
          src={image1350}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default DashSection;
