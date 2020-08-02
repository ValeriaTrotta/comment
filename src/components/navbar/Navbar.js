import React, { useState } from "../../../node_modules/react";
import "./Navbar.css";
import logo from "../../images/logoB.png";
import name from "../../images/nameB.png";
import Modal from "../../../node_modules/react-modal";
import SignUp from "../auth/SignUp";
import LogIn from "../auth/LogIn";
import "../../../node_modules/firebase/auth";
import { connect } from "react-redux";
import { IoIosClose } from "../../../node_modules/react-icons/io";
import { FiUserPlus } from "../../../node_modules/react-icons/fi";
import { FiUserCheck } from "../../../node_modules/react-icons/fi";

Modal.setAppElement("#root");

const Navbar = (props) => {
  // const { auth } = props.auth;

  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  // const firebase = useFirebaseApp();

  // const logout = async () => {
  //   await firebase.auth().signOut();
  // };

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
    <div className="bar">
      <div className="brand">
        <img src={logo} alt="Logo" className="logo" />
        <img src={name} alt="Name" className="name" />
      </div>
      <div className="buttons">
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
        {/* <div>
          <button
          // onClick={logout}
          >
            LOG OUT
          </button>
          <button id="fLetter">L</button>
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
