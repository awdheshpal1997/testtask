import React from "react";
import { FooterAddress, FooterData, FooterLinks } from "./constants";
import headerLogo from "../../asset/logo.png";
import google from '../../asset/google.png'
import apple from '../../asset/apple.png'
import Social from "../social";


const Footer = () => {
  return (
    <div className="w-full bg-light-gray flex sm:px-28 px-4 py-16 flex-col-reverse justify-center sm:items-start items-center sm:flex-row">
      <div className="sm:w-1/2 w-full">
        {FooterAddress.map((item) => (
          <div>
            <p className="text-black font-bold	">{item.title}</p>
            <p>{item.regNo}</p>
            <p>{item.regValidity}</p>
            <p>{item.cin}</p>
            <p>{item.cinkey}</p>
          </div>
        ))}
        <Social />
      </div>
      <div className="sm:w-1/2 w-full flex flex-col-reverse sm:flex-col">
        <div className="flex items-center justify-between">
          <div className="pb-4">
            {FooterLinks.map((item, index) => (
              <p className="pb-4">{item}</p>
            ))}
          </div>
          <div className="pb-4">
            {FooterData.map((item, index) => (
              <p className="pb-4">{item}</p>
            ))}
          </div>
          <img className="hidden sm:block w-2/12" src={headerLogo} alt="newLogo" />
        </div>
        <div>
          <div className="text-center sm:text-left">
            <div className="flex justify-center">
              <img className="sm:hidden pb-8" src={headerLogo} alt="newLogo" />
            </div>
            <p className="pb-4">Download our app to start Investing</p>
            <div className="flex pb-4 justify-center items-center sm:justify-start sm:items-left">
              <img src={google} alt="google" className="w-4/12 mr-2" />
              <img src={apple} alt="apple" className="w-4/12 mr-2" />
            </div>
          </div>
          <p className="text-center sm:text-left">
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
