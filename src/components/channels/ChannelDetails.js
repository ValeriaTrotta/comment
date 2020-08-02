import React from "react";
import "./ChannelDetails.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import logo from "../../images/logoB.png";
import addcom from "../../images/ayc.png";

const ChannelDetails = (props) => {
  const { channel } = props;
  if (channel) {
    return (
      <div className="container">
        <div
          className="max-w-sm w-full lg:max-w-full lg:flex"
          style={{
            width: "90%",
          }}
        >
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img src={logo} alt="Logo" />
          </div>
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            style={{
              width: "100%",
            }}
          >
            <div className="mb-8">
              <div
                className="text-gray-800 font-bold text-xl mb-2"
                style={{
                  fontFamily: "Avenir",
                  textTransform: "capitalize",
                }}
              >
                {channel.title}
              </div>
              <p
                className="text-gray-600 text-base"
                style={{
                  fontFamily: "Avenir",
                }}
              >
                {channel.description}
              </p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={logo}
                alt="Logo"
              />
              <div className="text-sm">
                <p
                  className="text-gray-900 leading-none"
                  style={{
                    fontFamily: "Avenir",
                  }}
                >
                  {channel.authorName}
                  {channel.authorLastName}
                </p>
                <p
                  className="text-gray-500"
                  style={{
                    fontFamily: "Avenir",
                  }}
                >
                  Date
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ban">
          <img src={addcom} alt="addcom" />
        </div>
        <div
          className="texthere"
          style={{
            height: "min-content",
            width: "fit-content",
          }}
        >
          <div
            class="flex mx-auto items-center justify-center shadow-lg mt-56 mx-8 mb-4 max-w-lg"
            style={{
              margin: "0",
              width: "fit-content",
            }}
          >
            <form
              id="forma"
              class="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-full px-3 mb-2 mt-2">
                  <textarea
                    class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Type Here"
                    style={{
                      fontFamily: "Avenir",
                    }}
                    required
                  ></textarea>
                </div>
                <div class="w-full md:w-full flex items-start md:w-full px-3">
                  <div class="-mr-1">
                    <input
                      type="submit"
                      id="postcomment"
                      class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                      value="Post Comment"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const channels = state.firestore.data.channels;
  const channel = channels ? channels[id] : null;
  return {
    channel: channel,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "channels",
    },
  ])
)(ChannelDetails);
