"use client";

import React, { useState, useEffect } from "react";
import getData from "@/firebase/firestore/getData";
import withAuth from "@/app/hoc/withAuth";

function Mails() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result, error } = await getData("users", null);
        if (error) {
          console.error("Error fetching document:", error);
        } else {
          if (Array.isArray(result)) {
            setDocumentData(result);
          } else {
            console.error("Document data is not valid:", result);
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

  const copyAllEmails = () => {
    const emails = documentData.map((user) => user.email).join(", ");
    navigator.clipboard.writeText(emails);
  };

  const copyEmailsAndNames = () => {
    const combined = documentData
      .map((user) => `${user.username} <${user.email}>`)
      .join(", ");
    navigator.clipboard.writeText(combined);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Here you can find all mails registers in the waitlist
      </h2>
      <div className="mb-6">
        <button
          onClick={copyAllEmails}
          className="bg-blue-500 text-white p-2 rounded mr-4 hover:bg-blue-600"
        >
          Copy All Emails
        </button>
        <button
          onClick={copyEmailsAndNames}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Copy Emails with Names
        </button>
      </div>
      {documentData.length > 0 ? (
        documentData.map((usermail) => (
          <div
            key={usermail.id}
            className="border border-gray-300 p-4 rounded shadow mb-4 bg-white hover:bg-gray-100"
          >
            <h3 className="text-lg font-bold mb-2">{usermail.email}</h3>
            <h3 className="text-lg font-bold mb-2">{usermail.username}</h3>
          </div>
        ))
      ) : (
        <p>We are trying to recover the users</p>
      )}
    </div>
  );
}

export default withAuth(Mails);

