import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';
import Product from '../pages/ProductPage';

interface Product{
  title:string;
    oldPrice:number;
    salePrice:number;
    value:number;
    description:string
    imageUrl: string;
    variations:string;
  };
interface ContextOptions {
  // products: Product[];
  cart:Product[];
  quantity: number;
  addToCart: (product:Product,quantity:number) => void;
  incrementQuantity:()=>void;
  decrementQuqntity:()=>void;
  handleQuantity:(event:any)=>void;
  removeFromCart:(prd:Product)=>void,

}
export const CartContext = createContext<ContextOptions>({
  cart:[],
  quantity:1,
  incrementQuantity:()=>{},
  decrementQuqntity:()=>{},
  handleQuantity:(event:any)=>{},
  removeFromCart:(prd:Product)=>{},
  // setCart: (product:Product) => {}, 
  // products:[],
  // requestProducts: () => {},

 
  addToCart: (product:Product,quantity:number) => {},
});
export const ApplicationProviderCart = (props: any) => {
  // const [products, setProducts] = useState<Product []>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity,setQuantity]=useState<number>(1);
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


  //Add product to cart
 const addToCart = (product:Product,quantity:number) => {
 const newCart:Product[]=[...cart,{...product}]
    setCart(newCart);
   setQuantity(quantity);
   console.log('tester if cqrt is full');
   console.log(cart);};

   //increment qunqtity of product
   const incrementQuantity = () => {
    setQuantity(quantity +1 );
  };
   //decrement qunqtity of product
  const decrementQuqntity = () => {
    if (quantity < 1) return;
    setQuantity(quantity - 1);
  };
  const handleQuantity = (e: any) => {
    setQuantity(e.target.value);
  };
  
  const removeFromCart=(productToRemove:Product) =>{
   setCart(cart.filter((item)=> item!=productToRemove));
  };
    
  useEffect(() => {
  
     
  }, []);
  const values = {
    //  products,
  //   requestProducts,
  quantity,
  incrementQuantity,
  decrementQuqntity,
  handleQuantity,
    cart,
     addToCart,
     removeFromCart,
    
  };
  return (
    <CartContext.Provider value={values }>{props.children}</CartContext.Provider>
  );
  }
