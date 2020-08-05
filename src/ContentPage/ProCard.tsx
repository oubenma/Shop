import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import {  CardMedia } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    backgroundColor:'#f7f7f7',
    maxWidth:'250vw',
    Height:'200vh',
    cursor:" pointer",
  },
  media: {
    height: 200,
    borderRadius: '3px',
    '&:hover':{
      transition: 'all 0.4s ease',
      transform:'scale(1.1)',
      opacity: 0.6,}
  },
  hov:{
    '&:hover':{
      opacity: 0.6,}},
  sty: {
    fontSize: '18px',
    display: 'block',
    marginTop: '0px',
    lineHeight: '1,5',
    textRendering: 'optimizeLegibility',
    color: '#202020',
    fontFamily: '"ITC Caslon No 224",serif',
    fontWeight: 900,
    fontStyle: 'normal',
    textTransform:'initial',
    letterSpacing:'0px',
    textAlign: 'center',
    boxSizing: 'border-box',
    listStyle:' Arabic-indic',
    webkitFontSmoothing: 'antialiased',
  },
  star:{
    lineHeight: '1,5',
    fontSize: '14px',
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    

  },
  money:{
    wordSpacing: '3px',
    fontFamily: '"DIN Next",serif',
    fontWeight: 700,
    fontStyle: 'normal',
    textTransform: 'initial',
    letterSpacing:' 0.5px',
    fontSize: '17px',
    display: 'block',
    marginTop: '0px',
    lineHeight: '1,5',
    marginBottom: '5px',
    textRendering: 'optimizeLegibility',
    color: '#202020',
    textAlign: 'center',
    boxSizing: 'border-box',
    listStyle:' Arabic-indic',
    webkitFontSmoothing: 'antialiased',
  },
});

interface props{
  OldPrice:string;
  title:string;
  SalePrice:string;
  imageUrl:string;
  value:number;
}
const ProCard = (props: props)=> {
  const classes = useStyles();
  const {OldPrice, SalePrice, title,  imageUrl, value } = props;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} />
      <CardContent className={classes.hov}>
        <Typography className={classes.sty} >
          {title}
        </Typography>
        <Typography variant="body2" component="p">
        <Rating className={classes.star} name="read-only" value={value} readOnly size="small" />
        </Typography>
        <Typography className={classes.money}>
         <span style={{textDecoration: 'line-through'}}> {OldPrice} </span> <span style={{color: '#5600e3'}}>{SalePrice}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProCard;
