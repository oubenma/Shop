import React from 'react';

import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/styles';
import logo from '../assets/logo.png';
import googlePay from '../assets/googlPay.png';
import {countries}from '../components/constants';
import {coffeMakerList}from '../components/constants'
import paypal from '../assets/paypal.png';
import pay from '../assets/pay.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { clearScreenDown } from 'readline';
import { Checkbox, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Url } from 'url';

// function createData(name:img, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }


// const rows = [
//   createData('https://picsum.photos/100/100', 6, 6.0, 24, 4.0),
//   createData('https://picsum.photos/100/100', 237, 9.0, 37, 4.3),
//   createData('https://picsum.photos/100/100', 262, 16.0, 24, 6.0),
//   createData('https://picsum.photos/100/100', 305, 3.7, 67, 4.3),
//   createData('https://picsum.photos/100/100', 356, 16.0, 49, 3.9),
// ];



const useStyles= makeStyles(()=>
createStyles({
    root:{
        padding:'0px 0px 0px 60px',
        margin:'auto',  
        
    },
   
listContainer:{
    fontWeight:500,
    fontSize:' 0.8571428571em',
    textAlign:'center',
},
lists:{
    display:'inline-block',
    color:'#737373'
},
infoList:{  
    color:'#333333',
    display:'inline-block',
},
lien:{
    textDecoration:'none',
    color:'#5600e3',   
},
payementButtonDiv:{
  marginTop:'1.5em',
     border:'1px solid  #d9d9d9',
     borderRadius: '5px',
     paddingLeft:'15px',
     paddingRight:'15px',
     paddingBottom:'15px'
     
},
checkoutHeader:{
    marginTop:'-10px',
    backgroundColor:'white',
    paddingLeft:'5px',
    paddingRight:'5px',
   color:' #333333',
   fontSize:'0.9em',
   fontWeight:500,
   
},
paymentButton: {
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
    padding: '8px 24px',
    fontSize: '15px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#5600e3',
      opacity: 0.6,
    },
  },
  googlePaybutton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
    color: '#fff',
    transition: 'all 0.3s ease',
    fontFamily: '"DIN Next",sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
    textTransform: 'initial',
    letterSpacing: '0.5px',
    border: '1px solid #f2f2f2',
    borderRadius: '3px',
    fontSize: '17px',
    padding: '10px 24px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#000000',
      opacity: 0.6,
    },
  },
  paypalButton: {
    backgroundColor: '#ffcc00',
    borderColor: '#ffcc00',
    color: '#fff',
    fontStyle: 'normal',
    textTransform: 'initial',
    letterSpacing: '0.5px',
    border: '1px solid #f2f2f2',
    borderRadius: '3px',
    padding: '10px 24px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#e6b800',
      opacity: 0.6,
    },
  },
  divider:{
    marginTop:'2.5em',
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    borderTop:'1px solid  #d9d9d9',

  },
  checkoutDivider:{
    marginTop:'-10px',
    backgroundColor:'white',
    paddingLeft:'5px',
    paddingRight:'5px',
   color:' #737373',
   fontSize:'0.7em',
   fontWeight:500,   
},
contactInfoGrid:{
  marginTop:'-0.1428571429rem',
marginBottom:'-0.1428571429rem'

},
contactInfoHeader:{
  fontSize:'1.1757142857em',
  fontWeight:'normal', 
  color:' #333333',
},
contactInfoPara:{
  fontSize:'14px',
  fontWeight:'normal', 
  color:' #545454',
  textAlign:'right'

},
loginLink:{
  textDecoration:'none',
    color:'#5600e3',  
},
emailTextField:{
  marginTop:'-0.1428571429rem',  
},
checkBoxLabel:{
  fontSize:'10px',
  fontWeight:400, 
  color:' #545454',
},
ShippingTitle:{
  fontSize:'1.1757142857em',
  fontWeight:'normal', 
  color:' #333333',
},
ShippingtButton: {
  backgroundColor: '#5600e3',
  color: '#fff',
  transition: 'all 0.3s ease',
  fontWeight: 500,
  fontStyle: 'normal',
  textTransform: 'initial',
  letterSpacing: '0.5px',
  border: '1px solid transparent',
  borderRadius: '5px',
  padding: '1.3em 1.7em',
  fontSize: '0.8571428571em',
  
  '&:hover': {
    backgroundColor: '#5600e3',
    opacity: 0.6,
  },
},
policyList:{
  fontWeight:500,
    fontSize:' 0.7571428571em',
    paddingLeft:'0px'
  
},
secondGRID:{
  position:'relative', 
  borderLeft:' 2px solid #e6e6e6',
  paddingLeft:'44px',
  paddingTop:'53px',
  // '&::after': {
  //   content: `''`,
  //   position:'absolute',
  //   top:0,
  //   bottom:0,
    
  //   width:'112.5%',  
  //  left:0,
    background: '#f7f7f7'},
