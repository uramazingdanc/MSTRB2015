"use client";
import React from "react";

function Header({
  title = "MSTRB 2015",
  description = "Structural Engineering Analysis & Design Tool for NSCP 2015",
}) {
  return (
    <div className="w-full bg-[#0066cc] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-building text-[#0066cc] text-2xl"></i>
            </div>
            <div>
              <h1 className="text-white text-2xl font-roboto font-bold">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-[#0066cc] font-roboto">{description}</p>
        </div>
      </div>
    </div>
  );
}

function HeaderStory() {
  return (
    <div className="w-full">
      <Header />
    </div>
  );
}

export default Header;