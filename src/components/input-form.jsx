"use client";
import React from "react";

function InputForm({ onSubmit, title = "Number Form", buttonText = "Submit" }) {
  const [values, setValues] = useState({ amount: "", quantity: "" });
  const [errors, setErrors] = useState({});

  const validateNumber = (value, fieldName) => {
    if (!value) return `${fieldName} is required`;
    if (isNaN(value)) return `${fieldName} must be a number`;
    if (value < 0) return `${fieldName} must be positive`;
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    const error = validateNumber(value, name);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      const error = validateNumber(values[key], key);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(values);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-6 font-roboto">
        {title}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={values.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter amount"
          />
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={values.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Enter quantity"
          />
          {errors.quantity && (
            <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

function InputFormStory() {
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Default Form
        </h3>
        <InputForm onSubmit={handleSubmit} />
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Custom Title Form
        </h3>
        <InputForm
          onSubmit={handleSubmit}
          title="Custom Number Input"
          buttonText="Save Numbers"
        />
      </div>
    </div>
  );
}

export default InputForm;