import React, { Component } from "react";
import "./Modals.css";
import { IoIosMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";

class SignUp extends Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="window">
        <div className="modal_title">
          <h1>Join Comment</h1>
          <h2>Sign up to start commenting</h2>
        </div>
        <div className="modal_body">
          <div
            id="inputcontainer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          >
            <i>
              <FiChevronRight />
            </i>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              placeholder="Name"
              style={{
                fontFamily: "Avenir",
              }}
            />
          </div>
          <div
            id="inputcontainer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          >
            <i>
              <FiChevronsRight />
            </i>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
              style={{
                fontFamily: "Avenir",
              }}
            />
          </div>
          <div
            id="inputcontainer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          >
            <i>
              <IoIosMail />
            </i>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              placeholder="Email"
              style={{
                fontFamily: "Avenir",
              }}
            />
          </div>
          <div
            id="inputcontainer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          >
            <i>
              <IoIosLock />
            </i>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              placeholder="Password"
              style={{
                fontFamily: "Avenir",
              }}
            />
          </div>
          <button id="submit" onClick={this.handleSubmit}>
            SIGN UP
          </button>
        </div>
        <div className="modal_footer">
          <h3>Already Registered?</h3>
        </div>
      </div>
    );
  }
}

export default SignUp;
