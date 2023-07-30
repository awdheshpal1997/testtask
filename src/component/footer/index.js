import React from "react";
import { FooterAddress, FooterData, FooterLinks } from "./constants";
import headerLogo from "../../asset/logo.png";
import playstore from "../../asset/play-store.png";
import appllestore from "../../asset/apple-store.png";

const Footer = () => {
  return (
    <div className="w-full bg-light-gray flex sm:px-28 px-4 py-16 flex-col-reverse justify-center items-center sm:flex-row">
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
      <div className="w-1/2 flex flex-col-reverse sm:flex-col">
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
          <img className="hidden sm:block" src={headerLogo} alt="newLogo" />
        </div>
        <div>
          <div>
            <div className="flex justify-center">
              <img className="sm:hidden" src={headerLogo} alt="newLogo" />
            </div>
            <p>Download our app to start Investing</p>
            <div className="flex">
              <img width={200} height={50} src={playstore} alt="googlelogo" />
              <img width={400} src={appllestore} alt="applelogo" />
            </div>
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
