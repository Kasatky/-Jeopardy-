import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Auth(): JSX.Element {
  return (
    <div>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch", display: 'flex', alignItems: 'center' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Логин" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Пароль" variant="outlined" />
      </Box>
    </div>
  );
}

export default Auth;
