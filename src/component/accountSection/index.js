import React from "react";
import { accountSection } from "./constants";

const AccountSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center px-96 py-14 z-[999] relative">
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
