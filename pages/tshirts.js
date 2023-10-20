import Link from 'next/link'
import React from 'react'
import product from "@/models/product"
import mongoose from 'mongoose'

const tshirts = ({products}) => {
  return (
    <div className='main_container '>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
 <div className='flex flex-wrap'>    { products.map((item)=>{
         return  <div class=" m-4" key={item._id}>
                <div class="  p-4 w-full shadow-md m-4">
                <Link href={`/product/${item.slug}`} class="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={item.img}/>
                  </Link>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                  <Link href={`/product/${item.slug}`} ><h2 class="text-gray-900 title-font text-lg font-medium">{item.title}</h2>  </Link>
                  <p class="mt-1">${item.price}</p>
                  <p class="mt-1">{item.size}</p>
                </div>
                </div>
          </div>
      })}
      </div>
  
   
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products=await product.find()

  return {
    props:{products:JSON.parse(JSON.stringify(products))},
  }
}


export default tshirts
