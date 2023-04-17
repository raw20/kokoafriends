import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { IDeleteDialogComponent } from "../../types/IProps.interface";
import { DialogButton } from "../../styles/Common.style";
import { isOpenSnackBarVar } from "../../store/snackbar";
import { useReactiveVar } from "@apollo/client";
import { isOpenDeleteReviewDialogVar } from "../../store/dialog";

function DeleteReviewDialog({
  id,
  setIsEditClick,
  deleteReviews,
}: IDeleteDialogComponent) {
  const isOpenDialog = useReactiveVar(isOpenDeleteReviewDialogVar);

  function deleteHandler() {
    deleteReviews({
      variables: {
        deleteReviewId: id,
      },
    });
    isOpenSnackBarVar(true);
    setIsEditClick(false);
    isOpenDeleteReviewDialogVar(false);
  }

  function handleClose() {
    isOpenDeleteReviewDialogVar(false);
  }

  return (
    <Dialog
      open={isOpenDialog}
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

export default DeleteReviewDialog;
