"use client";

 

import React, { useState, useEffect } from "react";

import getData from "../../../firebase/firestore/getData";

import deleteBlog from "../../../firebase/firestore/deleteDoc";

 

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

      <h2 className="text-2xl text-center font-bold my-5">

        Admin Blog

      </h2>

      {documentData.length > 0 ? (

        documentData.map((blog) => (

          <div className="md:w-[60%] md:ml-[20%] flex flex-col border-primary border rounded-lg my-6 p-7" key={blog.id}>

          <div className="grid grid-cols-3">

            <div className="flex col-start-1 col-end-3">

              <img className="h-[35px] w-[35px] rounded-full mt-1 mr-2" src={blog.profilePic}/>

              <h1 className="text-xl font-bold m-2">{blog.user}</h1>

            </div>

              <button

                onClick={() => handleDelete(blog.id)}

                className="col-start-3 ml-[50%] max-h-[40px] w-[50%] bg-red-500 text-white p-2 rounded hover:bg-red-600"

                >

                Delete

              </button>

          </div>

          <div className="my-5 md:w-[43vw] h-3 bg-gradient-to-r from-[#FF6C00] to-[#FF6C0000]"></div>

          <div className="flex md:grid lg:flex justify-items-center ">

            {

              blog.description

              ? (

                <p className="text-[#555555] text-justify font-normal text-sm xl:text-base mr-4 md:mr-0  lg:mr-7 leading-normal">

                  {blog.description}

                </p>

                )

              : <></>

            }

            {

              blog.imageUrl

              ? (<img className="rounded-md max-h-[300px] max-w-[300px] md:mt-5 lg:mt-0" src={blog.imageUrl} alt={blog.title} />)

              : (<></>)

            }

          </div>

        </div>

        ))

      ) : (

        <p>No blogs found.</p>

      )}

    </div>

  );

}

 

export default Blogs;