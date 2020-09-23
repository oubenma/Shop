import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../assets/logo.png';
import CartDrawer from './CartDrawer';
import { CartItemType } from '../types/types';

const useStyles = makeStyles(() =>
  createStyles({
    menu: {
      fontFamily: 'DIN Next,sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '17px',
      lineHeight: 1.5,
      color: '#202020',
      webkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      boxSizing: 'border-box',
      order: 3,
      whiteSpace: 'nowrap',
    },
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

    boxButton: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    close_button: {
      color: '#202020',
    },
  })
);

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const [cartItmes, setCartItmes] = useState<CartItemType[]>([]);
  const emptyCart = false;

  useEffect(() => {
    setCartItmes([
      {
        title: 'Hamilton Beach Flexbrew',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 19.22,
        quntity: 2,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 18,
        quntity: 4,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 18,
        quntity: 4,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
      {
        title: 'Lorem ipsum dolor sit amet.',
        imageUrl: 'https://picsum.photos/200/200',
        productPrice: 133,
        quntity: 5,
      },
    ]);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.topHeader}>
        <span> Great Products, Free Shipping & Easy Returns!</span>
      </div>
      <AppBar position='sticky' className={classes.header}>
        <div style={{ padding: '0 30px 0 30px' }}>
          <div className={classes.header}>
            <Toolbar>
              <div className={classes.flex2}>
                <a href='/'>
                  <img src={logo} alt='logo' height='39' width='100' />
                </a>
              </div>
              <div className={classes.flex1}>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <a className={classes.a} href='/'>
                      Home
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href='/'>
                      Shop
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href='/'>
                      Track Order
                    </a>
                  </li>
                  <li className={classes.li}>
                    <a className={classes.a} href='/'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className={classes.flex1} />
              <div>
                <IconButton aria-label='user login icon' color='inherit'>
                  <PersonIcon />
                </IconButton>
                <IconButton aria-label='sherch icon' color='inherit'>
                  <SearchIcon />
                </IconButton>
                <IconButton
                  edge='end'
                  aria-label='sopping cart'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={handleDrawerOpen}
                >
                  <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </div>
            </Toolbar>
          </div>
        </div>
      </AppBar>
      <CartDrawer
        open={open}
        emptyCart={emptyCart}
        handleDrawerClose={handleDrawerClose}
        cartItmes={cartItmes}
      />
    </>
  );
}
export default NavBar;
