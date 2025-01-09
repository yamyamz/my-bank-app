import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"; // Import NavBar component
import Footer from "./Footer"; // Import Footer component

const loggedInUser = {
  id: 1,
  name: "John Doe",
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Simulate fetching claims for logged-in user
    const fetchUserClaims = () => {
      const allClaims = [
        { id: 1, userId: 1, employeeName: "John Doe", claimAmount: "$500", status: "Pending" },
        { id: 2, userId: 1, employeeName: "John Doe", claimAmount: "$750", status: "Approved" },
        { id: 3, userId: 1, employeeName: "John Doe", claimAmount: "$320", status: "Rejected" },
        { id: 4, userId: 1, employeeName: "John Doe", claimAmount: "$200", status: "Pending" },
      ];

      const userClaims = allClaims.filter((claim) => claim.userId === loggedInUser.id);
      setClaims(userClaims);
    };

    fetchUserClaims();

    // Check if there is a new claim in localStorage and add it to the claims list
    const newClaim = JSON.parse(localStorage.getItem("newClaim"));
    if (newClaim) {
      setClaims((prevClaims) => [...prevClaims, newClaim]);
      localStorage.removeItem("newClaim");
    }
  }, []);

  // Remove claim handler
  const removeClaim = (claimId) => {
    const updatedClaims = claims.filter((claim) => claim.id !== claimId);
    setClaims(updatedClaims);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar */}
      <NavBar />

      {/* Dashboard Content */}
      <main className="flex-1 bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg mb-4">Welcome back, {loggedInUser.name}!</p>

        {/* Create Claim Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/create-claim")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Create Claim
          </button>
        </div>

        {/* Claim Records Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Your Claim Records</h2>

          <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md">
            <table className="w-full table-auto text-left text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Claim Amount</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-gray-700">
                    <td className="px-4 py-2">{claim.employeeName}</td>
                    <td className="px-4 py-2">{claim.claimAmount}</td>
                    <td
                      className={`px-4 py-2 ${
                        claim.status === "Pending"
                          ? "text-yellow-500"
                          : claim.status === "Approved"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {claim.status}
                    </td>
                    <td className="px-4 py-2">
                      {["Pending", "Rejected"].includes(claim.status) && (
                        <>
                          {/* Edit Button */}
                          <button
                            onClick={() => navigate(`/edit-claim/${claim.id}`)}
                            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded mr-2"
                          >
                            Edit
                          </button>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeClaim(claim.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
                          >
                            Remove
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
