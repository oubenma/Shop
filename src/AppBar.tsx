import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
 import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import logo from './assets/logo.png';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(3),
  },
 button:{
  fontFamily: "sans-serif",
  fontWeight: 700,
  fontStyle: "normal",
  textTransform: "initial",
  letterSpacing: "0.5px",
  display: "inline-block",
  textDecoration: "none",
  padding: "8px",
  whiteSpace: "nowrap",
  color: "#202020",
  boxSizing: "border-box",
  cursor: "pointer"

 },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
  },
  header:{
    backgroundColor:"transparent",
        color:"black",
        boxShadow:"0px 0px 0px 0px",
        top:"0px"
  },
    topHeader:{
      backgroundColor:"black",
      color:"white",
    textAlign: "center" as "center",
     height:"40px",
     paddingTop:"5px",
     fontFamily: "sans-serif",
     fontWeight: 700,
    
      fontStyle: "normal",
      textTransform: "initial",
      display: "flex",
    letterspacing: "0.5pX",
    marginTop:"0px",
    alignItems: "center",
    fontSize: "13px",
    lineHeight: "1.2",
    marginButtom:"0px"
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
    logo:{
       width:"auto"
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
  }),
);

 function Hearder() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <>
    
  </>
    );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    
   <>
            
    
    </>
   );
  return (
    <>
    <div>
      <p className={classes.topHeader}> Great Products, Free Shipping & Easy Returns!</p>
      </div>
 
   
    <AppBar position="sticky" className={classes.header}>
        <Toolbar>
      <div className={classes.sectionDesktop}>
        
          <div className={classes.menuButton}/>
          
        <Button  >
          <img src={logo} alt="logo" height="35" />
        </Button>
          <div className={classes.grow} />
         <Button className={classes.button}>Home</Button>
         <Button className={classes.button} >Shop</Button>
         <Button className={classes.button}>Track Order</Button>
         <Button className={classes.button} >Contact</Button>
          
          <div className={classes.grow} />

          
          <IconButton aria-label="show 2 new notifications" color="inherit">
                <PersonIcon />
            </IconButton>
            <IconButton aria-label="sherch icon" color="inherit">
            <SearchIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
            
              aria-haspopup="true"
              
              color="inherit">
                 <Badge badgeContent={2} color="secondary">
              < ShoppingCartIcon />
              </Badge>
            </IconButton>
      </div>    
          <div className={classes.sectionMobile}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
            <IconButton
              aria-label="show more"
               aria-controls={mobileMenuId}
              aria-haspopup="true"
              
              color="inherit"
              >
            </IconButton>
            <IconButton aria-label="show 2 new notifications" color="inherit">
                <PersonIcon />
                <div className={classes.grow} />

                <Button  >
          <img src={logo} alt="logo" height="35" />
        </Button>
            </IconButton>
            <IconButton aria-label="sherch icon" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
                 <Badge badgeContent={2} color="secondary">
              < ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      
    </>
  );
}
export default Hearder;
