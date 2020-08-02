export const createChannel = (channel) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("channels")
      .add({
        ...channel,
        authorName: "Val",
        authorLastName: "Trotta",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_CHANNEL_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_CHANNEL_ERROR" }, err);
      });
  };
};
