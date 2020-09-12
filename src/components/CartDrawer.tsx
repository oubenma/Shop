import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import {
  Drawer,
  Button,
  CardContent,
  Typography,
  createStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartItemType } from '../types/types';

// TODO : remove uncessarly css classes
const useStyles = makeStyles(() =>
  createStyles({
    ul: {
      fontFamily: 'DIN Next,sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '17px',
      lineHeight: 1.5,
      color: '#202020',
      webkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      padding: 0,
      margin: '0 0 17px 17px',
      alignItems: 'center',
      marginBottom: 0,
      marginRight: '17px',
    },
    li: {
      fontFamily: 'DIN Next,sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '17px',
      lineHeight: 1.5,
      color: '#202020',
      webkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'inline-block',
      margin: 0,
      lineHeigh: 1,
      whiteSpace: 'normal',
      marginBottom: ' 0px',
    },
    a: {
      fontSize: '17px',
      webkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      lineHeight: 1,
      boxSizing: 'border-box',
      transition: 'all 0.3s ease',

      fontFamily: 'DIN Next,sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
      display: 'inline-block',
      textDecoration: 'none',
      padding: '8px',
      whiteSpace: 'nowrap',
      color: '#202020',
    },
    header: {
      backgroundColor: '#fff',
      color: 'black',
      boxShadow: '0px 0px 0px 0px',
      top: '0px',
      // height: '80px', we wil remove comment when links are in the center
      margin: '0 auto',
    },
    topHeader: {
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      paddingTop: '7px',
      paddingBottom: '7px',
      fontFamily: 'DIN Next,sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterspacing: '0.5pX',
      marginTop: '0px',
      alignItems: 'center',
      fontSize: '17px',
      lineHeight: '1.2',
      marginButtom: '0px',
    },

    flex1: {
      flexGrow: 1,
    },
    flex2: {
      flexGrow: 3,
    },

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
    },
    inner_container22: {
      width: '418px',
      height: '224px',
      padding: '16px',
      marginTop: '30px',
      display: 'flex',
      backgroundColor: '#f7f7f7',
    },
    inner_container23: {
      width: '418px',
      height: '113px',
      paddingBottom: '16px',
      marginBottom: '16px',
      borderBottom: '1px solid #f2f2f2',
      backgroundColor: '#f7f7f7',
      display: 'flex',
    },
    inner_container24: {
      width: '418px',
      height: '163px',
      padding: '16px',
      minHeight: '130px',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      bottom: 0,
    },
    root: { display: 'flex' },
    details: {
      height: '44px',
      display: 'flex',
      flexDirection: 'column',
    },
    cover: {
      width: 113,
    },
    content: {
      flex: '1 0 auto',
    },

    controls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      // paddingLeft: theme.spacing(1),
      // paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    link: {
      fontFamily: 'DIN Next,sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0px',
      color: '#202020',
      underline: 'none',
      fontSize: '17px',
    },
    contenu: {
      height: '40px',
      paddingTop: '16px',
      paddingBottom: '0px',
      paddingLeft: '16px',
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
      lineHeight: 1.2,
      display: 'inherit',
      textAlign: 'center',
      fontSize: '29px',
      marginTop: '5px',
      marginLet: '0px',
      '&:hover': {
        backgroundColor: '#f2f2f2',
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
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon className={classes.close_button} fontSize='small' />
          </IconButton>
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
              <div className={classes.inner_container23}>
                <CardMedia
                  className={classes.cover}
                  image='https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg'
                  title='Live from space album cover'
                />

                <div className={classes.details}>
                  <CardContent className={classes.contenu}>
                    <Link href='#' className={classes.link}>
                      {' '}
                      Rollable Keyboard
                    </Link>
                    <Typography variant='subtitle1' color='textSecondary'>
                      Red
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <Button size='small' className={classes.button2}>
                      -
                    </Button>
                    <span>1</span>
                    <Button className={classes.button2}>+</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.inner_container24}></div>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default CartDrawer;
