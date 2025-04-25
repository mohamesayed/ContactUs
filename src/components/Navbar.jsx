import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu, MenuItem
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };
  const navItems = [
    { label: 'تواصل معنا', href: '#' },
    { label: ' نبذه عنا', href: '#' },
    { label: 'خدماتنا', href: '#' },
    { label: 'اعمالنا', href: '#' },
    { label: 'الصفحة الرئيسية', href: '#' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Box component="img" src={logo} alt="Logo" sx={{ height: 40, mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary={item.label}
              sx={{
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontSize: '1rem',
                  color: 'text.primary'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{

        backgroundColor: "white",
        boxShadow: "none",
        py: 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'rgb(89, 40, 127)',
                color: 'white',
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  bgcolor: 'rgb(89, 40, 127)'
                }
              }}
            >
              <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: "5px", padding: "2px", borderRadius: "16px", backgroundColor: "#FFFFFF4D" }}>

                <ArrowBackIcon
                  sx={{
                    fontWeight: 600,
                    fontSize: '12px', // حجم السهم نفسه

                  }}
                />
              </div>

              اتصل بنا
            </Button>
            <Button
              variant="text"
              sx={{
                color: 'text.primary',
                minWidth: 'auto',
                fontWeight: 500,
                bgcolor: "#E7D8F380",
                borderRadius: "8px",
                border: "1px solid #59287F",
                fontWeight: "semibold",
              }}
            >
              EN
            </Button>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: 240,
                    bgcolor: 'background.paper'
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) =>
                  item.label === 'خدماتنا' ? (
                    <React.Fragment key={item.label}>
                      <Button
                        onClick={handleMenuClick}
                        sx={{
                          color: '#1A1A1A',
                          fontWeight: 600,
                          fontSize: '16px',
                          borderRadius: '16px',
                          '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
                        }}
                      >
                        <KeyboardArrowDownIcon />
                        {item.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                      >
                        <MenuItem onClick={handleClose}>خدمة 1</MenuItem>
                        <MenuItem onClick={handleClose}>خدمة 2</MenuItem>
                        <MenuItem onClick={handleClose}>خدمة 3</MenuItem>
                      </Menu>
                    </React.Fragment>
                  ) : (
                    <Button
                      key={item.label}
                      sx={{
                        color: item.label === 'تواصل معنا' ? '#59287F' : '#1A1A1A',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
                        fontWeight: 600,
                        fontSize: '16px',
                        bgcolor: item.label === 'تواصل معنا' ? '#E7D8F380' : 'transparent',
                        border: item.label === 'تواصل معنا' ? '1px solid #59287F' : 'none',
                        borderRadius: '16px',
                      }}
                    >
                      {item.label}
                    </Button>
                  )
                )}
              </Box>


              <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />

            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 