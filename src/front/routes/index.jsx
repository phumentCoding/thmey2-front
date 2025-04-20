import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Info1 from "../pages/details/Info1";
import Info2 from "../pages/details/Info2";
import Info3 from "../pages/details/Info3";
import Image1 from "../pages/details/Image1";
import Contage1 from "../pages/details/Cotage1";
import Contage2 from "../pages/details/Contage2";
import Image2 from "../pages/details/Image2";
import Home from "../pages/home/Home";
import MasterFront from "../layout/MasterFront";

const FrontRoute = () => {
  return (
    <Routes>
      {/* MasterFront acts as the main layout for the frontend */}
      <Route element={<MasterFront />}>
        {/* Main Routes */}
        <Route index element={<Home />} />
        <Route path="/info1" element={<Info1 />} />
        <Route path="/info2" element={<Info2 />} />
        <Route path="/info3" element={<Info3 />} />
        <Route path="/image1" element={<Image1 />} />
        <Route path="/cotage1" element={<Contage1 />} />
        <Route path="/cotage2" element={<Contage2 />} />
        <Route path="/image2" element={<Image2 />} />
        
        {/* Authentication Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default FrontRoute;
