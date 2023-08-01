import React from "react";
import { accountSection } from "./constants";
import ellipse from "../../asset/Ellipse 11.png"
import elipse from "../../asset/Ellipse 10.png"

const AccountSection = () => {
  return (
    <>
    <div className="grid sm:grid-cols-3 sm:gap-3 grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 justify-center px-8 sm:px-28 py-28  place-items-center z-[999] relative">
      {accountSection.map((item) => (
        <div className="flex justify-center items-center flex-col">
          <img src={item.image} alt="sectionimage" />
          <p className="pt-3">{item.title}</p>
          
        </div>
      ))}
     
      
    </div>
     <div className=" w-full flex justify-between items-center">
     <img className=" w-12 relative  sm:bottom-72 bottom-96" src={elipse} alt="elipse" />
     <img className="w-12 relative sm:bottom-72 bottom-96" src={ellipse} alt="ellipse" />
     </div>
     </>
  );
};

export default AccountSection;
