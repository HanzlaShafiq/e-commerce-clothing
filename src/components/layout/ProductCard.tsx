import React from 'react'
import Image, { StaticImageData } from 'next/image'
 

export default function ProductCard( props:{tital: string, type:string ,price:number,Img:StaticImageData}) {
  return (
    <div>
        <Image src={props.Img} className='h-64 w-64' alt='Product' />
        <p className='font-bold text-lg '>{props.tital}</p>
        <p className='text-gray-400 font-bold'> { props.type}</p>
      <p className=' text-lg '> &#36; {props.price}</p>
    </div>
  )
}
