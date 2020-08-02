import React from "react";
import logo from "../../images/logoB.png";

const ChannelSummary = ({ channel }) => {
  return (
    <div>
      <div
        className="max-w-sm w-full lg:max-w-full lg:flex"
        style={{
          width: "90%",
          margin: "auto",
          marginBottom: "2rem",
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
    </div>
  );
};

export default ChannelSummary;
