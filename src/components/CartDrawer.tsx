import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';

import {
  Drawer,
  Button,
  CardContent,
  Typography,
  createStyles,
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartItemType } from '../types/types';

// TODO : remove uncessarly css classes
const useStyles = makeStyles(() =>
  createStyles({
    drawer_header: {
      width: '450px',
    },
    title2: {
      paddingLeft: '16px',
      paddingRight: '16px',
      width: '418px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
    },
    title3: {
      width: '370px',
    },
    drawer_title: {
      verticalAlign: 'middle',
      fontfamily: 'DIN Next,sans-serif',
      fontWeight: 900,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0px',
      fontSize: '27px',
      lineHeight: 1,
      textDecoration: 'none',
      color: '#202020',
      webkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',
    },
    inner_container: {
      width: '418px',
      height: '518px',
      padding: '30px 16px 30px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
    },
    inner_container1: {
      width: '360px',
      height: '100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
    },
    inner_container2: {
      fontfamily: 'DIN Next,sans-serif',
      fontWeight: 400,
      fonStyle: 'normal',
      fontSize: '17px',
      lineHeight: 1.5,
      color: '#202020',
    },
    button: {
      backgroundColor: '#5600e3',
      borderColor: '#5600e3',
      color: '#fff',
      transition: 'all 0.3s ease',
      fontFamily: '"DIN Next",sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
      border: '1px solid #f2f2f2',
      borderRadius: '3px',
      padding: '16px 24px',
      lineHeight: 1.5,
      display: 'inline-block',
      textAlign: 'center',
      fontSize: '17px',
      marginTop: '0px',
      marginBottom: '60px',
      '&:hover': {
        backgroundColor: '#5600e3',
        opacity: 0.6,
      },
    },
    boxButton: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    close_button: {
      color: '#202020',
    },
    inner_container21: {
      width: '450px',
      height: '518px',
      display: 'flex',
      backgroundColor: '#f7f7f7',
      position: 'relative',
    },
    inner_container22: {
      width: '418px',
      padding: '16px',
      marginTop: '30px',
      display: 'flex',
      backgroundColor: '#f7f7f7',
      flexDirection: 'column',
      position: 'absolute',
    },
    inner_container23: {
      width: '418px',
      height: '113px',
      paddingBottom: '16px',
      marginBottom: '16px',
      borderBottom: '2px solid #f2f2f2',
      backgroundColor: '#f7f7f7',
      display: 'flex',
    },
    inner_container24: {
      width: '418px',
      height: '163px',
      padding: '16px',
      minHeight: '130px',
      position: 'fixed',
      display: 'flex',
      backgroundColor: '#fff',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: { display: 'flex' },
    details: {
      height: '79px',
      width: '290px',
      padding: '13px 0px 0px 13px',
    },
    hover: {
      '&:hover': {
        opacity: 0.6,
      },
    },
    cover: {
      width: 103,
      height: 103,
    },
    content: {
      flex: '1 0 auto',
    },
    product: {
      position: 'relative',
    },
    quantity: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      top: 5,
    },
    price: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: 15,
      fontFamily: '"DIN Next",sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    link: {
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
      boxSizing: 'border-box',
      listStyle: ' Arabic-indic',
      webkitFontSmoothing: 'antialiased',
      underline: 'none',
    },

    button2: {
      backgroundColor: '#f2f2f2',
      borderColor: '#f2f2f2',
      color: '#202020',
      transition: 'all 0.3s ease',
      fontFamily: '"DIN Next",sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
      border: '1px solid #f2f2f2',
      borderRadius: '3px',
      lineHeight: '37px',
      textAlign: 'center',
      fontSize: '27px',
      width: '40px',
      height: '39px',
      '&:hover': {
        backgroundColor: '#f2f2f2',
        opacity: 0.6,
      },
    },
    count_quantity: {
      fontSize: '17px',
      paddingLeft: '13px',
      paddingRight: '13px',
    },
    position2: {
      position: 'absolute',
      right: 30,
      top: 40,
      width: '50px',
      fontFamily: '"DIN Next",sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
    },
    position1: {
      position: 'absolute',
      left: 30,
      top: 40,
      width: '50px',
      fontFamily: '"DIN Next",sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
    },
    position3: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
    },
    button3: {
      backgroundColor: '#5600e3',
      borderColor: '#5600e3',
      color: '#fff',
      transition: 'all 0.3s ease',
      fontFamily: '"DIN Next",sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
      border: '1px solid #f2f2f2',
      borderRadius: '3px',
      padding: '16px 24px',
      marginTop: '50px',
      lineHeight: 1.5,
      fontSize: '17px',
      width: '100%',

      '&:hover': {
        backgroundColor: '#5600e3',
        opacity: 0.6,
      },
    },
  })
);
interface PropsType {
  open: boolean;
  handleDrawerClose: () => void;
  emptyCart: boolean;
  cartItmes: CartItemType[];
}
function CartDrawer({
  open,
  handleDrawerClose,
  emptyCart,
  cartItmes,
}: PropsType) {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const incrementProduct = () => {
    setCount(count + 1);
  };
  const decrementProduct = () => {
    if (count < 1) return;
    setCount(count - 1);
  };
  return (
    <div className={classes.drawer_header}>
      <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
        <div className={classes.title2}>
          <div className={classes.title3}>
            <a className={classes.drawer_title} href='/'>
              <span className={classes.drawer_title}>
                <ShoppingCartIcon fontSize='large' />
              </span>
              Your Cart{' '}
            </a>
          </div>

          <button onClick={handleDrawerClose} className={classes.button2}>
            ×
          </button>
        </div>
        {emptyCart ? (
          <div className={classes.inner_container}>
            <div className={classes.inner_container1}>
              <p className={classes.inner_container2}>
                {' '}
                Your cart is currently empty.{' '}
              </p>

              <div className={classes.boxButton}>
                <Button className={classes.button}>Continue browzing</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={classes.inner_container21}>
            <div className={classes.inner_container22}>
              {cartItmes.map((item) => {
                return (
                  <>
                    <div className={classes.inner_container23}>
                      <CardMedia
                        className={classes.cover}
                        image={item.imageUrl}
                      />
                      <CardContent className={classes.details}>
                        <div className={classes.hover}>
                          <Link href='#' className={classes.link}>
                            {' '}
                            {item.title}
                          </Link>
                        </div>
                        <Typography variant='subtitle1' color='textSecondary'>
                          {item.variations}
                        </Typography>

                        <div className={classes.product}>
                          <div className={classes.quantity}>
                            <button
                              className={classes.button2}
                              onClick={decrementProduct}
                            >
                              −
                            </button>
                            <span className={classes.count_quantity}>
                              {count}
                            </span>
                            <button
                              onClick={incrementProduct}
                              className={classes.button2}
                            >
                              +
                            </button>
                          </div>
                          <div className={classes.price}>$18.31</div>
                        </div>
                      </CardContent>
                    </div>
                  </>
                );
              })}
            </div>

            <div className={classes.inner_container24}>
              <div className={classes.position1}>Subtotal</div>
              <div className={classes.position2}>$68.98</div>

              <Button className={classes.button3}>
                <LockIcon />
                CHECK OUT
              </Button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default CartDrawer;
