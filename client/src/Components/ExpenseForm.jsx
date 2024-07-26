import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../Store/Actions/expenseActions";
import { TextField, Button, Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

const ExpenseForm = ({ expenseToEdit, onClose }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (expenseToEdit) {
      setDescription(expenseToEdit.description);
      setAmount(expenseToEdit.amount);
    }
  }, [expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseToEdit) {
      dispatch(updateExpense({ ...expenseToEdit, description, amount }));
    } else {
      dispatch(addExpense({ description, amount }));
    }
    setDescription("");
    setAmount("");
    if (onClose) onClose();
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      padding={2}
      marginY={2}
      bgcolor="#fafafa"
      borderRadius={2}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Expense Description"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          label="Amount"
          required
        />
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          <Button variant="contained" color="primary" type="submit">
            {expenseToEdit ? "Update Expense" : "Add Expense"}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ marginLeft: 1 }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

ExpenseForm.propTypes = {
  expenseToEdit: PropTypes.shape({
    description: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onClose: PropTypes.func.isRequired,
};

export default ExpenseForm;
