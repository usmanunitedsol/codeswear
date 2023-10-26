import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import '@/styles/variables.scss'
import { useState,useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const router=useRouter()
  const [subTotal,setSubTotal]=useState(0)
  const [user, setuser] = useState({value:null})
  const [key, setkey] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
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

    const token=localStorage.getItem('token');
    if(token)
    {
      setuser({value:token})
      setkey(Math.random())
    }
  
    
  }, [router.query])

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

  const logout=()=>{
    localStorage.removeItem("token")
    setuser({value:null})
    setkey(Math.random())
    router.push('/login')
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
    
 const buyNow=(itemCode,qty,price,name,size,variant) =>
 {
  let newCart={itemCode:{qty:1,price,name,size,variant}}
  setCart(newCart)
  saveCart(newCart)
  router.push('/checkout')
 }

  const clearCart=()=>{setCart({}),saveCart({})}
  

  return <> 
   <LoadingBar
        color='#f11946'
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  <Navbar logout={logout} user={user} key={key} cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
  <Component cart={cart} buyNow={buyNow} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/></>
}
