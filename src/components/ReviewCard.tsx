import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles({
  root: {
   backgroundColor:'#e6e6e6',
    maxWidth: '250vw',
    cursor: ' pointer',
    boxShadow: 'none', 
  },
  
  media: {
    height: '220px',
    borderRadius: '3px',
    '&:hover': {
      transition: 'all 0.4s ease',
      transform: 'scale(1.1)',
      opacity: 0.6,
    },
    cursor: 'zoom-in',
  },
  title: {
    fontSize: '16px',
    lineHeight: '1,5',
    color: '#202020',
    fontFamily: '"Poppins" sans-serif',
    fontWeight:'bold',
    letterSpacing: '0px',
    display:'inline-block'
    
  },
  
  para:{
    fontSize: '14px',
    lineHeight: '1,5',
    color: '#202020',
    fontFamily: '"Poppins" sans-serif',
    cursor:'pointer',
    letterSpacing: '0px',
    whiteSpace:'pre-wrap',
  }
});

interface propsType {
  name: string;
  imageUrl: string;
  value: number;
  description:string
}
const Reviews = (props: propsType) => {
  const classes = useStyles();
  const {name, imageUrl, value,description } = props;
  return (
    <Card className={classes.root} >
      <CardMedia className={classes.media} image={imageUrl} />
      <CardContent className={classes.para}>
  <Typography >
    <span className={classes.title}>{name}</span> 
    <span><IconButton><CheckCircleIcon fontSize="small" className={classes.title}/></IconButton></span></Typography>
        <Rating 
          name='read-only'
          value={value}
          readOnly
          size='small'
        />
       <p  className={classes.para}>{description}</p>
      </CardContent>
    </Card>
   
  );
};
export default Reviews;
