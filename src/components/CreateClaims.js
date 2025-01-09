import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CreateClaim = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [claimAmount, setClaimAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClaim = {
      id: Math.random(), // generate a unique ID (you can replace it with a more reliable approach)
      employeeName,
      claimAmount,
      status: "Pending",
    };

    console.log("Form Submitted", newClaim);

    // Save the new claim in localStorage or state management (optional)
    localStorage.setItem("newClaim", JSON.stringify(newClaim));

    // Navigate to the dashboard after submitting
    navigate("/dashboard");
  };

  return (
    <div>
      <NavBar />

      <div className="flex items-center justify-center min-h-screen bg-gray-700">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Create Claim</h1>

          <div className="mb-4">
            <label
              htmlFor="employeeName"
              className="block text-gray-700 font-medium mb-2"
            >
              Employee Name
            </label>
            <input
              id="employeeName"
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="claimAmount"
              className="block text-gray-700 font-medium mb-2"
            >
              Claim Amount
            </label>
            <input
              id="claimAmount"
              type="number"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={claimAmount}
              onChange={(e) => setClaimAmount(e.target.value)}
              placeholder="Enter claim amount"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit Claim
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateClaim;
