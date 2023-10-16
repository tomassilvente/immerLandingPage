"use client";
import { useRouter } from "next/navigation";
import React from "react";
import editProfile from "@/firebase/firestore/editProfile";
import { uploadImage } from "../../../firebase/firestore/uploadImage";
import { getAuth } from "@firebase/auth";
import { deleteImage } from "@/firebase/firestore/deleteImage";
import withAuth from "@/app/hoc/withAuth";

const user = getAuth().currentUser;

function Page() {
  const [email, setEmail] = React.useState(user.email);
  const [fullName, setFullName] = React.useState(user.displayName);
  const [image, setImage] = React.useState(null);
  const [error, setError] = React.useState(false);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    // Upload the image to Firebase Storage and get its URL
    if (image) {
      await deleteImage(user.photoURL);
      const imageURL = await uploadImage(image);
      const { result, error } = await editProfile(
        user,
        email,
        fullName,
        imageURL
      );
      if (error) {
        setError(true);
      }
    } else {
      const { result, error } = await editProfile(user, email, fullName);
    }

    return router.push("/admin/blogs");
  };

  return (
    <div className="grid m-5 h-screen bg-white place-content-center place-items-center">
      <p className="text-3xl font-semibold">Edit Profile</p>
      {error ? (
        <div className="bg-[#ff17178a] text-white p-3 w-[100%] mt-10">
          invalid Email or Password
        </div>
      ) : (
        ""
      )}
      <form onSubmit={handleForm} className="form font-light text-black mt-12">
        <label className="row-start-1 row-end-2" htmlFor="email">
          <p className="pb-4 ">Complete Name (First Name & Last Name)</p>
          <input
            className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
            onChange={(e) => setFullName(e.target.value)}
            required
            type="text"
            name="name"
            id="name"
            placeholder={user.displayName}
          ></input>
        </label>
        <label className="row-start-1 row-end-2" htmlFor="email">
          <p className="pb-4 ">EMAIL</p>
          <input
            className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
        </label>
        <p className="pb-4 ">PROFILE PIC</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          required
          accept="image/png, image/jpeg, image/jpg"
          type="file"
          name="profilePic"
          id="profilePic"
        />

        <button
          onClick={handleForm}
          className="row-start-3 bg-primary text-white mt-8 py-3 w-[100%] rounded-[8px]"
          type="submit"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default withAuth(Page);
