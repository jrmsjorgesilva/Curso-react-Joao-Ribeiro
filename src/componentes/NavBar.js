import React from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from '@mui/material'

const NavBar = () => {

  // const navigate = useNavigate();
  // const params = useParams();

  // MUI code

  const pages = ['fetchapp', 'cards', 'contador', 'comments', 'dadosclientes', 'invertexto'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  // MUI code ends

  return(
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/*<MenuIcon />*/}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page}
                   to={`/${page}`}
                   className='app__nav__item'
                 >
                   {page.toUpperCase()}
                 </NavLink>
              ))}
            </Menu>
          </Box>
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />}*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <NavLink
                key={page}
                 to={`/${page}`}
                 className='app__nav__item'
               >
                 {page.toUpperCase()}
               </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // <nav >
    //   <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '50px 10px' }}>
    //     <li>
    //       <NavLink
    //         to='/'
    //         className='app__nav__item'
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to='/fetchapp'
    //         className='app__nav__item'
    //       >
    //         Fetch
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to='/cards'
    //         className='app__nav__item'
    //       >
    //         Cards
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to='/comments'
    //         className='app__nav__item'
    //       >
    //         Comments
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to='/invertexto'
    //         className='app__nav__item'
    //       >
    //         Invertexto
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to='/contador'
    //         className='app__nav__item'
    //       >
    //         Contador
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to='/dadosclientes'
    //         className='app__nav__item'
    //       >
    //         Dados
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>

  )
}


// export default connect(state => ({ status: state }))(Card);
export default NavBar;
