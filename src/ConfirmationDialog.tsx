import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function ConfirmationDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ margin: 0, padding: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ConfirmationDialog = ({ open, onClose }: Props) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <ConfirmationDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        Thank you for your order!
      </ConfirmationDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Your card has been charged and your order is being processed. Please
          bring an ID to the event.
        </Typography>
        <Typography gutterBottom>Enjoy the show!</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
