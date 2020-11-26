import React from 'react';
import { createStyles, Grid, makeStyles } from '@material-ui/core';
import logo from'../assets/logo.png';


 


const useStyles= makeStyles(()=>
 createStyles({
        root:{
        paddingRight:'30px',
        paddingLeft:'30px', 
        fontFamily:'Arial,Helvetica,sans-serif!important',
      
        },
   logodiv:{
  textAlign:'center',
  paddingTop:'15px',
  marginBottom:'100px',
  borderBottom:'1px solid #d9d9d9 ',
   } ,   
   header:{
       margin:'0px',
       padding:'0px',
       marginBlockStart: '0em',
       marginBlockEnd: '0em',
       marginInlineStart: '0px',
       marginInlineEnd: '0px',
       fontSize: '12px', 
       textTransform: 'capitalize',
       color:'#999',
       }, 
       table:{
       width:'100%',
       borderBottom:'1px solid #d9d9d9',
       borderCollapse:'collapse',
       
       },
       

 }

 )

);
function Cart(){
    const classes= useStyles();
    return(
     <div className={classes.root}>
     <div className={classes.logodiv}>
            <a href='/'>
                  <img src={logo} alt='logo' height='42' width='100' />
                </a>
              </div>
      <Grid container spacing={3}>
     <Grid item xs={12} sm={8} md={8}>
   <h3 >My Cart</h3>
    <div  style={{borderTop:'1px solid #d9d9d9'}}>
<table className={classes.table}>
<thead className={classes.header}><tr   className={classes.table}><th style={{padding:'10px'}}  >item</th>
 <th >price</th>
 <th>qty</th>
 <th>total</th>
 </tr> 
</thead>

 <tr  style={{fontSize: '14px', textTransform: 'capitalize',color:'#999',}} className={classes.table}>
 <td style={{padding:'10px',position:'relative'}} >
        <div style={{display:'inline-block'}}>
 <img style={{display:'inline-block'}}  src='https://picsum.photos/120/150' alt='logo' /></div>
 <div style={{display:'inline-block',position:'absolute',top:0,marginLeft:'10px'}} >
 <p  >title of product</p>
 <p style={{fontSize: '12px'}}>variations of product</p> 
 <button style={{ position:'absolute',bottom:-90}}>remove</button>       
</div>
 </td>
 <td>hjhjhk</td>       
 <td>hjhjhk</td>       
 <td>hjhjhk</td>              
</tr>   
<tr   className={classes.table}>
 <td style={{padding:'10px'}} >
        <div style={{display:'inline-block'}}>
<img src='https://picsum.photos/120/150' alt='logo'  /></div>
<div   style={{display:'inline-block'}}>
 <p>title of product</p>
 <p>variations of product</p> 
 <button>remove</button>       
</div>
 </td>
 <td>hjhjhk</td>       
 <td>hjhjhk</td>       
 <td>hjhjhk</td>              
</tr>    

</table>  
</div>
 </Grid><Grid item xs={12} sm={4} md={4}></Grid>

     </Grid>
    </div>
    );
   }
export default Cart; 