"use client";

import { useRouter } from "next/navigation";
import { getAuth } from "@firebase/auth";
import React, { useState } from "react";
import addData from "../../../../firebase/firestore/addData";
import { uploadImage } from "../../../../firebase/firestore/uploadImage";
import withAuth from "@/app/hoc/withAuth";

function CreateNew() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleForm = async () => {
    console.log("Selected image:", image);

    // Getting User from Database

    let user = getAuth().currentUser;
    console.log(user);

    let userName = "Still not working LMAO";
    let profilePic = "none";

    if (user) {
      userName = user.displayName;
      profilePic = user.photoURL;
    }

    // Create the data object with title and description

    const data = {
      user: userName,

      profilePic: profilePic,

      title: title,

      category: category,

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

      await addData("blogs", null, data);

      //
      return router.push("/admin/blogs");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="p-20">
      <h2 className="text-2xl font-bold  text-center my-14">Create New Blog</h2>

      <div className="flex flex-col space-y-2 my-5">
        <label className="text-lg font-semibold" htmlFor="title">
          TITLE
        </label>

        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#f2f2f2]"
        />
      </div>
      <div className="flex flex-col space-y-2 my-5">
        <label className="text-lg font-semibold" htmlFor="category">
          CATEGORY
        </label>

        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#f2f2f2]"
        >
          <option value="For Entertainers">For Entertainers</option>
          <option value="For Vendors">For Vendors</option>
          <option value="For Organizers">For Organizers</option>
          <option value="For Administrator">For Administrator</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2 my-5">
        <label className="text-lg font-semibold" htmlFor="description">
          DESCRIPTION
        </label>

        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#f2f2f2]"
        />
      </div>

      <div className="flex flex-col space-y-2 my-5">
        <label htmlFor="image">Image:</label>

        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
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

export default withAuth(CreateNew);
