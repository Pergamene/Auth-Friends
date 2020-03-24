import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Friend from './Friend';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
});

const FriendsList = props => {
  const classes = useStyles();
  const { friends } = props;

  return (
    <div className={classes.root}>
      {friends && friends.map(friend => {
        return <Friend data={friend} key={friend.id} />;
      })}
    </div>
  );
};

export default FriendsList;
