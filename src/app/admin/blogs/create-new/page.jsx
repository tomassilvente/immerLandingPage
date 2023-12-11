"use client";

import { useRouter } from "next/navigation";
import { getAuth } from "@firebase/auth";
import React, { useState } from "react";
import addData from "../../../../firebase/firestore/addData";
import { uploadImage } from "../../../../firebase/firestore/uploadImage";
import withAuth from "@/app/hoc/withAuth";
import getData from "@/firebase/firestore/getData";

function CreateNew() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("For Vendors");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();

  const addMarkdown = (markdownTag) => {
    const currentCursorPosition =
      document.getElementById("description").selectionStart;
    const newDescription =
      description.substring(0, currentCursorPosition) +
      markdownTag +
      description.substring(currentCursorPosition);
    setDescription(newDescription);
  };

  const handleForm = async () => {
    try {
      console.log("Selected image:", image);

      let user = getAuth().currentUser;
      let userName = "Still not working LMAO";
      let profilePic = "none";

      if (user) {
        userName = user.displayName;
        profilePic = user.photoURL;
      }
      let imageURL = null;

      if (image) {
        imageURL = await uploadImage(image);
        console.log("Image uploaded successfully.");
      }

      if (imageURL !== null) {
        const data = {
          user: user.displayName,
          profilePic: profilePic,
          title: title,
          category: category,
          description: description,
          imageUrl: imageURL,
          creator: user.email
        };
        const usuarios = (await getData('users'))
        console.log(usuarios)
        let {result} = await addData("blogs", null, data);
        if(usuarios){
          for(let a=0; a<usuarios.length; a++){
            if(usuarios[a].email === user.email){ 
              let blogs = usuarios[a].blogs
              blogs.push(result.id)
              await addData('users', usuarios[a].id, {blogs:blogs})
              console.log(usuarios[a].blogs)
            }
          }
        }
        else return
        return router.push("/admin/blogs");
      } else {
        console.error("Image URL is null. Please upload an image.");
      }
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
          <option value="For Vendors">For Vendors</option>
          <option value="For Entertainers">For Entertainers</option>
          <option value="For Organizers">For Organizers</option>
          <option value="For Administrator">For Administrator</option>
          <option value="For Attendees">For Attendees</option>
        </select>
      </div>

      <div className="mdEdit flex flex-col space-y-2 my-5">
        <label className="text-lg font-semibold" htmlFor="description">
          DESCRIPTION
        </label>

        <div className="flex space-x-2">
          <button
            onClick={() => addMarkdown("**")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Bold
          </button>
          <button
            onClick={() => addMarkdown("_")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Italic
          </button>
          <button
            onClick={() => addMarkdown("## ")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Heading 2
          </button>
          <button
            onClick={() => addMarkdown("### ")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Heading 3
          </button>
          <button
            onClick={() => addMarkdown("#### ")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Heading 4
          </button>
          <button
            onClick={() => addMarkdown("- ")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Bullet List
          </button>
          <button
            onClick={() => addMarkdown("1. ")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Numbered List
          </button>
          <button
            onClick={() => addMarkdown("> ")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Blockquote
          </button>
          <button
            onClick={() => addMarkdown("`")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Code
          </button>
          <button
            onClick={() => addMarkdown("---")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Horizontal Rule
          </button>
          <button
            onClick={() => addMarkdown("<br />")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Line Break
          </button>
        </div>

        <textarea
          rows="5"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-[100%] mb-4 lg:h-14 h-12 p-5 rounded-lg bg-[#f2f2f2]"
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
