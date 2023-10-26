import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsFillBagFill  } from "react-icons/bs";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const checkout = ({cart,addtoCart,removeFromCart,clearCart,subTotal}) => {
  return (
    <div className="main_container ">
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl '>1. Delivery Details</h2>
      <div className='mx-auto flex'>
        <div class=" mb-4 w-1/2">
        <label htmlFor="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div class=" ml-2 w-1/2">
        <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='mx-auto flex'>
      <div class="  w-full">
        <label htmlFor="Address" class="leading-7 text-sm text-gray-600">Address</label>
        <textarea rows={3}  type="Address" id="Address" name="Address" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"/>
        </div>
        </div>
        <div className='mx-auto flex'>
        <div class=" mb-4 w-1/2">
        <label htmlFor="Phone" class="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text" id="Phone" name="Phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div class=" ml-2 w-1/2">
        <label htmlFor="City" class="leading-7 text-sm text-gray-600">City</label>
        <input type="City" id="City" name="City" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>

      <div className='mx-auto flex'>
        <div class=" mb-4 w-1/2">
        <label htmlFor="State" class="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="State" name="State" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div class=" ml-2 w-1/2">
        <label htmlFor="Pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="Pincode" id="Pincode" name="Pincode" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>

      <h2 className='font-semibold text-xl '>2. Review Cart items</h2>
      <div className={`sidebar my-2  bg-pink-100 p-3 `}>
      <ol>
        {Object.keys(cart).length==0 && <div className='my-2 text-base font-semibold'>No item in the Cart</div>}
        {Object.keys(cart).map((k)=>{
         return <li key={k}>
         <div className='item flex my-5'>
          <div className='w-1/5 font-semibold'>{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
          <div className='flex font-semibold items-center justify-center w-1/12 text-lg'>
        

            <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-pink-500'/>
            <span className='mx-2 text-sm' >
            {cart[k].qty}
            </span>
            <AiFillPlusCircle onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}  className='cursor-pointer text-pink-500'/>
          </div>
         </div>
        </li>})}
        <span className='total font-bold'>Subtotal: €{subTotal}</span>
      
      </ol>

    </div>

    <div>    
      <Link href={"/checkout"}> <button className='flex   text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm '><BsFillBagFill className="m-1"/>  Pay: €{subTotal} </button></Link></div>
      
    </div>
  )
}

export default checkout
