import { useReactiveVar } from "@apollo/client";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { isOpenDeleteCartDialogVar } from "../../store/dialog";
import { DialogButton } from "../../styles/Common.style";
import { feedbackMessageVar, isOpenSnackBarVar } from "../../store/snackbar";
import { deleteCart } from "../../store/cart";

function DeleteCartDialog({ id }: { id: number | number[] }) {
  const isOpenDialog = useReactiveVar(isOpenDeleteCartDialogVar);

  function deleteHandler() {
    deleteCart(id);
    isOpenSnackBarVar(true);
    isOpenDeleteCartDialogVar(false);
    feedbackMessageVar("장바구니에 상품을 제거하였습니다.");
  }

  function handleClose() {
    isOpenDeleteCartDialogVar(false);
  }

  return (
    <Dialog
      open={isOpenDialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">선택 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          장바구니에서 선택된 상품을 제거하시겠습니까??
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <DialogButton onClick={handleClose}>취소</DialogButton>
        <DialogButton onClick={deleteHandler}>삭제</DialogButton>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteCartDialog;
