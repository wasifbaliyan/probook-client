import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/system";

export default function Layout({ children }) {
  const theme = useTheme();
  return (
    <Box sx={{ maxWidth: theme.breakpoints.values.lg, margin: "0 auto" }}>
      <Grid container>
        <Grid item xs={2}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              height: "100vh",
              margin: "0 1rem",
              borderLeft: "1px solid #ccc",
              borderRight: "1px solid #ccc",
            }}
          >
            {children}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <RightSidebar />
        </Grid>
      </Grid>
    </Box>
  );
}
