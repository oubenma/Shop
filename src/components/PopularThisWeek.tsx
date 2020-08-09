import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import coffeMakerList from './constants';
import ProductCard from './ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Settings } from 'react-slick';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    padding: '60px',
  },
  title: {
    fontSize: '30px',
    display: 'block',
    marginTop: '0px',
    lineHeight: '1.2',
    marginBottom: '12px',
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
});

export default function PopularThisWeek() {
  const classes = useStyles();

  var SliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    lazyLoad: 'ondemand',
    accessibility: true,
    swipe: true,
    nextArrow: (
      <button style={{ backgroundColor: 'black', color: 'black' }}></button>
    ),
    //TODO: improve design
    //TODO: we can add responsive to the slider by visting this link http://kenwheeler.github.io/slick/
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Popular this week</h2>

      <Slider {...SliderSettings}>
        {coffeMakerList.map((product) => {
          return (
            <div style={{ margin: 15 }}>
              <ProductCard
                OldPrice={product.OldPrice}
                title={product.title}
                SalePrice={product.SalePrice}
                value={product.value}
                imageUrl={product.imageUrl}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
