import React, { useState, useRef } from "react";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ErrorModal from "../UI/ErrorModal";

const LoginForm = (props) => {
  const [error, setError] = useState();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Username and Password.",
      });
      return;
    }

    props.setLogin(true);

    usernameRef.current.value = "";
    passwordRef.current.value = "";

    console.log(enteredUsername, enteredPassword);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <div className="flex flex-col w-[500px] mx-auto my-10 bg-white rounded-[10px]">
        <h4 className=" py-[50px] text-center  text-4xl text-[#333333] font-bold ">
          Login
        </h4>
        <form onSubmit={submitHandler} className="px-[50px]">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              placeholder="Type your username"
              className="block w-full p-2 text-gray-900 border-b-2 outline-none"
            />
          </div>
          <div className="flex flex-col py-4">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="Type your password"
              className="block w-full p-2 text-gray-900 border-b-2 outline-none"
            />
            <div className="text-right pt-2 pb-6">
              <a href="#" className="text-sm  text-[#666] hover:text-[#a64bf4]">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="w-100% bg-black text-white text-center rounded-full bg-gradient-to-r from-[#00dbde] to-[#fc00ff] ">
            <button
              type="submit"
              className="py-2 uppercase font-medium text-base w-[100%] h-[50px]  "
            >
              Login
            </button>
          </div>
          <div className="flex flex-col items-center pt-[54px]">
            <p className="pb-[16px] text-[#666]">Or Sign Up Using</p>
            <div className="flex flex-row py-2">
              <a href="#" className="m-[6px]">
                <FaFacebook color="#3b5998" size="50px" />
              </a>
              <a href="#" className="m-[6px]">
                <FaTwitter color="#00acee" size="50px" />
              </a>
              <a href="#" className="m-[6px]">
                <FcGoogle size="50px" />
              </a>
            </div>
            <div className="mt-[100px] pb-[50px] text-center">
              <p className="mb-[12px]">Or Sign Up Using</p>
              <a href="#">SIGN UP</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
