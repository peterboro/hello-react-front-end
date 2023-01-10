import axios from "axios";

export const fetchGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/random_message");
      dispatch({
        type: "FETCH_GREETING",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
