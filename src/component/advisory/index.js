import React, { useState } from "react";
import mask from "../../asset/Mask group.png";
import imgaee from "../../asset/advisory.png";
import mask1 from "../../asset/mask12.png";

const Advisory = () => {
  const [isButtonClicked, setIsButtonClicked] = useState({
    Corporate: true,
    Retail: false,
    White: false,
  });

  const handleButtonClick = (e) => {
    setIsButtonClicked({
      Corporate: e === "corporate" && !isButtonClicked.Corporate,
      Retail: e === "Retail" && !isButtonClicked.Retail,
      White: e === "White" && !isButtonClicked.White,
    });
  };
  return (
    <div
      style={{ "--image-url": `url(${imgaee})` }}
      className="bg-[image:var(--image-url)] bg-no-repeat bg-cover rounded-half p-16"
    >
      <p className="font-bold text-white text-4xl lg:px-32">
        Our Advisory Stack
      </p>
      <div className="font-bold text-white text-xl flex items-center justify-between lg:px-44 pt-12 border-b border-white">
        <button
          className={`sm:w-2/6 ${
            isButtonClicked.Corporate ? "border-b-4 border-white" : ""
          }`}
          onClick={(e) => handleButtonClick("corporate")}
        >
          Corporate
        </button>
        <button
          className={`sm:w-2/6  ${
            isButtonClicked.Retail ? "border-b-4 border-white" : ""
          }`}
          onClick={(e) => handleButtonClick("Retail")}
        >
          Retail
        </button>
        <button
          className={`sm:w-2/6 z-[999] relative ${
            isButtonClicked.White ? "border-b-4 border-white" : ""
          }`}
          onClick={(e) => handleButtonClick("White")}
        >
          White-Lable
        </button>
      </div>
      <div className="sm:flex items-center justify-between lg:px-32">
        <div className="md:w-6/12">
          <p className="font-bold text-white text-2xl md:text-3xl pb-8">
            {isButtonClicked.Corporate
              ? "Essential Financial stack for every business."
              : "Invest like a professional."}
          </p>
          <p className="text-white pb-4">
            {isButtonClicked.Corporate
              ? "EleverOne brings a suite of financial solutions to streamline and boost your business foundations, freeing you to focus on growth & profitability."
              : "Customize your investments with rule-based, equity strategies and tactical advisory to create alpha like never before."}
          </p>
          <button className="bg-buttoncolor text-white px-4 py-2 text-xl rounded-half">
            {isButtonClicked.Corporate ? "Get to know us" : "Know us"}
          </button>
        </div>
        <img className="lg:w-full sm:w-6/12 w-full" src={isButtonClicked.Corporate ? mask : mask1} alt="mask" />
      </div>
    </div>
  );
};

export default Advisory;
