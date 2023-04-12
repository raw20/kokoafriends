import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { IDeleteDialogComponent } from "../../types/IProps.interface";
import { DialogButton } from "../../styles/Common.style";

function DeleteDialog({
  id,
  openDeleteDialog,
  setOpenSnackBar,
  setOpenDeleteDialog,
  setIsEditClick,
  deleteReviews,
}: IDeleteDialogComponent) {
  function deleteHandler() {
    deleteReviews({
      variables: {
        deleteReviewId: id,
      },
    });
    setOpenSnackBar(true);
    setIsEditClick(false);
    setOpenDeleteDialog(false);
  }

  function handleClose() {
    setOpenDeleteDialog(false);
  }

  return (
    <Dialog
      open={openDeleteDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">알림창</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          리뷰를 삭제하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <DialogButton onClick={handleClose}>취소</DialogButton>
        <DialogButton onClick={deleteHandler}>삭제</DialogButton>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
