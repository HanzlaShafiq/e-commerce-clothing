import React from 'react'
import ProductCard from '@/components/layout/ProductCard'
import f1 from "/public/f1.png"
import f2 from "/public/f2.png"
import f3 from "/public/f3.png"
import f4 from "/public/f4.png"
import f5 from "/public/f5.png"
import f6 from "/public/f6.png"
import f7 from "/public/f7.png"
import f8 from "/public/f8.png"
import f9 from "/public/f9.png"

export default function ProductList() {
  return (
    <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-10 my-8  px-20'>
      <ProductCard tital="Brushed Raglan Sweatshirt" type="Sweater" price={195} Img={f1}/>
      <ProductCard tital="Cameryn Sash Tie Dress"type="Dress" price={545} Img={f2}/>
      <ProductCard tital="Flex Sweatshirt"type="Sweater" price={175} Img={f3}/>
      <ProductCard tital="Flex Sweatpants" type='Pants' price={175} Img={f4}/>
      <ProductCard tital="Flex Sweatpants"type='Pants' price={195} Img={f5}/>
      <ProductCard tital="Flex Sweatpants"type='Pants' price={150} Img={f6}/>
      <ProductCard tital="Imperial Alpaca Hoodie"type='Jackets' price={525} Img={f7}/>
      <ProductCard tital="Muscle Tank"type='T Shirts' price={75} Img={f8}/>
      <ProductCard tital="Brushed Bomber"type='Jackets' price={225} Img={f9}/>
      

    </div>
  )
}
