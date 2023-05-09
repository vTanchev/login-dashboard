import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000bf] z-10"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[30vh] left-[36%] w-[30%] z-20 overflow-hidden bg-white shadow-[0 2px 8px #00000042] rounded">
      <header className="bg-gradient-to-r from-[#00dbde] to-[#fc00ff] p-[1rem]">
        <h2 className="m-0 text-white">{props.title}</h2>
      </header>
      <div className="p-[1rem]">
        <p>{props.message}</p>
      </div>
      <footer className="p-[1rem] flex justify-end ">
        <button onClick={props.onClose}>Okay</button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
