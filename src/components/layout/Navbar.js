import React from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { connect } from "react-redux";
import logo from "../../images/logoB.png";
import name from "../../images/nameB.png";
import "./Navbar.css";

const Navbar = (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />;
  return (
    <nav className="bar">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <img src={name} alt="Name" className="name" />
      </div>
      <div className="buttons">{links}</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
