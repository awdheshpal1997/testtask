import React from "react";
import Header from "../header";
import Footer from "../footer";
import SeeUs from "../seeUs";
import Advisory from "../advisory";
import AccountSection from "../accountSection";
import DashSection from "../dashSection";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <DashSection />
      <AccountSection />
      <Advisory />
      <SeeUs />
      <Footer />
    </div>
  );
};

export default Dashboard;
