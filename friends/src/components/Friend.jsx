import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useState = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 20px',
    padding: '20px',
    width: '250px',
  },
  text: {
    margin: '5px 0',
  },
});

const Friend = props => {
  const classes = useState();
  const { name, age, email } = props.data;

  return (
    <Paper className={classes.root} component="div" elevation={5}>
      <h2 className={classes.text}>{name}</h2>
      <p className={classes.text}>Age: {age}</p>
      <p className={classes.text}>Email: {email}</p>
    </Paper>
  );
};

export default Friend;
