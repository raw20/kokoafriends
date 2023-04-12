import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { Category } from "../../types/Category.interface";
import Typography from "@mui/material/Typography";
import { CategoryAvatarBox } from "../../pages/Main/Home/styles/Category.style";

function CategoryAvatar() {
  const [categories, setCategory] = useState<Category[]>([]);
  const categoryData = "/json/category.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(categoryData);
      const json = await response.json();
      setCategory(json);
    })();
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {categories.map((category) => (
        <IconButton sx={{ p: 0, mr: 2 }} key={category.id}>
          <CategoryAvatarBox>
            <Avatar
              alt={category.name}
              src={require(`../../asset/image/category/${category.img}`)}
              sx={{ width: 76, height: 76 }}
            />
            <Typography variant="subtitle2" gutterBottom>
              {category.name}
            </Typography>
          </CategoryAvatarBox>
        </IconButton>
      ))}
    </Box>
  );
}

export default CategoryAvatar;
