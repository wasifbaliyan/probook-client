import { Button, TextField } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";

export default function LoginForm() {
  const theme = useTheme();
  return (
    <form>
      <TextField
        sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
        variant="outlined"
        label="Enter Email"
        type="email"
      />
      <TextField
        sx={{ width: "100%", margin: "1rem 0", bgcolor: "#fff" }}
        variant="outlined"
        label="Enter Password"
        type="password"
      />
      <Button
        sx={{
          width: "100%",
          margin: "1.5rem 0",
          padding: "12px 0",
          borderRadius: theme.shape.borderRadius,
        }}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </form>
  );
}
