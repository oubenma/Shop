import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../assets/logo.png';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Drawer,Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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
  
  drawer_header:{
    width:'400px',
    height:'578px',
 
  },
  title2:{
    padding:'0px 50px 0px 20px',
    width:'370px',
    height:'80px',
    display:'flex',
    alignItems:'center'
    
  },
  title3:{
    width:'350px',
    
  },
  drawer_title:{
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
  inner_container:{
    width:'410px',
    height:'438px',
    padding:'30px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f7f7f7'
  },
  inner_container1:{
    width:'360px',
    height:'100px',
    display: 'flex',
    flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center' ,
  bottom:0
  },
  inner_container2:{
    fontfamily: 'DIN Next,sans-serif',
    fontWeight: 400,
    fonStyle: 'normal',
    fontSize: '17px',
    lineHeight: 1.5,
    color: '#202020'
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
  close_button:{
    color: '#202020',  
  }
  })
);

function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
     <div> 
      <Drawer   variant="persistent" anchor="right" open={open}>
        <div className={classes.drawer_header}>
        <div className={classes.title2} >
          <div className={classes.title3}>
        <a className={classes.drawer_title}  href='/'>
          
         <span className={classes.drawer_title} ><ShoppingCartIcon fontSize='large'/>
           </span>
           Your Cart      </a></div>
          <IconButton  onClick={handleDrawerClose}>
          <CloseIcon className={classes.close_button} fontSize='small'/> 
          </IconButton>
          </div>
          
        <Divider />
        <div className={classes.inner_container} >
          <div className={classes.inner_container1}>
          <p className={classes.inner_container2}> Your cart is currently empty. </p>
          
          <div className={classes.boxButton}>
        <Button className={classes.button}>Continue browzing</Button>
      </div>
      </div>
        </div>
        </div>  
      </Drawer>
      </div> 
    </>
  );
}
export default NavBar;
