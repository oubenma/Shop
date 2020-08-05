import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    backgroundColor: '#f7f7f7',
    maxWidth: '250vw',
    Height: '200vh',
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
  },

  hover: {
    '&:hover': {
      opacity: 0.6,
    },
  },
  title: {
    fontSize: '18px',
    display: 'block',
    marginTop: '0px',
    lineHeight: '1,5',
    textRendering: 'optimizeLegibility',
    color: '#202020',
    fontFamily: '"ITC Caslon No 224",serif',
    fontWeight: 900,
    fontStyle: 'normal',
    textTransform: 'initial',
    letterSpacing: '0px',
    textAlign: 'center',
    boxSizing: 'border-box',
    listStyle: ' Arabic-indic',
    webkitFontSmoothing: 'antialiased',
  },
  star: {
    lineHeight: '1,5',
    fontSize: '21px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  price: {
    wordSpacing: '3px',
    fontFamily: '"DIN Next",serif',
    fontWeight: 700,
    fontStyle: 'normal',
    textTransform: 'initial',
    letterSpacing: ' 0.5px',
    fontSize: '17px',
    display: 'block',
    marginTop: '0px',
    lineHeight: '1,5',
    marginBottom: '5px',
    textRendering: 'optimizeLegibility',
    color: '#202020',
    textAlign: 'center',
    boxSizing: 'border-box',
    listStyle: ' Arabic-indic',
    webkitFontSmoothing: 'antialiased',
  },
});

interface propsType {
  OldPrice: string;
  title: string;
  SalePrice: string;
  imageUrl: string;
  value: number;
}
const ProductCard = (props: propsType) => {
  const classes = useStyles();
  const { OldPrice, SalePrice, title, imageUrl, value } = props;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} />
      <CardContent className={classes.hover}>
        <Typography className={classes.title}>{title}</Typography>
        <Rating
          className={classes.star}
          name='read-only'
          value={value}
          readOnly
          size='small'
        />
        <Typography className={classes.price}>
          <span style={{ textDecoration: 'line-through' }}> {OldPrice}</span>
          &nbsp;
          <span style={{ color: '#5600e3' }}>{SalePrice}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
