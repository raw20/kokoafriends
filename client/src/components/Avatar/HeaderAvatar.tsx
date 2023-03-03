import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { LOGOUT_REDIRECT_URI } from "../../utils/oAuth";

interface ISettingItem {
  id: string;
  name: string;
  path: string;
}

function HeaderAvatar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const menuItem = [
    {
      id: "1",
      name: "마이페이지",
      path: "/mypage",
    },
    {
      id: "2",
      name: "장바구니",
      path: "/cart",
    },
    {
      id: "3",
      name: "배송조회",
      path: "/buy-list",
    },
  ];
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const kakaoLogoutHandler = () => {};
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuItem.map((setting: ISettingItem) => (
          <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={kakaoLogoutHandler}>
          <a href={LOGOUT_REDIRECT_URI}>
            <Typography textAlign="center">로그아웃</Typography>
          </a>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default HeaderAvatar;
