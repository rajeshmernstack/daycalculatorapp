import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

export default function Day(props) {
  const classes = useStyles();
  var [likes, setLikes] = useState(0);
  var [likeText, setLikeText] = useState('Like');
  var [status, setStatus] = useState(false);
  useEffect(() => {
    loadLikes();
  }, []);
  function loadLikes() {
    axios.get('https://daycalculator.herokuapp.com/likes/read')
    .then(res => {
      setLikes(parseInt(res.data.likes));
    });    
  }
  function addLike() {
    if(status === false) {
      axios.get(`https://daycalculator.herokuapp.com/likes/write?likes=${likes+1}`);
      loadLikes();
      setStatus(true);
      setLikeText('Liked');
    }else{
      axios.get(`https://daycalculator.herokuapp.com/likes/write?likes=${likes-1}`);
      loadLikes();
      setStatus(false);
      setLikeText('Like')
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Day
        </Typography>
        <Typography variant="h3" component="h1">
          {props.day}
        </Typography>
      </CardContent>
      <CardActions>
        <div className="ui labeled button" tabIndex="0">
          <button className="ui red button" onClick={addLike}>
            <i className="heart icon"></i> {likeText}
          </button>
          <span className="ui basic red left pointing label">
            {likes}
          </span>
        </div>
      </CardActions>
    </Card>
  );
}
