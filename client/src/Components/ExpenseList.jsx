import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../Store/Actions/expenseActions";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import ExpenseForm from "./ExpenseForm";

const ExpenseList = () => {
  const [editingExpense, setEditingExpense] = React.useState(null);
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <Box
      component={Paper}
      elevation={3}
      padding={2}
      marginY={2}
      bgcolor="#ffffff"
      borderRadius={2}
    >
      {editingExpense && (
        <ExpenseForm
          expenseToEdit={editingExpense}
          onClose={() => setEditingExpense(null)}
        />
      )}
      <List>
        {expenses.map((expense) => (
          <ListItem
            key={expense.id}
            secondaryAction={
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditingExpense(expense)}
                  startIcon={<Edit />}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteExpense(expense.id))}
                  startIcon={<Delete />}
                  sx={{ marginLeft: 1 }}
                >
                  Delete
                </Button>
              </>
            }
          >
            <ListItemText
              primary={expense.description}
              secondary={`$${expense.amount}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExpenseList;
