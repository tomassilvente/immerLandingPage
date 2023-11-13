"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { uploadImage } from "../../../firebase/firestore/uploadImage";
import addData from "@/firebase/firestore/addData";


export default function Page() {
    const [email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [X, setX] = React.useState("");
    const [instagram, setInstagram] = React.useState("");
    const [facebook, setFacebook] = React.useState("");
    const [pinterest, setPinterest] = React.useState("");
    const [bio, setBio] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();
    
        // Upload the image to Firebase Storage and get its URL
        const imageURL = await uploadImage(image);
        const userData = {
          email: email,
          username: fullName,
          imageURL: imageURL,
          instagram: instagram,
          X:X,
          facebook:facebook,
          pinterest:pinterest,
          bio:bio,
          isAdmin: true
        };
        await addData("users", null, userData);
        const { result, error } = await signUp(email, Password, fullName, imageURL);
    
        if (error) {
          setError(true)
        }

        return router.push("/admin/login");
    }

    return(
    <div className="grid m-5 h-screen bg-white place-content-center place-items-center my-16">
        <Image className="" src='../assets/LandingPage/immer.svg' width={300} height={1}/>
        {
            error
                ? <div className="bg-[#ff17178a] text-white p-3 w-[100%] mt-10">invalid Email or Password</div>
                : ''
        }
        <form 
            onSubmit={handleForm} 
            className="form font-light text-black mt-40"
            style={{
              display:
                success
                ? "none"
                : "block"
            }}
            >
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
            <label className="row-start-2  row-end-3" htmlFor="password">
              <p className="mb-4">PASSWORD</p>
              <input
                className="w-[100%] lg:h-14 h-12 rounded-lg p-5 mb-8 bg-[#dddddd]"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
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
            <label>
              <p className=" text-[#b9b9b9] mt-5">
                By submitting this form you agree our 
                <Link href='/signin'> 
                  <span className="underline pl-2 text-[#FF6C00]">
                    terms and conditions
                  </span>
                </Link>
              </p>
            </label>
            <button 
              onClick={handleForm}
              className="row-start-3 bg-primary text-white my-8 py-3 w-[100%] rounded-[8px]" 
              type="submit" 
              >
                Sign Up!
            </button>
          </form>
    </div>
)}