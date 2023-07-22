import React from 'react'
import ProductCard from '@/components/layout/ProductCard'
import f5 from "/public/f5.png"
import f3 from "/public/f3.png"
import f4 from "/public/f4.png"

export default function ProductList() {
  return (
    <div className='flex justify-evenly mt-10'>
      <ProductCard tital="abc" price={45} Img={f5}/>
      <ProductCard tital="abc" price={45} Img={f3}/>
      <ProductCard tital="abc" price={45} Img={f4}/>
      

    </div>
  )
}
