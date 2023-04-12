import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { IFeedbackProps } from "../../types/IProps.interface";

function FeedBack({
  openSnackBar,
  setOpenSnackBar,
  feedBackMessage,
}: IFeedbackProps) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  return (
    <Snackbar open={openSnackBar} autoHideDuration={5000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={
          feedBackMessage === "리뷰 등록이 완료되었습니다."
            ? "success"
            : "error"
        }
        sx={{ width: "100%" }}
      >
        {feedBackMessage}
      </Alert>
    </Snackbar>
  );
}

export default FeedBack;
