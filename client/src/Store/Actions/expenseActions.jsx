import axios from "axios";
export const fetchExpenses = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5000/api/expenses");
  dispatch({ type: "FETCH_EXPENSES", payload: response.data });
};

export const addExpense = (expense) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:5000/api/expenses",
    expense
  );
  dispatch({ type: "ADD_EXPENSE", payload: response.data });
};

export const deleteExpense = (id) => {
  return {
    type: "DELETE_EXPENSE",
    payload: id,
  };
};

export const updateExpense = (expense) => ({
  type: "UPDATE_EXPENSE",
  payload: expense,
});
