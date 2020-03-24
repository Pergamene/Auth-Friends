import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FriendState from '../services/FriendsState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '760px',
    margin: ' 20px auto',
    padding: '20px',
  },
});

const emptyFriend = {
  id: '',
  name: '',
  age: '',
  email: '',
};

const FriendsForm = props => {
  const classes = useStyles();
  const { setFriends } = props;
  const [friend, setFriend] = useState(emptyFriend);

  const handleChange = event => {
    setFriend({
      ...friend,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    FriendState.addFriend(friend, setFriends);
    setFriend(emptyFriend);
  };

  return (
    <Paper className={classes.root} component="form" onSubmit={handleSubmit} elevation={5}>
      <TextField
        variant="outlined" 
        label="Name" 
        name="name"
        value={friend.name} 
        onChange={handleChange} 
      />
      <TextField
        variant="outlined" 
        label="Age" 
        name="age"
        type="number"
        value={friend.age} 
        onChange={handleChange} 
      />
      <TextField
        variant="outlined" 
        label="Email" 
        name="email"
        type="email"
        value={friend.email} 
        onChange={handleChange} 
      />
      <Button 
        type="submit"
        color="primary"
        variant="contained"
      >Add Friend</Button>
    </Paper>
  );
};

export default FriendsForm;
