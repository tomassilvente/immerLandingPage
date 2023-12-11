"use client";
import addData from "@/firebase/firestore/addData";
import getData from "@/firebase/firestore/getData";
import React from "react";

const CtaSignUp = () => {
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
    <div className="pb-20">
       {error ? (
            <div className="text-center text-lg text-[#ff3030] mb-8 rounded-md">
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
            <div className="text-center text-lg text-[#ff3030] mb-8 rounded-md">
              <p>
               {email} Already Registered.
              </p>
            </div>
          )}
     <form
          style={{
            display: success ? "none" : "block",
          }}
          onSubmit={handleForm}
          className="mt-8 sm:mt-4 flex flex-col gap-4 sm:block overflow-clip sm:rounded-md text-black"
        >
          <input
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[50%] rounded-lg sm:rounded-none px-5 py-3 text-base focus:outline-none bg-gray-100"
          />
          <button
            type="submit"
            className="sm:w-1/5 rounded-r-lg bg-[#FF6C00] hover:bg-[#d6844a] px-[auto] py-3 text-base font-normal text-white"
          >
            Sign up
          </button>
     </form>
     <p
     className="text-center rounded-lg bg-[#FF6C00] py-3 text-2xl font-normal text-white"
      style={{
        display: success ? "block" : "none",
      }}>
          Thank You for Signing Up!
     </p>
    </div>
  );
};

export default CtaSignUp;
