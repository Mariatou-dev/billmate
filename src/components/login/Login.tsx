import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { apiLogin } from '../../remote/billmate-api/authService';




export default function Login({updateLoginUser}: any) {
  const navigate = useNavigate();

  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await apiLogin(`${data.get('username')}`, `${data.get('password')}`);
    
    // only redirect and save payload if successful.
    if (response.status >= 200 && response.status < 300) {
      handleData(response.payload);
 
      navigate('/dashboard')

    }
  };

 
  // update the loginuser with the user object.
  async function handleData(data: User) {
      updateLoginUser(data);

      

  }

  return (
      <><h1>BillMate</h1>
      <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password" />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>

            <Link href="register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>

          </Grid>
        </Box>
      </Box>
    </Container></>
  );
}