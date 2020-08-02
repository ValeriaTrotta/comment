import React, { Component } from "react";
import "./Modals.css";
import { IoIosMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";

class LogIn extends Component {
  state = {
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
    this.props.logIn(this.state);
  };

  render() {
    // const { authError } = this.props;
    return (
      <div className="window">
        <div className="modal_title">
          <h1>Welcome Back</h1>
          <h2>Log in to keep commenting</h2>
        </div>
        <div className="modal_body">
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
            LOG IN
          </button>
        </div>
        <div className="modal_footer">
          <h3>Don't have an account?</h3>
        </div>
        {/* <div className="center red-text">
          {authError ? <p>{authError}</p> : null}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
