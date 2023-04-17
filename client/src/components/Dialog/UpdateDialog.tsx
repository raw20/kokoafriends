import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DialogButton } from "../../styles/Common.style";
import { IUpdateDialogComponent } from "../../types/IProps.interface";
import getFormatDate from "../../utils/getFormatDate";
import { isOpenSnackBarVar } from "../../store/snackbar";

function UpdateDialog({
  id,
  openUpdateDialog,
  setOpenUpdateDialog,
  setIsEditClick,
  updateReviews,
  editTextValue,
  editRatingValue,
}: IUpdateDialogComponent) {
  function updateHandler() {
    updateReviews({
      variables: {
        reviewId: id,
        reviewText: editTextValue,
        reviewRating: editRatingValue,
        reviewDate: getFormatDate(new Date()),
      },
    });
    isOpenSnackBarVar(true);
    setIsEditClick(false);
    setOpenUpdateDialog(false);
  }
  function handleClose() {
    setOpenUpdateDialog(false);
  }
  return (
    <Dialog
      open={openUpdateDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">알림창</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          리뷰를 수정하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <DialogButton onClick={handleClose}>취소</DialogButton>
        <DialogButton onClick={updateHandler}>수정</DialogButton>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateDialog;
