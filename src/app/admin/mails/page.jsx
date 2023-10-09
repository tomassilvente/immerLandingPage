"use client";

import React, { useState, useEffect } from "react";
import getData from "@/firebase/firestore/getData";

function Blogs() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    // Fetch a specific document from Firestore and set it to the state
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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Here you can find all mails registers in the waitlist 
      </h2>
      {documentData.length > 0 ? (
        documentData.map((usermail) => (
          <div
            key={usermail.id}
            className="border border-gray-300 p-4 rounded shadow mb-4"
          >
            <h3 className="text-lg font-bold mb-2">{usermail.title}</h3>
          </div>
        ))
      ) : (
        <p>No users founded :C.</p>
      )}
    </div>
  );
}

export default Blogs;
