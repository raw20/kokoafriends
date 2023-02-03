import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import { Category } from "../../types/Category.interface";

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

  console.log(categories);
  return (
    <Box sx={{ flexGrow: 0 }}>
      {categories.map((category) => (
        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt={category.name}
            src={`../../asset/image/category/${category.img}`}
            sx={{ width: 76, height: 76 }}
          />
        </IconButton>
      ))}
    </Box>
  );
}

export default CategoryAvatar;
