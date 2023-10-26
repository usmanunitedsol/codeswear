import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBagFill  } from "react-icons/bs";
import { MdAccountCircle  } from "react-icons/md";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Navbar = ({logout,user,cart,addtoCart,removeFromCart,clearCart,subTotal}) => {

  const [open, setopen] = useState(false)
  const [dropdown, setdropdown] = useState(false)
  const toggleCart =()=>{
    setopen(!open)
  }
  return (
    <div className='main_container shadow-xl sticky top-0 bg-white z-10'>
    
    <div className='head flex flex-col md:flex-row md:justify-start justify-center items-center relative  py-0 sm:py-2 '>  
    <div className='logo mr-10 sm:mx-5'>
    <Link  href={'/'}>
        <Image src='/images/logo.webp' width={200} height={50}/>
     </Link>
    </div>
    <nav className='nav'>
      <ul className='flex items-center space-x-6 font-bold md:text-sm'>
        <Link href={"/tshirts"}><li>Tshirts</li></Link>       
        <Link href={"/hoodies"}><li>Hoodies</li></Link>      
        <Link href={"/sticker"}><li>Stickers</li></Link>
        <Link href={"/mugs"}><li>Mugs</li></Link> 
      </ul>
    </nav>

   
        <div className={`cart flex absolute items-center right-0 top-4 cursor-pointer mx-5`}  >
     <div  onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}}>
     {dropdown &&  <div onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} className='absolute right-10 border bg-white shadow-lg  top-7 py-4 rounded-md px-5 w-32 '>

          <ul>
            <Link href={'/'}><li className='py-1 hover:text-pink-700 font-bold text-sm'>My Acount</li></Link>
            <Link href={'/'}><li className='py-1 hover:text-pink-700 font-bold text-sm'>Orders</li></Link>
            <li onClick={logout} className='py-1 hover:text-pink-700 font-bold text-sm'>Logout</li>
          </ul>

        </div>}
        { user.value &&  <MdAccountCircle  className='text-xl md:text-3xl mx-2'/>}
        </div> 
      


      { !user.value && <Link href={"/login"}> <button className='mx-3 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm '>Login</button></Link>}
          <FaShoppingCart  onClick={toggleCart}  className={`2xl md:text-3xl  ${!open ? "block" : "hidden "}`}/>
        </div>
   
    <div className={`sidebar absolute top-4 right-0   bg-pink-100 p-10 ${open ? "block " : "hidden  "}`}>
      <h2 className='font-bold text-xl'> Shopping Cart</h2>
      <span onClick={toggleCart} className='cursor-pointer absolute top-2 right-2 text-2xl text-pink-500'><AiFillCloseCircle/></span>
      <ol>
        {Object.keys(cart).length==0 && <div className='my-2 text-base font-semibold'>No item in the Cart</div>}
        {Object.keys(cart).map((k)=>{
         return <li key={k}>
         <div className='item flex my-5'>
          <div className='w-2/3 font-semibold'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
          <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
        

            <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/>
            <span className='mx-2 text-sm' >
            {cart[k].qty}
            </span>
            <AiFillPlusCircle onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}  className='cursor-pointer text-pink-500'/>
          </div>
         </div>
        </li>})}
      </ol>
      <div className='total font-bold my-2'>Subtotal: €{subTotal}</div>
      <div className='flex'>
      <Link href={"/checkout"}> <button className='flex mx-auto  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm '><BsFillBagFill className="m-1"/>  Checkout</button></Link>
      <button onClick={clearCart} className='flex ml-3 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm  '><BsFillBagFill className="m-1"/>  Clear all</button>
    </div>
    </div>
    </div>
    </div>
     
  )
}

export default Navbar
