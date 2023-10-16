"use client";
import React, { useState, useEffect } from "react";
import { getAuth } from "@firebase/auth";
import getData from "../../../firebase/firestore/getData";
import deleteBlog from "../../../firebase/firestore/deleteDoc";
import Link from "next/link";
import { deleteImage } from "@/firebase/firestore/deleteImage";
import withAuth from "@/app/hoc/withAuth";

const user = getAuth().currentUser;

let userName = "Non User Logged in";
let photoURL = "Non User Logged in";

if (user) {
  userName = user.displayName;
  photoURL = user.photoURL;
}

function Blogs() {
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    // Fetch a specific document from Firestore and set it to the state

    const fetchData = async () => {
      try {
        const { result, error } = await getData("blogs", null);
        // let publisher = await (getData("users", user.id)).result
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

  const handleDelete = async (id, image) => {
    const wasDeleted = await deleteBlog(id);

    if (wasDeleted) {
      await deleteImage(image);
      setDocumentData((prevBlogs) =>
        prevBlogs.filter((blog) => blog.id !== id)
      );
    }
  };

  return (
    <div className="p-4">
      <div className="flex">
        <img
          className="h-[45px] w-[45px] rounded-full mt-5 mr-2 ml-5"
          src={photoURL}
        />
        <div className="mt-5 ml-3 ">
          <p className="font-semibold">{userName}</p>
          <Link className="text-xs" href="/admin/edit-profile">
            Edit profile
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <h2 className="text-2xl text-center font-bold mb-5 ml-12 col-start-4 col-end-9">
          Admin Blog
        </h2>
        <Link
          className="border-[#158406] border rounded-md text-[#158406] text-center col-start-9 col-end-12 lg:col-end-11 md:mr-12 pt-3 ml-10"
          href="/admin/blogs/createnew"
        >
          Post a Blog
        </Link>
      </div>

      {documentData.length > 0 ? (
        documentData.map((blog) => (
          <div
            className="md:w-[60%] md:ml-[20%] flex flex-col border-primary border rounded-lg my-6 p-7"
            key={blog.id}
          >
            <div className="grid grid-cols-3">
              <div className="flex col-start-1 col-end-3">
                <img
                  className="h-[35px] w-[35px] rounded-full mt-1 mr-2"
                  src={blog.profilePic}
                />

                <h1 className="text-xl font-bold m-2">{blog.user}</h1>
              </div>

              <button
                onClick={() => handleDelete(blog.id, blog.imageUrl)}
                className="col-start-3 ml-[50%] max-h-[40px] w-[50%] bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>

            <div className="my-5 md:w-[43vw] h-3 bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000]"></div>

            <p className="font-semibold mb-5 text-2xl">{blog.title}</p>

            <div className="flex md:grid lg:flex justify-items-center ">
              {blog.description ? (
                <p className="text-[#555555] text-justify font-normal text-sm xl:text-base mr-4 md:mr-0  lg:mr-7 leading-normal">
                  {blog.description}
                </p>
              ) : (
                <></>
              )}

              {blog.imageUrl ? (
                <img
                  className="rounded-md max-h-[300px] max-w-[300px] md:mt-5 lg:mt-0"
                  src={blog.imageUrl}
                  alt={blog.title}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}

export default withAuth(Blogs);
