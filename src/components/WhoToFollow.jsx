import { Typography, useTheme } from "@mui/material";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followAccount, followingAccount } from "../api";
import { getFollowers, getFollowings } from "../redux/followSlice";

export default function WhoToFollow({ user }) {
  const theme = useTheme();
  const { _id } = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();

  const handleFollow = async () => {
    const responseFollow = await followAccount({
      userId: user._id,
      followerId: _id,
    });
    const responseFlwing = await followingAccount({
      followingId: user._id,
      userId: _id,
    });
    if (responseFollow) {
      dispatch(getFollowers(_id));
    }
    if (responseFlwing) {
      dispatch(getFollowings(_id));
    }
  };
  return (
    <Box margin="1rem 0">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Grid container>
            <Link to={`/profile/${user._id}`}>
              <Grid item sx={{ paddingRight: "12px" }}>
                <img src="/logo.png" width="50px" alt="logo" />
              </Grid>
            </Link>
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                    {user.name}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={{ fontSize: "14px", mr: "6px", color: "#555" }}
                    >
                      {user.handle}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontSize: "12px",
                        background: "#ccc",
                        borderRadius: theme.shape.borderRadius,
                        padding: "0 6px",
                        color: "#777",
                      }}
                    >
                      follows you
                    </Typography> */}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={handleFollow}
            size="small"
            sx={{
              borderRadius: theme.shape.borderRadius,
              textTransform: "capitalize",
              ml: "12px",
              background: "black",
              "&:hover": {
                background: "#333",
              },
            }}
            variant="contained"
          >
            Follow
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
