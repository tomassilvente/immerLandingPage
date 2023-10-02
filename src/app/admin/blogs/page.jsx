"use client";

import React, { useState, useEffect } from "react";
import getData from "@/firebase/firestore/getData";
import deleteBlog from "@/firebase/firestore/deleteDoc";

function Blogs() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    // Fetch a specific document from Firestore and set it to the state
    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", null);

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

  const handleDelete = async (id) => {
    const wasDeleted = await deleteBlog(id);
    if (wasDeleted) {
      setDocumentData((prevBlogs) =>
        prevBlogs.filter((blog) => blog.id !== id)
      );
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Here you can find all the blogs uploaded and delete them
      </h2>
      {documentData.length > 0 ? (
        documentData.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-300 p-4 rounded shadow mb-4"
          >
            <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
            <p>{blog.description}</p>
            <img src={blog.imageUrl} alt={blog.title} />
            <button
              onClick={() => handleDelete(blog.id)}
              className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default Blogs;
