import React from "react";
import Header from "./Header";
import BarChart from "./BarChart";
import Analytics from "./Analytics";
import RevAndDep from "./RevAndDep";
import Services from "./Services";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="mainAnalytics">
          <BarChart />
          <Analytics />
          <RevAndDep />
          <Services />
        </div>
        <div className="gradient__bg--1"></div>
        <div className="gradient__bg--2"></div>
        <div className="gradient__bg--3"></div>
      </div>
    </>
  );
};

export default Layout;
