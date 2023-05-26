import React from "react";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
const Main = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Layout />
      </div>
    </>
  );
};

export default Main;
