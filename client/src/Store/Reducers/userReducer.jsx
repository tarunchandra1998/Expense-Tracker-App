const initialState = {
  profile: {},
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
