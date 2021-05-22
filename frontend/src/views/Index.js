
import React from "react";
import Header from "../components/Headers/Header.js";
import Devices from "./Devices/Devices.js";
import Statistics from "./Statistics/Statistics.js";


const Index = (props) => {

  return (
    <>
      <Header />
      <Statistics/>
      <Devices pagetitle="DEVICE LIST" tabledata={[]} page="devicelist"/>
      
    </>
  );
};

export default Index;
