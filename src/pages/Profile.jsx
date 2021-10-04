import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Post from "../components/Post";
export default function Profile() {
  const theme = useTheme();
  return (
    <Box>
      <Box borderBottom="1px solid #ccc" padding="8px 20px">
        <Grid container alignItems="center">
          <Grid item sx={{ mr: "10px" }}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6">Wasif Baliyan</Typography>
            <Typography sx={{ fontSize: "12px", color: "#555" }}>
              420 Posts
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box height="90vh" sx={{ overflowY: "scroll" }}>
        <Box position="relative">
          <img
            width="100%"
            src="https://res.cloudinary.com/dnboldv5r/image/upload/v1632958083/probook/i_Ocean-Quote-Twitter-_20Header_full_ap6zgw.jpg"
            alt="background"
          />
          <Box
            sx={{
              position: "absolute",
              top: 120,
              left: 15,
              background: "#eee",
              borderRadius: "50%",
            }}
          >
            <img
              width="150px"
              src="https://res.cloudinary.com/dnboldv5r/image/upload/v1632958381/probook/avatar_ism2fu.png"
              alt="profile"
            />
          </Box>
        </Box>
        <Box textAlign="right" padding="10px 20px">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
          <IconButton>
            <MailOutlineIcon />
          </IconButton>
          <Button
            size="small"
            sx={{
              borderRadius: theme.shape.borderRadius,
              textTransform: "capitalize",
              padding: "6px 20px",
              background: "black",
              "&:hover": {
                background: "#333",
              },
            }}
            variant="contained"
          >
            Follow
          </Button>
        </Box>
        <Box padding="10px 20px">
          <Typography variant="h6" sx={{ fontWeight: "500" }}>
            Wasif Baliyan
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#555" }}>
            @wasifbaliyan
          </Typography>
          <Typography fontSize="16px" color="#333" padding="10px 0">
            Software Engineer Devkraft, Frontend Enthusiast! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Ad, a!
          </Typography>
          <Box display="flex" alignItems="center" padding="6px 0">
            <Box display="flex">
              <LocationOnIcon htmlColor="#555" />
              <Typography sx={{ ml: "6px", color: "#555" }}>India</Typography>
            </Box>
            <Box display="flex" marginLeft="1rem">
              <InsertLinkIcon htmlColor="#555" />
              <Link
                sx={{ textDecoration: "none", marginLeft: "6px" }}
                href="https://wasifbaliyan.com/"
              >
                https://wasifbaliyan.com
              </Link>
            </Box>
            <Box display="flex" marginLeft="1rem">
              <DateRangeIcon htmlColor="#555" />
              <Typography sx={{ ml: "6px", color: "#555" }}>
                Jan, 2019
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Typography color="#555" marginRight="1rem">
              <strong style={{ color: "black" }}>400</strong> Following
            </Typography>
            <Typography color="#555" marginRight="1rem">
              <strong style={{ color: "black" }}>8990</strong> Followers
            </Typography>
          </Box>
        </Box>
        <Box borderBottom="1px solid #ccc">
          <Typography
            display="inline-block"
            variant="caption"
            fontSize="16px"
            marginX="1rem"
            padding="6px 0"
            fontWeight="500"
            borderBottom={`4px solid ${theme.palette.primary.main}`}
          >
            Posts
          </Typography>
        </Box>
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </Box>
  );
}
