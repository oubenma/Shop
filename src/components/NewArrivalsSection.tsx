import React,{ useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { coffeMakerList } from "./constants";
import ProductCard from "./ProductCard";
import Axios from 'axios';
import Link from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f7f7f7",
    padding: "60px",
  },
  title: {
    fontSize: "30px",
    display: "block",
    marginTop: "0px",
    lineHeight: "1.2",
    marginBottom: "12px",
    textRendering: "optimizeLegibility",
    color: "#202020",
    fontFamily: '"ITC Caslon No 224",serif',
    fontWeight: 900,
    fontStyle: "normal",
    textTransform: "initial",
    letterSpacing: "0px",
    textAlign: "center",
    boxSizing: "border-box",
    listStyle: " Arabic-indic",
    webkitFontSmoothing: "antialiased",
  },
  button: {
    backgroundColor: "#5600e3",
    borderColor: "#5600e3",
    color: "#fff",
    transition: "all 0.3s ease",
    fontFamily: '"DIN Next",sans-serif',
    fontWeight: 700,
    fontStyle: "normal",
    textTransform: "initial",
    letterSpacing: "0.5px",
    border: "1px solid #f2f2f2",
    borderRadius: "3px",
    padding: "16px 24px",
    lineHeight: 1.5,
    display: "inline-block",
    textAlign: "center",
    fontSize: "17px",
    marginTop: "30px",
    marginBottom: "60px",
    "&:hover": {
      backgroundColor: "#5600e3",
      opacity: 0.6,
    },
  },
  boxButton: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});


export default function NewArrivalsSection() {
  const classes = useStyles();
 
   interface Product{
    
    id:number;
    title:string;
    oldPrice:number;
    salePrice:number;
    quantity:number;
    value:number;
    description:string;
    imageUrl:string
  
  };
  const [productsData, setProductsData] = useState<Product[]>([]);

  
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = ()=>{
    Axios.get(`http://localhost:1111/products/p`
    ).then(
      (response)=>{
     
      setProductsData( response.data);
    }
    ).catch((error)=>{
      console.log(error);
    });
  };
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>New Arrivals</h2>
      <Grid container spacing={3}>
        {productsData.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={3}>  
           <a href={`/product/${product.id}`}><ProductCard
                OldPrice={product.oldPrice}
                title={product.title}
                SalePrice={product.salePrice}
                value={product.value}
               imageUrl={product.imageUrl}
              /> </a>
            </Grid>
          );
        })}
      </Grid>

      <div className={classes.boxButton}>
        <Button className={classes.button}>View all</Button>
      </div>
    </div>
  );
}
