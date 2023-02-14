import React from "react";
import CategoryAvatar from "../../../components/Avatar/CategoryAvatar";
import { CategoryBox, CategoryContainer } from "./styles/Category.style";

function Category() {
  return (
    <CategoryContainer>
      <CategoryBox>
        <CategoryAvatar />
      </CategoryBox>
    </CategoryContainer>
  );
}

export default Category;
