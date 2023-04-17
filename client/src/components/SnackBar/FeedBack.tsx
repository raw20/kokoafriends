import { Alert, Snackbar } from "@mui/material";
import React from "react";
import useFeedback from "../../services/products/hooks/custom/useFeedback";
import { isOpenSnackBarVar } from "../../store/snackbar";

function FeedBack() {
  const { isopenSnackBar, isFetchCompleted, feedBackMessage } = useFeedback();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    isOpenSnackBarVar(false);
  };

  return (
    <Snackbar
      open={isopenSnackBar}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={isFetchCompleted ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {feedBackMessage}
      </Alert>
    </Snackbar>
  );
}

export default FeedBack;
