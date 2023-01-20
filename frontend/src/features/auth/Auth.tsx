import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';

function Auth(): JSX.Element {
  const [userLogin, setUserLogin] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const auth = (): void => {};

  const handleLoginChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserLogin(event.target.value);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserPassword(event.target.value);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '25ch',
            display: 'flex',
            alignItems: 'center',
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleLoginChange}
          label="Логин"
          variant="outlined"
        />
        <TextField
          onChange={handleEmailChange}
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={handlePasswordChange}
          label="Пароль"
          variant="outlined"
        />
        <Button onClick={auth} variant="contained">
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Auth;
