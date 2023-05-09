import React from "react";

const Navbar = (props) => {
  const logoutHandler = () => {
    props.setLogin((prevState) => !prevState);
  };
  return (
    <div className="flex py-[20px] px-[50px] items-center flex-row justify-end text-white text-lg  ">
      <a href="#" className="mr-2">
        HOME
      </a>
      <a href="#" className="mr-2">
        ABOUT
      </a>
      <a href="#" className="mr-2">
        PROFILE
      </a>
      <a href="#" className="mr-10">
        SETTINGS
      </a>
      <div className="rounded bg-white p-[10px]">
        <button className="text-red-700 text-bold" onClick={logoutHandler}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};
export default Navbar;
