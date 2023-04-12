import { IProductComponent } from "../types/IProps.interface";

function getCreatedIndex(data: IProductComponent) {
  let index =
    data?.review
      .map((ele) => ele.review_id)
      .reduce(function (a, b) {
        return Math.max(a, b);
      }, 0) || 0;

  return index;
}

export default getCreatedIndex;
