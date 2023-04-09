import {
  NewProductBox,
  NewProductContainer,
  NewProductImage,
  NewProductImageBox,
  NewProductImageBoxInner,
  NewProductImageSlider,
} from "./styles/NewProductSlice.style";
import {
  PrimaryTitle,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { IHomeChildComponentProps } from "../../../types/IProps.interface";

function NewProjuctsSlide({ data, countViews }: IHomeChildComponentProps) {
  const newProducts = data?.products.filter(
    (product) => product.products_id > 55000
  );
  function countViewHandler(id: number) {
    countViews({
      variables: {
        countViewsId: Number(id),
      },
    });
  }
  return (
    <NewProductContainer>
      <NewProductBox>
        <PrimaryTitle>새로나온 친구들</PrimaryTitle>
        <NewProductImageSlider>
          {newProducts?.map((product, index) => (
            <NewProductImageBox
              to={`/bestProduct/${product?.products_id}`}
              key={index}
              onClick={() => {
                countViewHandler(product?.products_id);
              }}
            >
              <NewProductImageBoxInner>
                <NewProductImage src={product?.products_slideImg} />
                <SecondContent> {product?.products_name}</SecondContent>
                <SecondTitle>{product?.products_price}원</SecondTitle>
              </NewProductImageBoxInner>
            </NewProductImageBox>
          ))}
        </NewProductImageSlider>
      </NewProductBox>
    </NewProductContainer>
  );
}

export default NewProjuctsSlide;
