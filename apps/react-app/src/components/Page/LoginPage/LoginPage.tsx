import { useContext, useState } from 'react';
import { SnackbarContext } from '../../../context/SnackbarProvider';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';

import { PageContainer } from './LoginPage.styles';
import { NewUser } from '../../../types';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { createAlert } = useContext(SnackbarContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    const isUser = localStorage.getItem(username) ? true : false;

    if (isUser) {
      const userData = JSON.parse(localStorage.getItem(username) || '');
      if (userData.password === password) {
        createAlert('You are successfully logged in!', 'success');
      } else {
        createAlert('Email or password is not matching with our record.', 'error');
      }
    } else {
      createAlert('Email or password is not matching with our record.', 'error');
    }
  };

  const handleSignUp = ({ username, password }: NewUser) => {
    localStorage.setItem(
      username,
      JSON.stringify({
        username: username,
        password: password
      })
    );
    createAlert('User successfully signed up!', 'success');
  };

  function handleUsername(str: string) {
    setUsername(str);
    console.log(username);
  }

  function handlePassword(str: string) {
    setPassword(str);
    console.log(password);
  }

  return (
    <PageContainer container>
      <Grid item md={4} xs={4} lg={3}>
        <Card>
          <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
            <Typography id="login-heading" variant="h6" component="h2">
              Login
            </Typography>

            <TextField
              fullWidth
              {...(register('username'), { required: true })}
              id="username-input"
              label="Username"
              margin="dense"
              onChange={(e) => handleUsername(e.target.value)}
            />

            <TextField
              fullWidth
              {...(register('password'), { required: true, minLength: 4 })}
              id="password-input"
              label="Password"
              type="password"
              margin="dense"
              onChange={(e) => handlePassword(e.target.value)}
            />

            <CardActions style={{ float: 'right' }} className="card-actions">
              <Button
                color="primary"
                variant="outlined"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSignUp({ firstname: 'John', lastname: 'Smith', username: username, password: password });
                }}
              >
                SIGN UP
              </Button>

              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                LOGIN
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </PageContainer>
  );
};

export default LoginPage;
