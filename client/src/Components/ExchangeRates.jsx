import { useEffect, useState } from "react";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import axios from "axios";

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setRates(response.data.rates);
      } catch (err) {
        setError("Failed to fetch exchange rates");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box
      component={Paper}
      elevation={3}
      padding={2}
      marginY={2}
      bgcolor="#ffffff"
      borderRadius={2}
    >
      <Typography variant="h6" gutterBottom>
        Exchange Rates
      </Typography>
      <Box>
        {Object.entries(rates).map(([currency, rate]) => (
          <Box key={currency} marginBottom={1}>
            <Typography variant="body1">
              {currency}: {rate.toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExchangeRates;
