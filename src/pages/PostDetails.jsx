import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Input,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import IosShareIcon from "@mui/icons-material/IosShare";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails } from "../redux/postSlice";

export default function PostDetails() {
  const theme = useTheme();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { status, post } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

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
                        {post.author.name}
                      </Typography>
                      <Typography sx={{ fontSize: "15px", color: "#555" }}>
                        @{post.author.handle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "20px" }}>{post.text}</Typography>
            </Box>
            <Box display="flex" padding="1rem 0" borderBottom="1px solid #ccc">
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                12:21 AM
              </Typography>
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                .
              </Typography>
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                Oct 05, 2021
              </Typography>
            </Box>
            <Box display="flex" padding="1rem 0" borderBottom="1px solid #ccc">
              <Typography sx={{ fontSize: "14px", mr: "6px", color: "#555" }}>
                <strong>{post.likesCount}</strong> Likes
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
              <IconButton size="small">
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
            <Box>
              <Grid container>
                <Grid item>
                  <img src="/logo.png" alt="lgogo" width="60px" />
                </Grid>
                <Grid item flexGrow="1">
                  <Box padding=".5rem 0">
                    <Input
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
            </Box>
          </Box>
        )}
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </Box>
    </Box>
  );
}
