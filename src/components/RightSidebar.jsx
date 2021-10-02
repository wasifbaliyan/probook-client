import { Search } from "@mui/icons-material";
import { Input } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function RightSidebar() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box width="100%">
        <Input
          type="text"
          fullWidth
          placeholder="Search"
          startAdornment={<Search />}
        />
      </Box>
    </Box>
  );
}
