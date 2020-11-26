import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import paypal from '../assets/paypal.png';
import googlePay from '../assets/googlPay.png';
import visa from '../assets/visa.png';
import masterCard from '../assets/masterCard.png';
import maestroCard from '../assets/maestroCard.jpg';
const useStyles= makeStyles(()=>
createStyles({
  
    root:{
        backgroundColor: '#fafafa',
        color: '#666666',
       fontFamily:'Arial,Helvetica,sans-serif!important',
        padding:'50px 30px 20px 30px',
       
      },
    links:{
        underline: 'none',
       color: 'inherit',
    },
    header:{
    margin:'0px',
    padding:'0px',
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontSize: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color:'#222'

    },
    ul: {
        listStyleType:'none',
        fontSize:'12px',
        fontStyle:'normal',
         textTransform:'capitalize',
         marginBlockstart: '0em',
    marginBlockEnd: '0em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '0px',
    lineHeight:'23px'
      },
      socialMediaDiv:{
     color:'#222',
     display:'flex',
     justifyContent:'space-between',
     flexWrap: 'nowrap',
      },
      button: {
        backgroundColor: '#222',
        color: '#fff',
        transition: 'all 0.3s ease',
        lineHeight:'28px',
        fontStyle: 'normal',
        fontWeight:400,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        border: '1px solid transparent',
        borderRadius: '1px',
        padding: '0.3em 1.7em',
        cursor:'pointer',
        fontSize: '15px',
        '&:hover': {
          backgroundColor: '#222',
          opacity: 0.6,
        },
      },
      polycyDiv:{
        fontSize:'12px',
        fontStyle:'normal',

      },
      copyrightList: {
        
         marginBlockstart: '0em',
    marginBlockEnd: '0em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '0px',
    
      },
      list:{
  color:'#999',
  display:'inline-block',
  borderRight:'1px solid #ccc',
  marginRight:'10px',
  paddingRight:'10px'
      },   
})
);

function Footer(){
const classes=useStyles();
return(
<>
<div className={classes.root}>
<div  style={{display:'flex'}}>
  <div style={{flexGrow:1}} >
<h5 className={classes.header} >Shop</h5>
<ul className={classes.ul}>
<li><Link href='#' className={classes.links} underline="none"  target="_blanck">New arrivals</Link></li>
<li ><Link href='#' className={classes.links}  underline="none" target="_blanck">Popular this week</Link></li>
<li ><Link href='#' className={classes.links}  underline="none" target="_blanck">Trending right now</Link></li>
</ul></div>
<div style={{flexGrow:1}}>
<h5 className={classes.header} >Company info</h5>
<ul className={classes.ul}>
<li><Link href='#' className={classes.links}  underline="none" target="_blanck">About MHSSI</Link></li>
<li ><Link href='#' className={classes.links}  underline="none" target="_blanck">Social Responsibility</Link></li>
<li ><Link href='#' className={classes.links}  underline="none" target="_blanck">Affiliate</Link></li>
</ul>
</div>
<div style={{flexGrow:1}}>
<h5 className={classes.header} >Customer care</h5>
<ul className={classes.ul}>
<li><Link href='#' className={classes.links}  underline="none" target="_blanck">Contact Us</Link></li>
<li ><Link href='#' className={classes.links}  underline="none"  target="_blanck">Payment & Tax</Link></li>
<li ><Link href='#' className={classes.links}  underline="none" target="_blanck">Bonus Point</Link></li>
<li ><Link href='#' className={classes.links} underline="none" target="_blanck">Klarna</Link></li>
<li ><Link href='#' className={classes.links}  underline="none" target="_blanck">Afterpay</Link></li>
</ul></div>
<div style={{flexGrow:3}}>
<div style={{display:'flex'}}>
  <div style={{flexGrow:2}}>
<h5 className={classes.header} style={{marginBottom:'10px'}} >Find Us on</h5>

<div className={classes.socialMediaDiv}>
 
  <Link
   href="//Facebook.com"
   underline="none"
   target="_blanck"
  title="Share on Facebook"
  className={classes.links}>
  <FacebookIcon fontSize='large'/>
  </Link>
  <Link
   href="//Instagram.com"
   underline="none"
   target="_blanck"
  title="Share on Facebook"
  className={classes.links}>
  <InstagramIcon fontSize='large'/>
  </Link>
  <Link
   href="//Youtube.com"
   underline="none"
   target="_blanck"
  title="Subscribe in our youtube chanail "
  className={classes.links}>
  <YouTubeIcon fontSize='large'/>
  </Link>
   <Link
   href="//Pinterest.com"
   underline="none"
   target="_blanck"
  title="Follow us on Pinterest "
  className={classes.links}>
  <PinterestIcon fontSize='large'/>
  </Link>
  <Link
   href="//Linkedin.com"
   underline="none"
   target="_blanck"
  title="Follow us on linkedin "
  className={classes.links}>
  <LinkedInIcon fontSize='large'/>
  </Link>
  </div>
  </div>
  <div style={{flexGrow:3}}></div>
  <div style={{flexGrow:0.1,paddingRight:'40px'}}>
  <h5 className={classes.header} style={{marginBottom:'10px'}} >App</h5>
<div className={classes.socialMediaDiv}>
  
  <Link
   href="//Facebook.com"
   underline="none"
   target="_blanck"
  title="Share on Facebook"
  className={classes.links}>
  <AppleIcon fontSize='large'/>
  </Link>
  
  <Link
   href="//Instagram.com"
   underline="none"
   target="_blanck"
  title="Share on Facebook"
  className={classes.links}>
  <AndroidIcon fontSize='large'/>
  </Link>
  </div> </div></div>
  <h5 className={classes.header} style={{marginBottom:'10px',marginTop:'20px'}} >Sing up for MHSSI style news</h5>
  <div style={{display:'flex'}}>
    <div style={{flexGrow:5}} >
  <form  noValidate autoComplete="off"  >
  <TextField id="outlined-basic" variant="outlined" fullWidth={true}  size='small' placeholder='Your Email Address'  />
    </form></div>
    <div style={{flexGrow:1}} ><Button className={classes.button}><span>subscribe</span></Button></div></div>
    <div>
    <h5 className={classes.header} style={{marginBottom:'20px',marginTop:'20px'}} >we accept</h5>
    <div >
 
    <img src={paypal} alt='logo' height='22' width='50' style={{marginRight:'10px'}} />
    <img src={visa} alt='logo' height='22' width='50' style={{marginRight:'10px'}} />
    <img src={googlePay} alt='logo' height='22' width='50' style={{marginRight:'10px'}} />
    <img src={masterCard} alt='logo' height='24' width='50'style={{marginRight:'10px'}}  />
    <img src={maestroCard} alt='logo' height='24' width='50' style={{marginRight:'10px'}} />
 </div>
 
    </div>
 </div> 
</div>
<div className={classes.polycyDiv}>
<p >  ©2020 MHSSI All Right Reserved </p>

<ul className={classes.copyrightList} >
  <li className={classes.list}><Link href='#' color='inherit' underline="always" target="_blanck">Privacy&Cookie Policy </Link></li>
  <li className={classes.list}><Link href='#' color='inherit'underline="always" target="_blanck">Terms&Conditions</Link></li>
  <li className={classes.list}><Link href='#' color='inherit'underline="always" target="_blanck">Copyright Notice</Link></li>
  <li className={classes.list}><Link href='#' color='inherit'underline="always" target="_blanck">Accessibility</Link></li>
</ul>
</div>
</div>
</>
);
}
export default Footer;
