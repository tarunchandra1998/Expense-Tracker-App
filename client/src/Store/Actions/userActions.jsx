import axios from "axios";
export const updateUserProfile = (profile) => async (dispatch) => {
  try {
    const response = await axios.put(
      "http://localhost:5000/api/user/profile",
      profile
    );
    dispatch({
      type: "UPDATE_USER_PROFILE",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    const response = await axios.put("http://localhost:5000/api/user", user);
    dispatch({
      type: "UPDATE_USER",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
