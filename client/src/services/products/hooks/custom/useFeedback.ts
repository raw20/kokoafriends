import { useReactiveVar } from "@apollo/client";
import {
  feedbackMessageVar,
  isFetchCompletedVar,
  isOpenSnackBarVar,
} from "../../../../store/snackbar";

function useFeedback() {
  const isopenSnackBar = useReactiveVar(isOpenSnackBarVar);
  const isFetchCompleted = useReactiveVar(isFetchCompletedVar);
  const feedBackMessage = useReactiveVar(feedbackMessageVar);

  return {
    isopenSnackBar,
    isFetchCompleted,
    feedBackMessage,
  };
}

export default useFeedback;
