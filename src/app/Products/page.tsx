import React from 'react'
import ProductCard from '@/components/layout/ProductCard'
import { Products } from '@/utils/mock'
import { StaticImageData } from 'next/image'

export default function ProductList() {
  return (
    <div className='flex justify-evenly flex-wrap mt-16 py-10'>
      {
      
      Products.map((product)=>(
      <ProductCard
       key={product.id} 
       tital={product.name}
        category={product.category}
         price={product.price} 
         Img={product.image as StaticImageData}
         id={product.id}
         />
      ))}
      

    </div>
  )
}
