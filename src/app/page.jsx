"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-[#0c048c]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <div className="w-[200px] h-[200px] mb-8">
            <img
              src="https://ucarecdn.com/0115e3fe-a90f-468a-879d-dff2eea259d7/-/format/auto/"
              alt="MSTRB 2015 logo showing a circular design with radiating lines"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-white text-4xl font-bold font-roboto mb-4">
            MSTRB 2015
          </h1>
          <p className="text-white text-xl font-roboto text-center">
            Singly & Doubly Reinforced Beam Analysis and Design
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          <button
            onClick={() => (window.location.href = "/analysis")}
            className="w-full md:w-1/2 p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-6 group"
          >
            <div className="w-20 h-20 bg-[#0c048c] rounded-full flex items-center justify-center">
              <i className="fas fa-calculator text-4xl text-white"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-roboto text-[#0c048c]">
                Beam Analysis
              </h2>
              <p className="text-center text-gray-600 font-roboto leading-relaxed">
                Calculate and analyze the structural capacity of reinforced
                concrete beams
              </p>
            </div>
            <div className="mt-auto pt-4 text-[#0c048c] font-roboto">
              <span className="flex items-center gap-2">
                Start Analysis
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </div>
          </button>

          <button
            onClick={() => (window.location.href = "/design")}
            className="w-full md:w-1/2 p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-6 group"
          >
            <div className="w-20 h-20 bg-[#0c048c] rounded-full flex items-center justify-center">
              <i className="fas fa-drafting-compass text-4xl text-white"></i>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-roboto text-[#0c048c]">
                Beam Design
              </h2>
              <p className="text-center text-gray-600 font-roboto leading-relaxed">
                Generate optimal beam designs that meet your requirements
              </p>
            </div>
            <div className="mt-auto pt-4 text-[#0c048c] font-roboto">
              <span className="flex items-center gap-2">
                Start Design
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;