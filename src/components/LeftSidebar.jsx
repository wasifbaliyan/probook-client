import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Button, useTheme } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function LeftSidebar() {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Box>
        <img src="/logo.png" alt="logo" />
      </Box>
      <List>
        {[
          {
            title: "Home",
            icon: <HomeIcon fontSize="medium" color="action" />,
          },
          {
            title: "Explore",
            icon: <TagIcon fontSize="medium" color="action" />,
          },
          {
            title: "Notifications",
            icon: <NotificationsNoneIcon fontSize="medium" color="action" />,
          },
          {
            title: "Messages",
            icon: <MailOutlineIcon fontSize="medium" color="action" />,
          },
          {
            title: "Bookmarks",
            icon: <BookmarkIcon fontSize="medium" color="action" />,
          },
          {
            title: "Lists",
            icon: <ListAltIcon fontSize="medium" color="action" />,
          },
          {
            title: "Profile",
            icon: <PersonOutlineIcon fontSize="medium" color="action" />,
          },
          {
            title: "More",
            icon: <MoreHorizIcon fontSize="medium" color="action" />,
          },
        ].map((item, index) => (
          <ListItem
            key={index}
            button
            sx={{ borderRadius: "28px", margin: ".5rem 0" }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{
          borderRadius: "28px",
          padding: "10px",
          textTransform: "capitalize",
        }}
      >
        Tweet
      </Button>
    </Box>
  );
}
