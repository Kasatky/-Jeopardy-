import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Popper } from '@mui/material';
import { Link } from 'react-router-dom';


function Navigation(): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (): void => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to='/'>Своя Игра</Link>
        </Typography>
        <Button sx={{ color: 'white' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
      >
        Меню
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to='/auth'>Регистрация</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/auth'>Войти</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/auth'>Выйти</Link></MenuItem>
      </Menu>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navigation