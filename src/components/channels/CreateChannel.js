import React, { Component } from "react";

import { MdTextFields } from "react-icons/md";
import { GrTextAlignFull } from "react-icons/gr";
import { connect } from "react-redux";
import { createChannel } from "../../store/actions/channelActions";

class CreateChannel extends Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createChannel(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <div
        className="window"
        style={{
          marginTop: "60px",
        }}
      >
        <div className="modal_title">
          <h1>New Channel</h1>
          <h2>Share your ideas</h2>
        </div>
        <div className="modal_body">
          <div
            id="inputcontainer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          >
            <i>
              <MdTextFields />
            </i>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              placeholder="Title"
              style={{
                fontFamily: "Avenir",
              }}
            />
          </div>
          <div
            id="inputcontainer"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            style={{
              alignItems: "start",
            }}
          >
            <i>
              <GrTextAlignFull />
            </i>
            <textarea
              id="description"
              onChange={this.handleChange}
              placeholder="Description"
              style={{
                fontFamily: "Avenir",
              }}
            ></textarea>
          </div>
          <button id="submit" onClick={this.handleSubmit}>
            CREATE
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChannel: (channel) => dispatch(createChannel(channel)),
  };
};

export default connect(null, mapDispatchToProps)(CreateChannel);
