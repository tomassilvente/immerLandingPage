"use client";

import React, { useState } from "react";
import addData from "@/firebase/firestore/addData";

function MailCollector() {
  const [userEmail, setUserEmail] = useState("");

  const handleForm = async () => {
    // Create the data object with the user's email
    const data = {
      email: userEmail,
    };

    try {
      // Add the data to the Firestore collection
      await addData("usermail", data);

      // Reset the form
      setUserEmail("");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create New User</h2>
      <div className="flex flex-col space-y-2">
        <label htmlFor="userEmail">Email:</label>
        <input
          type="text"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="border border-gray-300 p-2"
        />
      </div>
      <button
        onClick={handleForm}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
      >
        Submit
      </button>
    </div>
  );
}

export default MailCollector;
