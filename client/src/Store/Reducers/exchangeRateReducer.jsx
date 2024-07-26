const initialState = {};

const exchangeRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EXCHANGE_RATES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default exchangeRateReducer;
