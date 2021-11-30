import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import format from "date-fns/format";

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import IosShareIcon from "@mui/icons-material/IosShare";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getPostDetails } from "../redux/postSlice";
import { addComment, deletePost, likeOrDislikePost } from "../api";
import Comment from "../components/Comment";

export default function PostDetails() {
  const [commentText, setCommentText] = useState("");
  const theme = useTheme();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { status, comments, commentStatus, postDetails } = useSelector(
    (state) => state.post
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { _id } = JSON.parse(localStorage.getItem("login"));
  const handleDeletePost = async () => {
    const response = await deletePost({ id: postDetails._id });
    if (response) {
      history.push("/");
    }
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const response = await likeOrDislikePost({ id: postDetails._id });
    if (response) {
      dispatch(getPostDetails(id));
      dispatch(getComments(id));
    }
  };

  useEffect(() => {
    dispatch(getPostDetails(id));
    dispatch(getComments(id));
  }, [dispatch, id]);

  const handleAddComment = async () => {
    const response = await addComment({ id, text: commentText });
    if (response) {
      dispatch(getComments(id));
      setCommentText("");
    }
  };

  return (
    <Box>
      <Box borderBottom="1px solid #ccc" padding="8px 20px">
        <Grid container alignItems="center">
          <Grid item sx={{ mr: "10px" }}>
            <IconButton onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6">Post</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box height="92vh" sx={{ overflowY: "scroll" }}>
        <Box textAlign="center" marginTop="1rem">
          {status === "loading" && (
            <CircularProgress size={20} color="primary" />
          )}
        </Box>
        {status === "success" && (
          <Box padding="0 20px">
            <Box>
              <Grid container alignItems="center">
                <Grid item>
                  <img src="/logo.png" alt="lgogo" width="60px" />
                </Grid>
                <Grid item flexGrow="1">
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                        {postDetails.author && postDetails.author.name}
                      </Typography>
                      <Typography sx={{ fontSize: "15px", color: "#555" }}>
                        @{postDetails.author && postDetails.author.handle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {status === "success" &&
                        postDetails.author &&
                        _id === postDetails.author._id && (
                          <IconButton
                            aria-expanded={open ? "true" : undefined}
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick(e);
                            }}
                          >
                            <MoreHorizIcon />
                          </IconButton>
                        )}

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeletePost();
                          }}
                        >
                          Delete Post
                        </MenuItem>
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "20px" }}>
                {postDetails.text}
              </Typography>
            </Box>
            <Box display="flex" padding="1rem 0" borderBottom="1px solid #ccc">
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                {postDetails &&
                  postDetails.createdAt &&
                  format(new Date(postDetails.createdAt), "HH:mm a")}
              </Typography>
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                .
              </Typography>
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                {postDetails &&
                  postDetails.createdAt &&
                  format(new Date(postDetails.createdAt), "MMM dd yyyy")}
              </Typography>
            </Box>
            <Box display="flex" padding="1rem 0" borderBottom="1px solid #ccc">
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                <strong>{postDetails.likes && postDetails.likes.length}</strong>{" "}
                Likes
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-around"
              padding=".5rem 0"
              borderBottom="1px solid #ccc"
            >
              <IconButton size="small">
                <ChatBubbleOutlineIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <SyncIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={handleLike} size="small">
                {postDetails.isLiked ? (
                  <FavoriteIcon fontSize="small" />
                ) : (
                  <FavoriteBorderIcon fontSize="small" />
                )}
              </IconButton>
              <IconButton size="small">
                <IosShareIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box>
              <Grid container>
                <Grid item>
                  <img src="/logo.png" alt="logo" width="60px" />
                </Grid>
                <Grid item flexGrow="1">
                  <Box padding=".5rem 0">
                    <Input
                      onChange={(e) => setCommentText(e.target.value)}
                      value={commentText}
                      multiline
                      rows="2"
                      disableUnderline
                      type="text"
                      placeholder="Post your comment"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                  <Box textAlign="right" paddingBottom=".5rem">
                    <Button
                      disabled={commentText.length === 0}
                      onClick={handleAddComment}
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        borderRadius: theme.shape.borderRadius,
                        fontSize: "12px",
                      }}
                    >
                      Comment
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Box textAlign="center" marginTop="1rem">
                {commentStatus === "loading" && (
                  <CircularProgress size={20} color="primary" />
                )}
              </Box>
              {commentStatus === "success" &&
                comments.map((comment) => (
                  <Comment key={comment._id} comment={comment} />
                ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
