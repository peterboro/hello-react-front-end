const initialState = {
  greeting: '',
};

export default function greetingReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_GREETING':
      return { ...state, greeting: action.payload.text };
    default:
      return state;
  }
}
