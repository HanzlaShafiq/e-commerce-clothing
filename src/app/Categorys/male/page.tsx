import React from 'react'
import ProductCard from '@/components/layout/ProductCard'
import m1 from "/public/m1.png"
import m2 from "/public/m2.png"
import f4 from "/public/f4.png"

export default function ProductList() {
  return (
    <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-10 my-8 w-full px-20'>
      <ProductCard tital="abc"type='Jackets' price={225} Img={m1}/>
      <ProductCard tital="abc"type='Sweater' price={195} Img={m2}/>
      <ProductCard tital="abc"type='Pants' price={175} Img={f4}/>
      </div>
      )
}