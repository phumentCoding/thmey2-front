import React from "react";
import Header from "../components/head/Header";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/foot/Footer";
import { Outlet } from "react-router-dom";

const MasterFront = () => {
  return (
    <div>
      <Header />
      <Navbar />

      {/* Main Layout */}
      <div className="grid grid-cols-12 mx-auto my-8 lg:w-[97%] md:w-[97%] sm:w-full">
        {/* Left Sidebar (Hidden on small screens) */}
        <div className="col-span-1 hidden lg:block">
          <div className="sticky top-5">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://image.thmeythmey.com/advertising/478/130__550-lleft11.png"
                alt="Advertisement"
                className="w-full object-cover"
              />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-10 md:col-span-10 col-span-12">
          <Outlet />
        </div>

        {/* Right Sidebar (Hidden on small screens) */}
        <div className="col-span-1 hidden lg:block">
          <div className="sticky top-5">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://image.thmeythmey.com/advertising/478/130__550-lleft11.png"
                alt="Advertisement"
                className="w-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MasterFront;
