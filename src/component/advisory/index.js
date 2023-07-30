import React, { useState } from "react";
import mask from "../../asset/Mask group.png";
import imgaee from "../../asset/advisory.png";
const Advisory = () => {
  const [isButtonClicked, setIsButtonClicked] = useState({
    Corporate: false,
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
      <p className="font-bold text-white text-4xl px-44">Our Advisory Stack</p>
      <div className="font-bold text-white text-xl flex items-center justify-between px-96 pt-12 border-b border-white">
        <button
          className={`w-2/6 ${
            isButtonClicked.Corporate ? "border-b-4 border-white" : ""
          }`}
          onClick={(e) => handleButtonClick("corporate")}
        >
          Corporate
        </button>
        <button
          className={`w-2/6  ${
            isButtonClicked.Retail ? "border-b-4 border-white" : ""
          }`}
          onClick={(e) => handleButtonClick("Retail")}
        >
          Retail
        </button>
        <button
          className={`w-2/6 z-[999] relative ${
            isButtonClicked.White ? "border-b-4 border-white" : ""
          }`}
          onClick={(e) => handleButtonClick("White")}
        >
          White-Lable
        </button>
      </div>
      <div className="flex items-center justify-between px-44">
        <div className="w-4/12">
          <p className="font-bold text-white text-3xl pb-8">
            Essential Financial stack for every business.
          </p>
          <p className="text-white pb-4">
            EleverOne brings a suite of financial solutions to streamline and
            boost your business foundations, freeing you to focus on growth &
            profitability.
          </p>
          <button className="bg-buttoncolor text-white px-4 py-2 text-xl rounded-half">
            Get to know us
          </button>
        </div>
        <img src={mask} alt="mask" />
      </div>
    </div>
  );
};

export default Advisory;
