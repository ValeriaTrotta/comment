import React from "react";
import ChannelSummary from "./ChannelSummary";
import { Link } from "react-router-dom";

const ChannelList = ({ channels }) => {
  return (
    <div className="channel-list section">
      {channels &&
        channels.map((channel) => {
          return (
            <Link to={"/channel/" + channel.id} key={channel.id}>
              <ChannelSummary channel={channel} />
            </Link>
          );
        })}
    </div>
  );
};

export default ChannelList;
