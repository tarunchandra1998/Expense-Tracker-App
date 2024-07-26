import express from "express";

const expenseRoutes = (expenses) => {
  const router = express.Router();
  // Get all expenses
  router.get("/", (req, res) => {
    res.json(expenses);
  });

  // Add a new expense
  router.post("/", (req, res) => {
    const expense = {
      id: expenses.length + 1,
      description: req.body.description,
      amount: req.body.amount,
      date: req.body.date,
    };
    expenses.push(expense);
    res.status(201).json(expense);
  });

  // Edit an expense
  router.put("/:id", (req, res) => {
    const expense = expenses.find((e) => e.id === parseInt(req.params.id));
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    expense.name = req.body.name || expense.name;
    expense.description = req.body.description || expense.description;
    expense.amount = req.body.amount || expense.amount;
    expense.date = req.body.date || expense.date;

    res.json(expense);
  });

  // Delete an expense
  router.delete("/:id", (req, res) => {
    console.log();
    const index = expenses.findIndex((e) => e.id === parseInt(req.params.id));
    if (index === -1)
      return res.status(404).json({ message: "Expense not found" });

    expenses.splice(index, 1);
    res.json({ message: "Expense deleted" });
  });

  return router;
};

export default expenseRoutes;
