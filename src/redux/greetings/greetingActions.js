/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/random_message');
    dispatch({
      type: 'FETCH_GREETING',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
