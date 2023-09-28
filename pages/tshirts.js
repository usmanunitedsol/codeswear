import Link from 'next/link'
import React from 'react'

const tshirts = () => {
  return (
    <div className='main_container '>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md m-4">
        <Link href={"/product/wear-the-code"} class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
          </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <Link href={"/product/wear-the-code"} ><h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>  </Link>
          <p class="mt-1">$16.00</p>
        </div>
      </div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md m-4">
        <Link href={"/product/wear-the-code"} class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
          </Link>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <Link href={"/product/wear-the-code"} ><h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>  </Link>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
     
    </div>
  </div>
</section>
    </div>
  )
}

export default tshirts
