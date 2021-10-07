import { Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";
import { parseDate } from "../utils/parseDate";
import { Link } from "react-router-dom";
import { likeOrDislikePost } from "../api";
import { useDispatch } from "react-redux";
import { updateLike } from "../redux/postSlice";

export default function Post({ post }) {
  const dispatch = useDispatch();

  const handleLike = async (e) => {
    e.preventDefault();
    dispatch(updateLike({ id: post._id }));
    const response = await likeOrDislikePost({ id: post._id });
    if (response.message !== "Post updated successfully.") {
      dispatch(updateLike({ id: post._id }));
    }
  };
  return (
    <Link
      to={`/posts/${post._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Box
        padding="1rem"
        sx={{
          "&:hover": {
            backgroundColor: "#eee",
          },
        }}
      >
        <Grid container flexWrap="nowrap">
          <Grid item sx={{ paddingRight: "1rem" }}>
            <img src="/logo.png" alt="lgoog" width="50px" />
          </Grid>
          <Grid item flexGrow="1">
            <Box>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                flexWrap="nowrap"
              >
                <Grid item>
                  <Box display="flex">
                    <Typography
                      sx={{ fontSize: "16px", fontWeight: 500, mr: "6px" }}
                    >
                      {post.author.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                    >
                      @{post.author.handle}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                    >
                      .
                    </Typography>
                    <Typography
                      sx={{ fontSize: "15px", mr: "6px", color: "#555" }}
                    >
                      {parseDate(post.createdAt)}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "15px", color: "#555" }}>
                      {post.text}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Box
                display="flex"
                justifyContent="space-between"
                marginRight="5rem"
                marginTop=".8rem"
              >
                <IconButton size="small">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <SyncIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleLike} size="small">
                  {post.isLiked ? (
                    <FavoriteIcon fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon fontSize="small" />
                  )}
                </IconButton>
                <IconButton size="small">
                  <IosShareIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
}
