"use client";
import { useRouter } from "next/navigation";
import React from "react";
import editProfile from "@/firebase/firestore/editProfile";
import { getAuth } from "@firebase/auth";
import withAuth from "@/app/hoc/withAuth";
import { replaceImage } from "@/firebase/firestore/replaceImage";
import getData from "@/firebase/firestore/getData";
import addData from "@/firebase/firestore/addData";

const user = getAuth().currentUser;
let usuario = {}

function Page() {

  const [email, setEmail] = React.useState(user.email);
  const [fullName, setFullName] = React.useState(user.displayName);
  const [X, setX] = React.useState(usuario.X);
  const [instagram, setInstagram] = React.useState(usuario.instagram);
  const [facebook, setFacebook] = React.useState(usuario.facebook);
  const [pinterest, setPinterest] = React.useState(usuario.pinterest);
  const [bio, setBio] = React.useState(usuario.bio);
  const [image, setImage] = React.useState(null);
  const [error, setError] = React.useState(false);
  const router = useRouter();

  const usuarios = (getData('users')).result
  if(usuarios){
    for(let a=0; a<usuarios.length; a++){
      if(usuarios[a].email === user.email){ 
        usuario = usuarios[a]
      }
    }
  }

  const handleForm = async (event) => {
    event.preventDefault();
    let user = getAuth().currentUser;
    if (image) await replaceImage(user.photoURL, image)
    const userData = {
      email: email,
      username: fullName,
      instagram: instagram,
      X:X,
      facebook:facebook,
      pinterest:pinterest,
      bio:bio,
    };
    await addData("users", usuario.id, userData);
    const { result, error } = await editProfile(user, email, fullName);
    if (error) {
      setError(true)
    }
    return router.push("/admin/blogs");
  };

  return (
    <div className="grid m-5 mt-20 h-screen bg-white place-content-center place-items-center">
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
                placeholder="John John"
              />
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
                placeholder="email@email.com"
              />
            </label>
            <label>
              <p className="pb-4 ">PROFILE PIC</p>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                required
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                name="profilePic"
                id="profilePic"
              />
            </label>
            <label className="row-start-1 row-end-2" htmlFor="email">
              <p className="pb-4 mt-4">Instagram Link</p>
              <input
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setInstagram(e.target.value)}
                type="text"
                name="instagram"
                id="instagram"
                placeholder="instagram.com/..."
              />
            </label>
            <label className="row-start-1 row-end-2" htmlFor="email">
              <p className="pb-4 ">X Link</p>
              <input
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setX(e.target.value)}
                type="text"
                name="x"
                id="x"
                placeholder="X.com/..."
              />
            </label>
            <label className="row-start-1 row-end-2" htmlFor="email">
              <p className="pb-4 ">Pinterest Link</p>
              <input
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setPinterest(e.target.value)}
                type="text"
                name="pinterest"
                id="pinterest"
                placeholder="pinterest.com/...."
              />
            </label>
            <label className="row-start-1 row-end-2" htmlFor="email">
              <p className="pb-4 ">Facebook Link</p>
              <input
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setFacebook(e.target.value)}
                type="text"
                name="facebook"
                id="facebook"
                placeholder="facebook.com/..."
              />
            </label>
            <label className="row-start-1 row-end-2" htmlFor="email">
              <p className="pb-4 ">Biography: Tell us about you</p>
              <textarea
                className="w-[100%] mb-4 lg:h-14 h-12 rounded-lg p-5 bg-[#dddddd]"
                onChange={(e) => setBio(e.target.value)}
                required
                type="text"
                name="bio"
                id="bio"
                placeholder="Born in ... I do this..."
              />
            </label>
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
