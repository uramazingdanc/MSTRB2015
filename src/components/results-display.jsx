"use client";
import React from "react";

function ResultsDisplay({
  title = "",
  parameters = [],
  steps = [],
  result = null,
  units = "",
}) {
  const [expandedStep, setExpandedStep] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-roboto mb-6 text-[#2c3e50]">
        {title}
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold font-roboto mb-4 text-[#34495e]">
          Input Parameters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parameters.map((param, index) => (
            <div key={index} className="bg-[#f8f9fa] p-4 rounded-md">
              <span className="font-medium font-roboto text-[#2c3e50]">
                {param.name}:
              </span>
              <span className="ml-2 font-roboto">
                {param.value} {param.unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold font-roboto mb-4 text-[#34495e]">
          Calculation Steps
        </h3>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-[#e9ecef] rounded-md overflow-hidden"
            >
              <button
                className="w-full p-4 text-left bg-[#f8f9fa] hover:bg-[#e9ecef] transition-colors flex justify-between items-center"
                onClick={() =>
                  setExpandedStep(expandedStep === index ? null : index)
                }
              >
                <span className="font-medium font-roboto">
                  Step {index + 1}
                </span>
                <i
                  className={`fas ${
                    expandedStep === index ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </button>
              {expandedStep === index && (
                <div className="p-4 bg-white">
                  <p className="font-roboto mb-2">{step.description}</p>
                  <div className="bg-[#f8f9fa] p-3 rounded font-mono">
                    {step.equation}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {result !== null && (
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h3 className="text-xl font-semibold font-roboto mb-2 text-[#34495e]">
            Final Result
          </h3>
          <div className="text-2xl font-bold font-roboto text-[#2c3e50]">
            {result} {units}
          </div>
        </div>
      )}
    </div>
  );
}

function ResultsDisplayStory() {
  const sampleData = {
    title: "Beam Deflection Calculator",
    parameters: [
      { name: "Length", value: "5", unit: "m" },
      { name: "Load", value: "1000", unit: "N" },
      { name: "Young's Modulus", value: "200", unit: "GPa" },
      { name: "Moment of Inertia", value: "0.0004", unit: "m⁴" },
    ],
    steps: [
      {
        description:
          "Calculate the maximum deflection using the beam deflection formula",
        equation: "δ = (P * L³) / (48 * E * I)",
      },
      {
        description: "Substitute the values into the equation",
        equation: "δ = (1000 * 5³) / (48 * 200e9 * 0.0004)",
      },
      {
        description: "Solve the equation",
        equation: "δ = 0.00325 meters",
      },
    ],
    result: 3.25,
    units: "mm",
  };

  return (
    <div className="bg-[#f0f2f5] min-h-screen p-4">
      <ResultsDisplay {...sampleData} />
    </div>
  );
}

export default ResultsDisplay;