"use client";

import addData from "@/firebase/firestore/addData";
import React from "react";

const LandingPageCTA = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUser] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false)
  let emailRegistered = false

  const SignInImg = "/assets/sign/signUp.svg";
  const handleForm = async (event, req) => {
    event.preventDefault();
  
    const userData = {
      email: email,
      username: username,
    };

    if(username.length < 4 || email.length < 10){
      console.log('Short')
      setError(true)
    }

    else{
      const registered = (await getData('users')).result
      for(let user = 0; user<registered.length || emailRegistered; user++){
        if(registered[user].email === email) {
          emailRegistered = true
          return;
        }
      }
      if(!emailRegistered){
        const { result, error } = await addData("users", null, userData, req);
        if (error) {
          console.error("Error saving user to Firestore:", error);
          return;
        }
      
        console.log("User saved successfully:", result);
        setSuccess(true);
      }
  }
  };

  return (
    <div className="bg-[#000000] py-10 lg:py-20 lg:pl-28 lg:pr-28 px-5 sm:px-20 flex flex-col gap-4 lg:flex-row justify-between items-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-white">
        Be the First to Experience the Evolution of Entertainment!
      </h1>
      <div>
        <p className="text-base text-white">
          Unlock unique benefits by joining us ahead of the crowd. Sign up now
          for exclusive early access and updates.
        </p>
        <form
          style={{
            display: success ? "none" : "block",
          }}
          onSubmit={handleForm}
          className="mt-8 sm:mt-4 flex overflow-clip sm:rounded-md text-black"
        >
          <input
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-3/5 w-[250px] rounded-l-lg sm:rounded-none px-5 py-3 text-base focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-r-lg w-[100px] bg-[#FF6C00] hover:bg-[#d6844a] py-3 text-base font-normal text-white"
          >
            Sign up
          </button>
          {error ? (
            <div className=" text-lg text-[#ff3030] mb-8 rounded-md">
              <p>
               Name/Email invalid or too short.
              </p>
            </div>
          ) : (
            ""
          )}
          {!emailRegistered ? (
            ''
          ) : (
            <div className=" text-lg text-[#ff3030] mb-8 rounded-md">
              <p>
               {email} Already Registered.
              </p>
            </div>
          )}
        </form>
        
        <p
          className="text-center rounded-lg bg-[#FF6C00] py-3 text-lg mt-5 font-normal text-white"
          style={{
            display: success ? "block" : "none",
          }}>
          Thank You for Signing Up!
        </p>
      </div>
    </div>
  );
};

export default LandingPageCTA;
