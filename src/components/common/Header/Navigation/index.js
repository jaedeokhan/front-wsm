import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import AddCircle from '@mui/icons-material/AddCircle';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';


const Navigation = () => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
   
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show new post" color="inherit">
            <Badge>
              <AddCircle />
            </Badge>
          </IconButton>
          <p>글 목록보기</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new message"
            color="inherit"
          >
            <Badge>
              <ChatIcon />
            </Badge>
          </IconButton>
          <p>채팅내역</p>
        </MenuItem>
        <MenuItem onClick={() => {
            // TODO : 프로필 클릭 시 => useEffect
        }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>프로필</p>
        </MenuItem>
      </Menu>
    );
  
    return (
            <div>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton component={RouterLink} to="/posts" size="large" aria-label="show new post" color="inherit">
                        <Badge>
                            <AddCircle />
                        </Badge>
                    </IconButton>
                    <IconButton component={RouterLink} to="/auth/api/chat/:chatRoomId" 
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        >
                        <Badge>
                            <ChatIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={() => {
                            // TODO : 프로필 클릭 시 => useEffect
                        }}
                        color="inherit"
                        >
                        <AccountCircle />
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                    <MoreIcon />
                    </IconButton>
                </Box>
                {renderMobileMenu}
            </div>
    );
};

export default Navigation;