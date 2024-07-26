import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import expenseReducer from "./Reducers/expenseReducer";
import userReducer from "./Reducers/userReducer";
import exchangeRateReducer from "./Reducers/exchangeRateReducer";

const rootReducer = combineReducers({
  expenses: expenseReducer,
  user: userReducer,
  rates: exchangeRateReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
