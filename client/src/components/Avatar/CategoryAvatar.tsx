import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CategoryAvatarBox } from "../../pages/Main/Home/styles/Category.style";
import { CHARACTER_CATEGORY_MENU } from "../../constant/category";
import { SEARCH_VALUE } from "../../constant/storageKey";
import { searchValueVar } from "../../store/search";
import { useNavigate } from "react-router-dom";

function CategoryAvatar() {
  const navigator = useNavigate();

  function categoryClickHandler(name: string) {
    navigator("/search");
    localStorage.setItem(SEARCH_VALUE, name);
    searchValueVar(name);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {CHARACTER_CATEGORY_MENU.map((category) => (
        <IconButton sx={{ p: 0, mr: 2 }} key={category.id}>
          <CategoryAvatarBox>
            <Avatar
              alt={category.name}
              src={require(`../../asset/image/category/${category.img}`)}
              sx={{ width: 76, height: 76 }}
              onClick={() => categoryClickHandler(category.name)}
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
