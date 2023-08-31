import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack , Box} from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';

export const NavBar = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/login');
  }

  const onRegister = () => {
    navigate('/register');
  }

  const onLogout = () => {
    // Remove user from local storage
    localStorage.removeItem('user');
    setUser(null);

    // Reload the page
    window.location.reload();
  }

  // Load user from local storage
  useEffect(() => {
    const userFound = JSON.parse(localStorage.getItem('user'));
    setUser(userFound);
  }, []);

  return (
    <AppBar position="static" color='secondary'>
      <Toolbar>
        <Button onClick={() => window.location.href = '/'} style={{ flexShrink: 1, backgroundColor: 'transparent'}} >
          <HomeOutlined />
          &nbsp;&nbsp;
          <Typography variant="h6" component="div">
          Blog App
        </Typography>
        </Button>
        
        <Button onClick={() => window.location.href = '/statistics'} style={{ flexShrink: 1, backgroundColor: 'transparent'}}>
        <Typography variant="h6" component="div">
          Statistics
        </Typography>
        </Button>
        <Box sx={{ flexGrow: 1 }}></Box>
        {user ? (
          <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ gap: '0.5rem' }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="user"
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Typography sx={{ display: 'inline-block' }}>
                {user.name}
              </Typography>
            </Stack>

            <Button variant='solid' color="danger" onClick={onLogout}>
              LOGOUT
            </Button>
          </Stack>
        ) :
          (
            <Stack direction='row' gap={2}>
              <Button variant='solid' color="success" onClick={onRegister}>
                Register
              </Button>
              <Button variant='solid' color="primary" onClick={onLogin}>
                Login
              </Button>
            </Stack>
          )}
      </Toolbar>
    </AppBar>
  );
};

