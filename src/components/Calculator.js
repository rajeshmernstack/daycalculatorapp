import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import axios from 'axios';
import Day from './Day'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

export default function Calculator() {
  var [data, setData] = useState([]);
  const classes = useStyles();

  function fetchDateAPI() {
      let date = document.getElementById('date').value;
      axios.get(`https://daycalculator.herokuapp.com/calculate?date=${date}`)
      .then(res => {
        setData(res.data);
      })
  }

  function displayData() {
    if(data.status === 'failed') {
      return data.error;
    }else{
      return data.day;
    }
  }
  return (
    <div>
    <div className={classes.root} noValidate autoComplete="off">
      <TextField id="date" label="Enter Date {DD/MM/YYYY}" />
      <Button
        onClick={fetchDateAPI}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        Find Day
      </Button>
    </div>
    <div>
      <Day day={displayData()} />
    </div>
    </div>
  );
}
