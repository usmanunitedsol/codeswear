import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBagFill  } from "react-icons/bs";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Navbar = () => {

  const [open, setopen] = useState(false)
  const toggleCart =()=>{
    setopen(!open)
  }
  return (
    <div className='main_container shadow-xl'>
    
    <div className='head flex flex-col md:flex-row md:justify-start justify-center items-center relative  py-2'>  
    <div className='logo mx-5'>
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
    <div className={`cart absolute right-0 top-4 cursor-pointer mx-5 ${!open ? "block" : "hidden "}`}  onClick={toggleCart} >
      <FaShoppingCart  className='2xl md:text-3xl'/>
    </div>
    <div className={`sidebar absolute top-6 right-0   bg-pink-100 p-10 ${open ? "block " : "hidden  "}`}>
      <h2 className='font-bold text-xl'> Shopping Cart</h2>
      <span onClick={toggleCart} className='cursor-pointer absolute top-2 right-2 text-2xl text-pink-500'><AiFillCloseCircle/></span>
      <ol>
        <li>
         <div className='item flex my-5'>
          <div className='w-2/3 font-semibold'>T shirt -Wear the Code</div>
          <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
        

            <AiFillMinusCircle className='cursor-pointer text-pink-500'/>
            <span className='mx-2 text-sm' >
              1
            </span>
            <AiFillPlusCircle className='cursor-pointer text-pink-500'/>
          </div>
         </div>
        </li>
      </ol>
      <div className='flex'>
      <button className='flex mx-auto mt-10 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm '><BsFillBagFill className="m-1"/>  Checkout</button>
      <button className='flex mx-auto mt-10 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm '><BsFillBagFill className="m-1"/>  Clear all</button>
    </div>
    </div>
    </div>
    </div>
     
  )
}

export default Navbar
