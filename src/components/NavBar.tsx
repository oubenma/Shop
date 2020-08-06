import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { Button, Link } from '@material-ui/core';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    button: {
      fontFamily: 'sans-serif',
      fontWeight: 700,
      fontStyle: 'normal',
      textTransform: 'initial',
      letterSpacing: '0.5px',
      display: 'inline-block',
      textDecoration: 'none',
      padding: '8px',
      whiteSpace: 'nowrap',
      color: '#202020',
      boxSizing: 'border-box',
      cursor: 'pointer',
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    header: {
      backgroundColor: 'transparent',
      color: 'black',
      boxShadow: '0px 0px 0px 0px',
      top: '0px',
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

    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    logo: {
      width: 'auto',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

function NavBar() {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [
  //   mobileMoreAnchorEl,
  //   setMobileMoreAnchorEl,
  // ] = React.useState<null | HTMLElement>(null);

  // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  // setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = <></>;

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = <></>;

  return (
    <>
      <div className={classes.topHeader}>
        <span> Great Products, Free Shipping & Easy Returns!</span>
      </div>

      <AppBar position='sticky' className={classes.header}>
        <Toolbar>
          {/* <Grid container spacing={3}>
            <Grid item md={3}>
              <div>logo</div>
            </Grid>
            <Grid item md={6}>
              <div>links</div>
            </Grid>
            <Grid item md={3}>
              <div>icons</div>
            </Grid>
          </Grid> */}
          <div className={classes.sectionDesktop}>
            <div className={classes.menuButton} />

            <img src={logo} alt='logo' height='35' />
            {/* TODO : create links instead of buttons and create ul menu with li, check hygo site */}
            {/* <div className={classes.grow} /> */}
            <Button className={classes.button}>Home</Button>
            <Button className={classes.button}>Shop</Button>
            <Button className={classes.button}>Track Order</Button>
            <Button className={classes.button}>Contact</Button>
            {/* <div className={classes.grow} /> */}

            <IconButton aria-label='show 2 new notifications' color='inherit'>
              <PersonIcon />
            </IconButton>
            <IconButton aria-label='sherch icon' color='inherit'>
              <SearchIcon />
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>

          {/* <div className={classes.sectionMobile}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              aria-label='show more'
              // aria-controls={mobileMenuId}
              aria-haspopup='true'
              color='inherit'
            ></IconButton>
            <IconButton aria-label='show 2 new notifications' color='inherit'>
              <PersonIcon />
              <div className={classes.grow} />

              <Button>
                <img src={logo} alt='logo' height='35' />
              </Button>
            </IconButton>
            <IconButton aria-label='sherch icon' color='inherit'>
              <SearchIcon />
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              // aria-controls={menuId}
              aria-haspopup='true'
              color='inherit'
            >
              <Badge badgeContent={2} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
         */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
    </>
  );
}
export default NavBar;
