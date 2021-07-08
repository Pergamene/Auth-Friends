import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FriendState from '../services/FriendsState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '33vh auto 0',
    padding: '20px',
  },
  input: {
    marginBottom: '20px',
  },
});

const emptyCredentials = {
  username: '',
  password: '',
};

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [credentials, setCredentials] = useState(emptyCredentials);

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (FriendState.friendsLogin(credentials)) {
      history.push('/friends');
    }
  };

  return (
    <Paper className={classes.root} component="form" onSubmit={handleSubmit} elevation={5}>
      <TextField
        className={classes.input} 
        variant="outlined" 
        label="Username" 
        name="username"
        value={credentials.username} 
        onChange={handleChange} 
      />
      <TextField
        className={classes.input} 
        variant="outlined" 
        label="Password" 
        name="password"
        type="password"
        value={credentials.password} 
        onChange={handleChange} 
      />
      <Button 
        type="submit"
        color="primary"
        variant="contained"
      >Login</Button>
    </Paper>
  );
};

export default Login;