container: {
  maxHeight: 240,
},
discountProduct:{
  paddingTop:'17px',
  paddingBottom:'25px',
  borderBottom:'1px solid #e6e6e6'
},
discoutButton: {
  backgroundColor: '#5600e3',
  color: '#fff',
  transition: 'all 0.3s ease',
  fontWeight: 500,
  fontStyle: 'normal',
  textTransform: 'initial',
  letterSpacing: '0.5px',
  border: '1px solid transparent',
  borderRadius: '5px',
  padding: '0.6em 1.7em',
  fontSize: '0.8571428571em',
  
  '&:hover': {
    backgroundColor: '#5600e3',
    opacity: 0.6,
  },
},
ProductPrice:{
  paddingTop:'17px',
  paddingBottom:'25px',
  borderBottom:'1px solid #e6e6e6',
  fontWeight:500,
    fontSize:' 0.8571428571em',
    color:'#737373'
},
totalPrice:{
  paddingTop:'17px',
  fontWeight:500,
    fontSize:' 0.8571428571em',
    color:'#737373'
},



})
);

const CheckoutPage = () => {
const classes= useStyles();
const [state, setState] = React.useState({
  checked: true,  });
  const [country, setCountry] = React.useState('Morocco');


  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
    return (
       <>
       <div>
      <div className={classes.root}>
          <Grid container>
       <Grid item xs={12} sm={12} md={7}  style={{ paddingRight:'60px',paddingTop:'53px',}}  >
       
                <div  style={{ textAlign:'center'}}> 
              <a href='/'>
                  <img src={logo} alt='logo' height='60' width='153' />
                </a>
                </div>
                <div className={classes.listContainer}>
                    <ul ><li className={classes.lists}>
                        <a href='/' className={classes.lien}>
                        Cart 
                        </a>
                       <span style={{ paddingRight:'5px'}}>{'>'}</span> 
                       </li>
                       <li className={classes.infoList} >Information <span style={{ paddingRight:'5px'}}>{'>'}</span></li>
                       <li className={classes.lists}>Shipping  <span style={{ paddingRight:'5px'}}>{'>'}</span></li>
                       <li className={classes.lists}>Payment </li> 
                    </ul>
                    </div>     
                
                <div  className={classes.payementButtonDiv}>
                  <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
                 <h2 className={classes.checkoutHeader}>Express chekout</h2></div>
                <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={4}>
                    <Button className={classes.paymentButton} >
                    <span >
                        ShopPay</span>
                    </Button>
                    </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Button className={classes.googlePaybutton}>
                <img src={googlePay} alt='logo' height='22'  />
                </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                <Button className={classes.paypalButton}>
                <img src={paypal} alt='logo'height='22'    />
                </Button>
                </Grid>
                </Grid>
                </div>
                <div className={classes.divider}>
                <h2 className={classes.checkoutDivider}>OR</h2>
                </div>
                <Grid  container spacing={3}className={classes.contactInfoGrid}>
                 <Grid item xs={7}>
                 <h2 className={classes.contactInfoHeader}>Contact information</h2>
                 </Grid>
                 <Grid item xs={5}>
                  <p className={classes.contactInfoPara}>Already have an account? <a href='/' className={classes.loginLink}> Log in</a></p> 
                 </Grid>
                </Grid>
      
                <form  noValidate autoComplete="off">
      
                <TextField id="outlined-basic" label='Email' variant="outlined" fullWidth={true}  margin='dense' size='medium' />
                 </form>
                 <FormControlLabel className={classes.checkBoxLabel}
               control={<Checkbox checked={state.checked} onChange={handleChange1} name="checked" color="primary" size="small" className={classes.checkBoxLabel} />}
                label="Keep me up to date on news and exclusive offers"  />
                <div style={{marginTop:'25px'}}>
                <h2 className={classes.ShippingTitle}>Shipping address</h2>
               
                <form  noValidate autoComplete="off">
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={6}>
                <TextField     
                 label="First Name" variant="outlined" margin='dense' size='medium' fullWidth={true}
                     />
                     </Grid>
                     <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="Last Name" variant="outlined" margin='dense' size='medium'fullWidth={true}
                />
                </Grid>
                </Grid>
                <TextField
                 label="Adress" variant="outlined" margin='dense' size='medium'fullWidth={true}
                />
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={6}>
                <TextField     
                 label="Postal code" variant="outlined" margin='dense' size='medium' fullWidth={true}
                     />
                     </Grid>
                     <Grid item xs={12} sm={6} md={6}>
                <TextField
                 label="City" variant="outlined" margin='dense' size='medium'fullWidth={true}
                />
                </Grid>
                </Grid>
                </form>
                <TextField
                 label="Country/Region" variant="outlined" margin='dense' size='medium'fullWidth={true} select  value={country} onChange={handleChange2}>
                   {countries.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
               </TextField>      
          </div>
          <div style={{marginTop:'20px'}}>
            <Grid container spacing={3} style={{display:'flex' , alignItems: 'baseline'}}>
              <Grid item xs={12} sm={12} md={8}>
          < a  href='/' className={classes.loginLink}>{'<'} Return to cart</a></Grid>
          <Grid item xs={12} sm={12} md={4} >
          <Button className={classes.ShippingtButton} >
                    <span >
                       Continue to Shipping</span>
                    </Button> 
          </Grid>
          </Grid>
          </div>     
          <div  style={{marginTop:'2.7em',borderTop:'1px solid  #d9d9d9',}}>
          <ul  className={classes.policyList}>
                      <li className={classes.lists}>
                        <a href='/' className={classes.lien}  style={{paddingRight:'15px'}}>Refund policy </a>
                       </li>
                       <li className={classes.lists}>
                        <a href='/' className={classes.lien} style={{paddingRight:'15px'}}>Privacy policy </a>
                       </li>
                       <li className={classes.lists}>
                        <a href='/' className={classes.lien}>Terms of services </a>
                       </li>
                       
                    </ul>
            </div>
       </Grid> 
         <Grid item  sm={5} md={5} className={classes.secondGRID} >
          <div  style={{marginRight:'20px',}}>
           <TableContainer   className={classes.container}>
      <Table  aria-label="simple table" size='medium'>
        {/* <TableHead>
            <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow> 
         </TableHead>  */}
        <TableBody>
          {coffeMakerList.map((row) => (
            <TableRow key={row.imageUrl}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.SalePrice}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
       <div  className={classes.discountProduct}>
         <Grid container spacing={2}>
           <Grid  item xs={9}>
           <form  noValidate autoComplete="off">
           <TextField
                 label="discount code" variant="outlined" margin='dense' size='medium'fullWidth={true}  />
              </form>
           </Grid>
           <Grid  item xs={3}>
           <Button className={classes.discoutButton}   style={{marginTop:'6px'}} >
                    <span >
                       Apply</span>
                    </Button> 
           </Grid>
         </Grid>
       </div>
       <div className={classes.ProductPrice}> 
      <Grid container spacing={3}>
        <Grid item xs={3}><span>Subtotal</span></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}><span style={{color:' #333333'}}>$99.97 </span></Grid>
        <Grid item xs={3}><span>Shipping</span></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={4}><span style={{fontSize:' 0.7571428571em',}}>calcuated at next step </span></Grid>
      </Grid>
       </div>
       <div  style={{paddingTop:'17px'}}>
       <Grid container spacing={3}>
        <Grid item xs={3}><span>Total</span></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={4}><span style={{ fontWeight:500, fontSize:' 0.7571428571em', color:'#737373'}}>USD </span>
        <span  style={{ fontWeight:500, fontSize:'1.6em'}}> $99.97 </span></Grid></Grid></div>
          </div>
    
       </Grid>
       </Grid>
       
       
       </div>
       </div>
       </>
    );
};

export default CheckoutPage;