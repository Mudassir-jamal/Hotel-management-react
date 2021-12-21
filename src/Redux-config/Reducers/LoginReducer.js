const INITIAL_STATE = {
  label: "Login Reducer Here",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DataFromLogin":
      return action.userObj;

    default:
      return state;
  }
};
export default reducer;
