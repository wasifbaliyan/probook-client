import { Search } from "@mui/icons-material";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WhoToFollow from "./WhoToFollow";

export default function RightSidebar() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box paddingTop="10px">
        <Box
          width="100%"
          borderRadius="28px"
          border="1px solid #eee"
          sx={{
            background: "#eee",
            "&:hover": {
              background: "white",
            },
          }}
        >
          <Input
            type="text"
            inputProps={{
              style: { padding: "10px" },
            }}
            disableUnderline
            fullWidth
            placeholder="Search"
            startAdornment={
              <Search
                sx={{
                  paddingLeft: "20px",
                  color: "#777",
                }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            background: "#eee",
            borderRadius: "28px",
            padding: "10px 20px",
            margin: "1rem 0",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Who to follow
          </Typography>
          {[1, 2, 3].map((item) => (
            <WhoToFollow />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
