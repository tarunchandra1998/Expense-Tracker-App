import { Provider } from "react-redux";
import Store from "./Store/Store";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import UserProfile from "./Components/UserProfile";
import ExchangeRates from "./Components/ExchangeRates";
import { Container, CssBaseline, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          maxWidth="md"
          style={{ backgroundColor: "#ffffff", padding: "20px" }}
        >
          <Box textAlign="center" marginY={4}>
            <Typography variant="h2" component="h1" gutterBottom>
              Expense Tracker
            </Typography>
          </Box>
          <UserProfile />
          <Box marginY={4}>
            <ExpenseForm />
          </Box>
          <Box marginY={4}>
            <ExpenseList />
          </Box>
          <Box marginY={4}>
            <ExchangeRates />
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
