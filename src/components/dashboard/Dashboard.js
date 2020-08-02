import React, { Component } from "react";
import ChannelList from "../channels/ChannelList";
import "./Dashboard.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import topc from "../../images/topcha.png";

class Dashboard extends Component {
  render() {
    const { channels } = this.props;
    return (
      <div className="containerdash">
        <div className="title">
          <img src={topc} alt="topc" />
        </div>
        <div className="topcha">
          <ChannelList channels={channels} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    channels: state.firestore.ordered.channels,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "channels" }])
)(Dashboard);
