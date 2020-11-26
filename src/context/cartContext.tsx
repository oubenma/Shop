import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';
import Product from '../pages/ProductPage';

interface Product{
  title:string;
    oldPrice:number;
    salePrice:number;
    quantity:number;
    value:number;
    description:string
    imageUrl: string;
    variations:string;
  };

interface ContextOptions {
  // products: Product[];
  cart:Product[];
  // setCart: (product:Product) => void;  
  addToCart: (product:Product) => void;
  // requestProducts: () => void;  
}
export const CartContext = createContext<ContextOptions>({
  cart:[],
  // setCart: (product:Product) => {}, 
  // products:[],
  // requestProducts: () => {},
  addToCart: () => {},
});
export const ApplicationProvider = (props: any) => {
  // const [products, setProducts] = useState<Product []>([]);
  const [cart, setCart] = useState<Product[]>([]);
  // const requestProducts = ()=>{
    // Axios.get(`http://localhost:1111/products/p`
    // ).then(
    //   (response)=>{
     
    //     setProducts( response.data);
    //     console.log(response.data);
    // }
    // ).catch((error)=>{
    //   console.log(error);
    // });
  //   Axios.get(`http://localhost:1111/Products/2`
  //   ).then(
  //     (response)=>{
      
  //     setProducts( response.data);
  //     console.log(response.data)
  //     console.log(props.match)
  //   }
  //   ).catch((error)=>{
  //     console.log(error);
  //   });
  //  };

 const addToCart = (product:Product) => {
 const newCard:Product[]=[...cart,product]
    setCart(newCard); };
  // useEffect(() => {
  //   requestProducts(); 
     
  // }, []);
  const values = {
  //   products,
  //   requestProducts,
    cart,
     addToCart,
  };
  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
  }
