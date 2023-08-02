import React from 'react'
import Image, { StaticImageData } from 'next/image'
 import Link from 'next/link';

export default function ProductCard( props:{
  tital: string;
  type: string;
   category:string;
   price:number;
   Img:StaticImageData;
  id:number;
  }) {
  return (
    <Link href={`/Products/${props.id}`}>
    <div className='py-6'>
        <Image src={props.Img} className='h-64 w-64' alt='Product' />
        <p className='font-bold text-lg '>{props.tital}</p>
        <p className='font-bold text-lg text-slate-500  '>{props.type}</p>
        {/* <p className='text-gray-400 font-bold'> { props.category}</p> */}
      <p className=' text-base font-bold '> &#36; {props.price}</p>
    </div>
    </Link>
  )
}
