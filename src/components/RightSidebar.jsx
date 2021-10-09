import { Search } from "@mui/icons-material";
import { Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/authSlice";
import WhoToFollow from "./WhoToFollow";

export default function RightSidebar() {
  const dispatch = useDispatch();
  const { _id } = JSON.parse(localStorage.getItem("login"));

  const { users, userStatus } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(users);
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
          {userStatus === "success" &&
            users
              .filter((user) => user._id !== _id)
              .map((item) => <WhoToFollow key={item} user={item} />)}
        </Box>
      </Box>
    </Box>
  );
}
