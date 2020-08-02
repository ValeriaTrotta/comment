import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/authActions";

const LoggedInLinks = (props) => {
  return (
    <div>
      <button onClick={props.logOut}>LOG OUT</button>
      <button id="fLetter">VT</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    slogOut: () => dispatch(logOut()),
  };
};

export default connect(null, mapDispatchToProps)(LoggedInLinks);
