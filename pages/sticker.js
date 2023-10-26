import Link from 'next/link'
import React from 'react'
import product from "@/models/product"
import mongoose from 'mongoose'

const stickers = ({products}) => {
  return (
    <div className="main_container ">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            {" "}
            {Object.keys(products).map((item) => {
              return (
                <div class=" m-4" key={products[item]._id}>
                  <div class="  p-4 w-full shadow-md m-4">
                    <Link
                      href={`/product/${products[item].slug}`}
                      class="block relative h-48 rounded overflow-hidden" >
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={products[item].img}
                      />
                    </Link>
                    <div class="mt-4">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].category}
                      </h3>
                      <Link href={`/product/${products[item].slug}`}>
                        <h2 class="text-gray-900 title-font text-lg font-medium">
                          {products[item].title}
                        </h2>{" "}
                      </Link>
                      <p class="mt-1">${products[item].price}</p>

                      <p class="mt-1">
                      {products[item].color.includes('red') &&<button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('blue') &&<button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('black') &&<button className="border-2 border-gray-300 ml-1 bg-black-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('green') &&<button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('yellow') &&<button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('purple') &&<button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      </p>
                      <p class="mt-1">
                      {products[item].size.includes('S') && <span className='border border-green-600 mx-1 p-1'>S</span>}
                      {products[item].size.includes('M') && <span className='border border-green-600 mx-1 p-1'>M</span>}
                      {products[item].size.includes('L') && <span className='border border-green-600 mx-1 p-1'>L</span>}
                      {products[item].size.includes('XL') && <span className='border border-green-600 mx-1 p-1'>XL</span>}
                      {products[item].size.includes('XXL') && <span className='border border-green-600 mx-1 p-1'>XXL</span>}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products=await product.find({category:'sticker'})
  let stickers={}
  for(let item of products)
  {
      if(item.title in stickers)
      {
            if(!stickers[item.title].color.includes(item.color) && item.availableQty>0)
            {
              stickers[item.title].color.push(item.color)
            }

            if(!stickers[item.title].size.includes(item.size) && item.availableQty>0)
            {
              stickers[item.title].size.push(item.size)
            }

            
      }
      else
      {
          stickers[item.title]=JSON.parse(JSON.stringify(item))
          if(item.availableQty>0)
          {
              stickers[item.title].color=[item.color]
              stickers[item.title].size=[item.size]
          }
          else {
            // Initialize color and size as empty arrays when availableQty is 0
            stickers[item.title].color = [];
            stickers[item.title].size = [];
          }
      }
  }

  return {
    props:{products:(stickers)},
  }
}


export default stickers
