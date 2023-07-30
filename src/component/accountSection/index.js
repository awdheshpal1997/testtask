import React from "react";
import { accountSection } from "./constants";

const AccountSection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 justify-center sm:px-96 py-72 place-items-center z-[999] relative">
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
