import React from 'react'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'

import { StaticImageData } from 'next/image'

export default function ProductList() {
  const productsChecks= Products.slice(0,3);

  return (
    <div className='py-20'>
      <section>
      <p className='text-center  text-blue-600 font-bold'>PRODUCTS</p>
        <h1 className='text-center  text-4xl font-bold py-3 pb-8'>Check What We Have</h1>
        </section>
        <section className='flex justify-center '>
      {
     productsChecks.map((product)=>(
     <ProductCard
      key={product.id} 
      type={product.type}
      tital={product.name}
       category={product.category}
        price={product.price} 
        Img={product.image as StaticImageData}
        id={product.id}
        />
     ))}
     </section>
    </div>
  )
}
