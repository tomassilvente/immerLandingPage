"use client";

import React, { useState, useEffect } from "react";
import getData from "@/firebase/firestore/getData";

function Blogs() {
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    // Fetch a specific document from Firestore and set it to the state
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", "blogs-id");

        if (error) {
          console.error("Error fetching document:", error);
        } else {
          if (result && typeof result.data === "function") {
            setDocumentData(result.data());
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
      <h2 className="text-2xl font-bold mb-4">Uploaded Document</h2>
      {documentData ? (
        <div className="border border-gray-300 p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-2">{documentData.title}</h3>
          <p>{documentData.description}</p>
          
          <img src={documentData.imageUrl} alt={documentData.title} /> 
        </div>
      ) : (
        <p>No document found.</p>
      )}
    </div>
  );
}

export default Blogs;
