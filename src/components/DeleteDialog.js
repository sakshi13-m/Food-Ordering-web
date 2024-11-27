import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  makeStyles
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import bookingAction from "../sdk/action/payment";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDialog-paperWidthSm": {
      width: "20%",
      textAlign: "center"
    },
    "& .MuiDialogActions-root": {
      flexDirection: "column"
    }
  }
}));

const AlertDialog = ({ open, setOpen }) => {
  const Styles = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(bookingAction.setCartSummary([]));
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className={Styles.root}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to clear the cart?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
