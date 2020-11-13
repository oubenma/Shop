
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import "../assets/css/style.css";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Axios from 'axios';
import { RouteComponentProps } from "react-router-dom"
import NewArrivalsSection from "./NewArrivalsSection";



const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  title: {
    fontSize: "30px",
    display: "block",
    paddingTop: "12px",
    marginBottom: " 12px",
    lineHeight: "1,5",
    textRendering: "optimizeLegibility",
    color: "#202020",
    fontFamily: '"ITC Caslon No 224",serif',
    fontWeight: 900,
    fontStyle: "normal",
    textTransform: "initial",
    boxSizing: "border-box",
    listStyle: " Arabic-indic",
    webkitFontSmoothing: "antialiased",
  },
  star: {
    lineHeight: "1,5",
    fontSize: "25px",
  },
  spanTitle1: {
    fontSize: "16px",
    lineHeight: "1,5",
    color: "#202020",
    fontFamily: '"Poppins" sans-serif',
    display: "inline-block",
    paddingBottom: "15px",
    verticalAlign: "middle",
  },
  price: {
    marginBottom: "17px",
    paddingBottom: "17px",
    borderBottom: "1px solid #f2f2f2",
    wordSpacing: "3px",
    fontFamily: '"DIN Next",serif',
    fontWeight: 700,
    fontStyle: "normal",
    textTransform: "initial",
    letterSpacing: " 0.5px",
    fontSize: "20px",
    display: "block",
    lineHeight: "1,5",
    textRendering: "optimizeLegibility",
    color: "#202020",
    boxSizing: "border-box",
    listStyle: " Arabic-indic",
    webkitFontSmoothing: "antialiased",
  },
  quantity: {
    fontFamily: '"DIN Next",sans-serif',
    fontStyle: "normal",
    fontSize: "21px",
    lineHeight: " 1.5",
    color: "#202020",
    webkitFontSmoothing: "antialiased",
    webkitTextSizeAdjust: "100%",
    textRendering: "optimizeLegibility",
    fontWeight: 500,
    marginBottom: "4px",
    display: "block",
  },
  quantityCase: {
    height: "39px",
    backgroundColor: "#f7f7f7",
    borderColor: "#f7f7f7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  button1: {
    backgroundColor: "#f7f7f7",
    borderColor: "#f7f7f7",
    color: "#202020",
    transition: "all 0.3s ease",
    fontFamily: '"DIN Next",sans-serif',
    fontWeight: 700,
    fontStyle: "normal",
    textTransform: "initial",
    letterSpacing: "0.5px",
    border: "1px solid #f7f7f7",
    borderRadius: "3px",
    lineHeight: "37px",
    textAlign: "center",
    fontSize: "27px",
    width: "40px",
    height: "39px",
    outline: "none",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#f7f7f7",
      opacity: 0.6,
    },
  },

  input: {
    border: "none",
    background: "transparent",
    borderColor: "#f7f7f7",
    textAlign: "center",
    outline: "none",
    fontFamily: '"DIN Next",serif',
    fontWeight: 400,
    fontStyle: "normal",
    textTransform: "initial",
    letterSpacing: " 0.5px",
    fontSize: "17px",
    display: "block",
    lineHeight: "1,5",
    textRendering: "optimizeLegibility",
    color: "#202020",
    boxSizing: "border-box",
    listStyle: " Arabic-indic",
    webkitFontSmoothing: "antialiased",
  },
  button2: {
    padding: "16px 24px 24px 16px",
    width: "470px",
    height: "59px",
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
    lineHeight: 1.5,
    display: "inline-block",
    textAlign: "center",
    fontSize: "17px",
    marginTop: "30px",
    marginBottom: "17px",
    outline: "none",

    "&:hover": {
      backgroundColor: "#5600e3",
      opacity: 0.6,
    },
  },

  list: {
    margin: "0 0 17px 17px",
    listStylePosition: "outside",
    fontFamily: '"DIN Next",sans-serif',
    fontStyle: "normal",
    fontSize: "19px",
    lineHeight: " 1.5",
    color: "#202020",
    webkitFontSmoothing: "antialiased",
    webkitTextSizeAdjust: "100%",
    textRendering: "optimizeLegibility",
    fontWeight: 500,
    marginBottom: "17px",
    display: "block",
  },
  social: {
    display: "flex",
    alignItems: "stretch",
  },
  btn: {
    height: "27px",
    padding: "6px 10px 6px 10px",
    marginRight: " 4px",
    fontFamily: '"DIN Next",sans-serif',
    fontStyle: "normal",
    textTransform: "initial",
    letterSpacing: "0.5px",
    border: "1px solid #f2f2f2",
    borderRadius: " 3px",
    lineHeight: "1.5",
    fontWeight: 700,
    textAlign: "center",
    fontSize: "17px",
    backgroundColor: "#f7f7f7",
    borderColor: "#f7f7f7",
    color: "#202020",
    outline: "none",
    whiteSpace: "normal",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#3b5998",
      borderColor: "#3b5998",
      color: "#fff",
      opacity: 0.6,
    },
  },
});

