import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles,} from '@material-ui/core/styles';
import {  Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import {coffeMakerList} from '../components/constants';
import ReviewsSection from '../components/ReviewsSection';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      paddingTop: '60px',
      paddingBottom: '60px',

      marginRight: '71.667px',
      marginLeft: '71.667px',
    },
    root: {
      backgroundColor: '#f2f2f2',
    },
    container2: {
      paddingTop: '40px',
      paddingBottom: '40px',
      marginRight: '71.667px',
      marginLeft: '71.667px',
     
    },
    container3: {
      paddingBottom: '20px',
      marginRight: '30.667px',
      marginLeft: '30.667px',
      
      
    },
    container4: {
      paddingBottom: '60px',
      paddingTop: '60px',
      
      marginRight: '71.667px',
      marginLeft: '71.667px',
    },
    container5: {
      paddingBottom: '60px',
      paddingTop: '60px',
      marginRight: '71.667px',
      marginLeft: '71.667px',
  
    },
    paper: {
      height: '1733px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'red',
    },
    paper1: {
      height: '620px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'red',
    },
    paper2: {
      height: '110px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'blue',
    },
    paper3: {
      height: '130px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: '#ff99ff',
    },
    paper4: {
      height: '110px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: '#66ccff',
    },
    paper5: {
      height: '344px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: '#4dffdb',
      position:'relative'
    },
   
  })
);
function Product() {
  const classes = useStyles();
  const [hajar, setHajar] = useState(0);
  useEffect(() => {
    console.log('rani khdmt');
  }, []);
 



  return (
    <>
  <NavBar />

      <div className={classes.root}>
       <div className={classes.container}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              container
              direction='column'
              spacing={2}
            > 
              {/* image galery */}

               <Grid item>
                <Paper className={classes.paper1}>image of thr product</Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper2}>slick part</Paper>
              </Grid> 
              {/* end image gallery */}
             </Grid> 
            <Grid item xs={12} sm={12} md={6}>
              {/* description of the produdct here */}
              <Paper className={classes.paper}>
                description of the product
              </Paper> 

              {/*end  description of the produdct here */}
             </Grid>
          </Grid>
        </div> 
        <div className={classes.container2}>
          <div>partie dyal frequently bought together</div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper3}>togrther bought</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper4}>PRICE of the product</Paper>
            </Grid>
          </Grid> 
         </div> 
         {/* reviews section here */}
          <div className={classes.container3}>
         <ReviewsSection/>
          </div>  
        
 {/*end reviews here */}
        <div className={classes.container4}>
          <div>partie dyla you may also like</div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper5}>XI HAJA</Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper5}> second haja</Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Paper className={classes.paper5}> third haja</Paper>
            </Grid>
          </Grid>
        </div> 
        <div className={classes.container5}>
          <div >partie dyal similar products</div>
          <Grid container spacing={3}>
        {coffeMakerList.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <ProductCard
                OldPrice={product.OldPrice}
                title={product.title}
                SalePrice={product.SalePrice}
                value={product.value}
                imageUrl={product.imageUrl}
              />
            </Grid> 
          );
        })}
      </Grid>
          
        </div> 
      </div>
    </>
  );
}
export default Product;
