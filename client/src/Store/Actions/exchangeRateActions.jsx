import axios from "axios";

export const fetchExchangeRates = () => async (dispatch) => {
  const response = await axios.get(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  dispatch({
    type: "SET_EXCHANGE_RATES",
    payload: response.data.rates,
  });
};
