import {
  NewProductInner,
  NewProductContainer,
  NewProductImage,
  NewProductImageBox,
  NewProductImageBoxInner,
  NewProductBox,
} from "./styles/NewProducts.style";
import {
  PrimaryTitle,
  SecondContent,
  SecondTitle,
} from "../../../styles/Common.style";
import { IHomeChildComponentProps } from "../../../types/IProps.interface";

function NewProjuctsSlide({ data, countViews }: IHomeChildComponentProps) {
  const newProducts = data?.products.filter(
    (product) => product.products_new_status
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
      <NewProductInner>
        <PrimaryTitle>새로나온 친구들</PrimaryTitle>
        <NewProductBox>
          {newProducts?.map((product) => (
            <NewProductImageBox
              to={`/Product/${product?.products_id}`}
              key={product?.products_id}
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
        </NewProductBox>
      </NewProductInner>
    </NewProductContainer>
  );
}

export default NewProjuctsSlide;
