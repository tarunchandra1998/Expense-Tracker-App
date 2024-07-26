import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import expenseRoutes from "./routes/expenses.js";
import userRoutes from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
const expenses = [];
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "https://via.placeholder.com/150",
};

// Routes
app.use("/api/expenses", expenseRoutes(expenses));
app.use("/api/user", userRoutes(user));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
