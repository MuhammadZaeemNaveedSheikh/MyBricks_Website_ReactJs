import React from "react";
import { Route, Routes } from "react-router-dom";
import InvestWithUs from "../screens/InvestWithUs";
import LandingPage from "../screens/LandingPage";
import OurChannel from "../screens/OurChannel";

function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/channel" element={<OurChannel />} />
        <Route path="/invest" element={<InvestWithUs />} />
      </Routes>
    </div>
  );
}

export default Navigation;
