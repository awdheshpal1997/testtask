import React from "react";
import { accountSection } from "./constants";

const AccountSection = () => {
  return (
    <div className="grid sm:grid-cols-3 sm:gap-3 grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 justify-center px-8 sm:px-28 py-28  place-items-center z-[999] relative">
      {accountSection.map((item) => (
        <div>
          <img src={item.image} alt="sectionimage" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AccountSection;
