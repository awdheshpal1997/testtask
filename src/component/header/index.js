import React from "react";
import headerLogo from "../../asset/logo.png";

const Header = () => {
  return (
    <header className="p-4 sm:pl-8 md:pl-28 lg:pl-32 z-[9999] relative">
      <div className="flex items-center justify-between">
        <div className="text-black text-lg font-semibold">
          <img src={headerLogo} alt="logo" />
        </div>
        <nav className="hidden md:flex space-x-14">
          <a href="/about" className="text-black" >
            About Us
          </a>
          <a href="/corporate" class="text-black">
            Corporate
          </a>
          <a href="/retail" className="text-black">
            Retail
          </a>
          <a href="/white" className="text-black">
            White Label
          </a>
          <a href="/insights" className="text-black">
            Insights
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
