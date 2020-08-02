import React, { useState } from "react";
import Modal from "../../../node_modules/react-modal";
import { IoIosClose } from "../../../node_modules/react-icons/io";
import { FiUserPlus } from "../../../node_modules/react-icons/fi";
import { FiUserCheck } from "../../../node_modules/react-icons/fi";
import SignUp from "../auth/SignUp";
import LogIn from "../auth/LogIn";
import "./Navbar.css";

const LoggedOutLinks = () => {
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  function closeSignUp() {
    setSignupIsOpen(false);
  }
  function openSignUp() {
    setSignupIsOpen(true);
  }
  function closeLogIn() {
    setLoginIsOpen(false);
  }
  function openLogIn() {
    setLoginIsOpen(true);
  }

  return (
    <div>
      <button className="textbut" onClick={openLogIn}>
        LOG IN
      </button>
      <button className="iconbut" onClick={openLogIn}>
        <FiUserCheck />
      </button>
      <Modal
        className="content"
        overlayClassName="overlay"
        isOpen={loginIsOpen}
        onRequestClose={closeLogIn}
      >
        <button className="close" onClick={closeLogIn}>
          <IoIosClose />
        </button>
        <LogIn />
        <div className="butdown">
          <button
            id="change"
            onClick={() => {
              closeLogIn();
              openSignUp();
            }}
          >
            Sign Up
          </button>
        </div>
      </Modal>
      <button className="textbut" onClick={openSignUp}>
        SIGN UP
      </button>
      <button className="iconbut" onClick={openSignUp}>
        <FiUserPlus />
      </button>
      <Modal
        className="content"
        overlayClassName="overlay"
        isOpen={signupIsOpen}
        onRequestClose={closeSignUp}
      >
        <button className="close" onClick={closeSignUp}>
          <IoIosClose />
        </button>
        <SignUp />
        <div className="butdown">
          <button
            id="change"
            onClick={() => {
              closeSignUp();
              openLogIn();
            }}
          >
            Log In
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LoggedOutLinks;
