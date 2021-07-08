import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import FriendsState from '../services/FriendsState';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto 20px',
    padding: '20px',
    width: '250px',
  },
  text: {
    margin: '5px 0',
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const Friend = props => {
  const classes = useStyles();
  const [hovering, setHovering] = useState(false);
  const { name, age, email, id } = props.data;
  const { setFriends, setEditFriend } = props;

  const handleHover = () => {
    setHovering(true);
  };

  const handleStopHover = () => {
    setHovering(false);
  }

  const handleEdit = () => {
    setEditFriend({
      editing: true,
      friend: {
        name,
        age,
        email,
        id,
      },
    });
  };

  const handleDelete = () => {
    FriendsState.deleteFriend(id, setFriends);
  };

  return (
    <Paper className={classes.root} component="div" elevation={5} onMouseEnter={handleHover} onMouseLeave={handleStopHover}>
      <div>
        <h2 className={classes.text}>{name}</h2>
        <p className={classes.text}>Age: {age}</p>
        <p className={classes.text}>Email: {email}</p>
      </div>
      {hovering && <div className={classes.icons}>
        <EditIcon onClick={handleEdit}/>
        <DeleteIcon onClick={handleDelete}/>
      </div>}
    </Paper>
  );
};

export default Friend;
