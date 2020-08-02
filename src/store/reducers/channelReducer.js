const initState = {};

const channelReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CHANNEL_SUCCESS":
      console.log("created channel success");
      return state;
    case "CREATE_CHANNEL_ERROR":
      console.log("create channel error");
      return state;
    default:
      return state;
  }
};

export default channelReducer;
