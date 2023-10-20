import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/styles/variables.scss'
import { useState,useEffect } from 'react'
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal,setSubTotal]=useState(0)
  useEffect(() => {
    
    try {
      if(localStorage.getItem("cart"))
      {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
        console.log(localStorage.getItem("cart"))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
  
    
  }, [])

  const saveCart = (myCart) => {
    const cartString = JSON.stringify(myCart);
    localStorage.setItem("cart", cartString);
    let subt = 0;
    let keys = Object.keys(myCart);

    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }
    setSubTotal(subt);

  }



  const addtoCart =(itemCode,qty,price,name,size,variant)=>{
    let newCart= cart;
    if(itemCode in cart)
    {
         newCart[itemCode].qty=cart[itemCode].qty + qty
    }
    else{newCart[itemCode]={qty:1,price,name,size,variant}}
    setCart(newCart)
    console.log(newCart)
    saveCart(newCart)
  }

  const removeFromCart =(itemCode,qty,price,name,size,variant)=>{
    let newCart=cart;
    if(itemCode in cart)
    {
         newCart[itemCode].qty=cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0)
    {delete newCart[itemCode]}
    setCart(newCart)
    saveCart(newCart)
  }
    

  const clearCart=()=>{setCart({}),saveCart({})}
  

  return <> 
  <Navbar cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
  <Component cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/></>
}
