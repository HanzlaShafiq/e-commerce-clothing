import React from 'react'
import ProductCard from '@/components/layout/ProductCard'
import { Products } from '@/utils/mock'
import f5 from "/public/f5.png"
import f3 from "/public/f3.png"
import f4 from "/public/f4.png"
import { StaticImageData } from 'next/image'

export default function ProductList() {
  const productsChecks= Products.slice(0,3);

  return (
    <div className='flex justify-evenly mt-10'>
      {
      
     productsChecks.map((product)=>(
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
