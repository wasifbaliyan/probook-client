import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, useTheme } from "@mui/system";
export default function Modal({
  children,
  open,
  handleClose,
  handleSave,
  saveText,
  len,
}) {
  const theme = useTheme();
  const handleClick = () => {
    handleSave();
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box textAlign="right" borderBottom="1px solid #ccc">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          disabled={len === 0}
          variant="contained"
          color="primary"
          size="small"
          sx={{
            borderRadius: theme.shape.borderRadius,
            fontSize: "12px",
          }}
          onClick={handleClick}
        >
          {saveText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