// type TParams = { id: string };
export default function SideDescription(props:any) {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const incrementProduct = () => {
    setCount(count + 1);
  };
  const decrementProduct = () => {
    if (count < 1) return;
    setCount(count - 1);
  };
  const handleQuantity = (e: any) => {
    setCount(e.target.value);
  };
  interface User{
    
    title:string;
    oldPrice:number;
    salePrice:number;
    quantity:number;
    value:number;
    description:string

  };
  const [productsData, setProductsData] = useState<User>({title: '',oldPrice:0,salePrice:0,quantity:0,value:0,description:''});

   const id=props.match.params.id
  useEffect(() => {
    getProducts();
  }, []);
  
  const getProducts = ()=>{
    Axios.get(`http://localhost:1111/Products/${id}`
    ).then(
      (response)=>{
      
      setProductsData( response.data);
      console.log(response.data)
      console.log(props.match)
    }
    ).catch((error)=>{
      console.log(error);
    });
  }; 
  return (
    <div>
      <Paper className={classes.root}>
  <Typography className={classes.title}><h6 >{productsData.title}</h6></Typography>
        <Typography>
          <Rating
            className={classes.star}
            name="read-only"
            value={productsData.value}
            readOnly
            size="small"
          />
          <span className={classes.spanTitle1}>(8)</span>
        </Typography>
        <Typography className={classes.price}>
          <span style={{ textDecoration: "line-through" }}> {productsData.oldPrice}</span>
          &nbsp;
          <span style={{ color: "#5600e3" }}>{productsData.salePrice}</span>
        </Typography>
        <Typography className={classes.quantity} style={{ cursor: "pointer" }}>
          Quantity
        </Typography>
        <div className={classes.quantityCase}>
          <button className={classes.button1} onClick={decrementProduct}>
            −
          </button>
          <input
            className={classes.input}
            type="number"
            value={count}
            onChange={handleQuantity}
          />
          <button onClick={incrementProduct} className={classes.button1}>
            +
          </button>
        </div>
        <button className={classes.button2}>
          <ShoppingCartSharpIcon style={{ color: "#fff" }} />
          <span style={{ verticalAlign: "top" }}> ADD TO CART</span>
        </button>
        <Typography
          className={classes.quantity}
          style={{ fontSize: "19px", marginBottom: "17px" }}
        >
          {productsData.description}
        </Typography>
        <Typography>
          <strong>
            <span
              className={classes.title}
              style={{ fontSize: "25px", color: "#000000" }}
            >
              FEATURES:
            </span>
          </strong>
          <ul className={classes.list}>
            <li> 1 pair of foot sleeves</li>
            <li>Made entirely of silicone</li>
            <li>Designed to repair and moisturize dry, cracked heels</li>
            <li>Stretchable</li>
            <li>Fits easily and comfortably around heels</li>
            <li>Holds moisturizing lotion on feet for maximum absorption</li>
            <li>Reusable</li>
            <li>One size fits most</li>
          </ul>
        </Typography>
        <Typography>
          <strong>
            <span
              className={classes.title}
              style={{ fontSize: "25px", color: "#000000" }}
            >
              FREE WORLDWIDE SHIPPING!
            </span>
          </strong>
          <ul className={classes.list}>
            <li>
              Please allow 2-4 weeks for delivery to the United States,Canada,
              United Kingdom, Australia, New Zealand and all European Union
              Countries.
            </li>
            <li>
              Please allow 2-6 weeks for delivery to the rest of the world.
            </li>
          </ul>
        </Typography>
        <div className={classes.social}>
          <Link
            href="//Facebook.com"
            className={classes.btn}
            underline="none"
            target="_blanck"
            title="Share on Facebook"
          >
            <FacebookIcon
              style={{
                color: "#000000",
                verticalAlign: "sub",
              }}
              fontSize="small"
            />{" "}
            Share
          </Link>
          <Link
            href="//twitter.com/"
            className={classes.btn}
            underline="none"
            target="_blanck"
            title="Tweet on Twitter"
          >
            <TwitterIcon
              style={{ color: "#000000", verticalAlign: "sub" }}
              fontSize="small"
            />{" "}
            Twitter
          </Link>
          <Link
            href="//www.pinterest.com"
            className={classes.btn}
            underline="none"
            target="_blanck"
            title="Pin on Pinterest"
          >
            <PinterestIcon style={{ color: "#000000", verticalAlign: "sub" }} />{" "}
            Pin it
          </Link>
        </div>
      </Paper>
    </div>
  );
}
