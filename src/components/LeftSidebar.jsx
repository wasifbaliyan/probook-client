import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  Button,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { logout } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function LeftSidebar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { _id } = JSON.parse(localStorage.getItem("login"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ height: "100vh", maxWidth: "100%" }}>
      <Box textAlign="center">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "inherit",
          }}
        >
          <img src="/logo.png" alt="logo" width="50px" />
        </NavLink>
      </Box>
      <List>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "inherit",
          }}
        >
          <ListItem
            button
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <HomeIcon fontSize="medium" color="action" />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: theme.palette.action.active,
                }}
                primary="Home"
              />
            </Hidden>
          </ListItem>
        </NavLink>

        <ListItem
          button
          sx={{
            borderRadius: "28px",
            margin: ".5rem 0",
          }}
        >
          <ListItemIcon>
            <TagIcon fontSize="medium" color="action" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary="Explore"
            />
          </Hidden>
        </ListItem>
        <ListItem
          button
          sx={{
            borderRadius: "28px",
            margin: ".5rem 0",
          }}
        >
          <ListItemIcon>
            <NotificationsNoneIcon fontSize="medium" color="action" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary="Notifications"
            />
          </Hidden>
        </ListItem>
        <ListItem
          button
          sx={{
            borderRadius: "28px",
            margin: ".5rem 0",
          }}
        >
          <ListItemIcon>
            <MailOutlineIcon fontSize="medium" color="action" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary="Messages"
            />
          </Hidden>
        </ListItem>
        <ListItem
          button
          sx={{
            borderRadius: "28px",
            margin: ".5rem 0",
          }}
        >
          <ListItemIcon>
            <BookmarkIcon fontSize="medium" color="action" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary="Bookmarks"
            />
          </Hidden>
        </ListItem>
        <ListItem
          button
          sx={{
            borderRadius: "28px",
            margin: ".5rem 0",
          }}
        >
          <ListItemIcon>
            <ListAltIcon fontSize="medium" color="action" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary="Lists"
            />
          </Hidden>
        </ListItem>
        <NavLink
          to={`/profile/${_id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
            backgroundColor: "inherit",
          }}
        >
          <ListItem
            button
            sx={{
              borderRadius: "28px",
              margin: ".5rem 0",
            }}
          >
            <ListItemIcon>
              <PersonOutlineIcon fontSize="medium" color="action" />
            </ListItemIcon>
            <Hidden lgDown>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "18px",
                  color: theme.palette.action.active,
                }}
                primary="Profile"
              />
            </Hidden>
          </ListItem>
        </NavLink>
        <ListItem
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          button
          sx={{
            borderRadius: "28px",
            margin: ".5rem 0",
          }}
        >
          <ListItemIcon>
            <MoreHorizIcon fontSize="medium" color="action" />
          </ListItemIcon>
          <Hidden lgDown>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: theme.palette.action.active,
              }}
              primary="More"
            />
          </Hidden>
        </ListItem>
      </List>
      <Hidden lgDown>
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
      </Hidden>
      <Hidden lgUp>
        <IconButton
          variant="contained"
          color="primary"
          style={{
            borderRadius: "28px",
            padding: "0 15px",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Hidden>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(logout());
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
