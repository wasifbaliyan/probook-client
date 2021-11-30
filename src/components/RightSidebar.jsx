import { Search } from "@mui/icons-material";
import { Input, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import WhoToFollow from "./WhoToFollow";
import { Link } from "react-router-dom";

export default function RightSidebar() {
  const [query, setQuery] = React.useState("");
  const { _id } = JSON.parse(localStorage.getItem("login"));

  const { users, userStatus } = useSelector((state) => state.auth);

  function queriedUsers() {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.handle.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <Box sx={{ height: "100%" }}>
      <Box paddingTop="10px">
        <Box
          width="100%"
          borderRadius="28px"
          border="1px solid #eee"
          position="relative"
          sx={{
            background: "#eee",
          }}
        >
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
          {query.length !== 0 && (
            <Box
              width="100%"
              sx={{
                backgroundColor: "white",
                border: "1px solid #eee",
                borderRadius: "28px",
                padding: "1rem 0",
                zIndex: "999",
                maxHeight: "50vh",
                overflowY: "scroll",
              }}
              position="absolute"
            >
              {query.length !== 0 && queriedUsers().length === 0 && (
                <Typography sx={{ padding: "0 1rem" }}>
                  No users found!
                </Typography>
              )}
              {queriedUsers().map((user) => (
                <Box key={user._id}>
                  <Link
                    onClick={() => setQuery("")}
                    style={{ textDecoration: "none" }}
                    to={`/profile/${user._id}`}
                  >
                    <Grid
                      sx={{
                        overflow: "hidden",
                        padding: ".2rem 1rem",
                        "&:hover": {
                          backgroundColor: "#eee",
                        },
                      }}
                      container
                      alignItems="center"
                    >
                      <Grid item sx={{ paddingRight: "12px" }}>
                        <img src="/logo.png" width="50px" alt="logo" />
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#000",
                              }}
                            >
                              {user.name}
                            </Typography>
                            <Box display="flex" alignItems="center">
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  mr: "6px",
                                  color: "#555",
                                }}
                              >
                                {user.handle}
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Link>
                </Box>
              ))}
            </Box>
          )}
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
              .slice(0, 7)
              .map((item) => <WhoToFollow key={item} user={item} />)}
        </Box>
      </Box>
    </Box>
  );
}
