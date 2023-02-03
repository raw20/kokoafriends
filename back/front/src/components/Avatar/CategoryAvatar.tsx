import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

function CategoryAvatar() {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("src/asset/json/category.json");
      const json = await response.json();
      setCategory(json);
    })();
  }, []);

  console.log(categories);
  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton sx={{ p: 0 }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/2.jpg"
          sx={{ width: 76, height: 76 }}
        />
      </IconButton>
    </Box>
  );
}

export default CategoryAvatar;
