"use client";

import React, { useState } from "react";
import addData from "@/firebase/firestore/addData";
import { uploadImage } from "@/firebase/firestore/uploadImage";

function CreateNew() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);

  const handleForm = async () => {

    console.log("Selected image:", image);

    // Create the data object with title and description
    const data = {
      title: title,
      description: description,
      image: image,
      imageUrl: imageUrl,
    };

    try {
      if (image) {
        // Upload the image to Firebase Storage and get its URL
        const imageURL = await uploadImage(image);

        setImageUrl(imageURL);
      }

      // Add the data to the Firestore collection
      await addData("blogs", "blogs-id", data);

      // Reset the form
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create New User</h2>
      <div className="flex flex-col space-y-2">
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
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

export default CreateNew;
