import React from "react";
import { FooterAddress, FooterData, FooterLinks } from "./constants";
import headerLogo from "../../asset/logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-light-gray flex px-28 py-16">
      <div className="w-1/2">
        {FooterAddress.map((item) => (
          <div>
            <p className="text-black font-bold	">{item.title}</p>
            <p>{item.regNo}</p>
            <p>{item.regValidity}</p>
            <p>{item.cin}</p>
            <p>{item.cinkey}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-between">
          <div>
            {FooterLinks.map((item, index) => (
              <p className="">{item}</p>
            ))}
          </div>
          <div>
            {FooterData.map((item, index) => (
              <p className="">{item}</p>
            ))}
          </div>
          <img src={headerLogo} alt="newLogo" />
        </div>
        <div>
          <div>
            <p>Download our app to start Investing</p>
            <img src={headerLogo} alt="googlelogo" />
            <img src={headerLogo} alt="applelogo" />
          </div>
          <p>
            Elever Investment Adviser Private Limited ("Elever") is a SEBI
            registered Investment Adviser (Registration No. INA200016102).
            Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing. Registration
            granted by SEBI, membership of BASL and certification from NISM in
            no way guarantee performance of the intermediary or provide any
            assurance of returns to investors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
