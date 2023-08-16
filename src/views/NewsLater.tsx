import React from 'react'
import Image from 'next/image'
import f1 from "/public/f1.png"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Input } from "@/components/ui/input"


export default function  NewsLater() {
  return (
    <div>
    <div className=' sm:flex-col lg:flex-row flex justify-center items-end pt-32 '>

      {/* div start for lift side */}
    <div className='flex justify-center items-center px-7 py-4  '>

    
      <ul>
        <li className='font-bold py-3'>Using Good Quality Materials</li>
        <li>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</li>
        <li className='font-bold py-3'>Modern Fashion Design</li>
        <li>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</li>
      </ul>
      <ul>
        <li className='font-bold py-3'>100% Handmade Products</li>
        <li>Lorem ipsum dolor sit amt, consectetur adipiscing elit</li>
        <li className='font-bold py-3'>Discount for Bulk Orders</li>
        <li>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</li>
      </ul>
      
      </div>
      {/* div end for lift side */}




    {/* div start for right side */}
    <div className=''>
      <ul>
    <li className='text-5xl ps-28 font-bold   '>Unique and Authentic Vintage Designer Jewellery</li>
    </ul>
    <ul className='pt-10 '>
    <li className='flex justify-center items-center'>
    <Image className='h-72 w-auto' src={f1} alt='female'/>
    <p className='flex-col text-justify  w-72 px-8 leading-loose'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
       The Natural color is the actual natural color of the fiber, undyed and 100% traceable. <br />
       <Button className='rounded-none w-24 p-7'><Link href={"/Products"}>See All Products</Link></Button>
       </p>
       </li>
       </ul>
    </div>
    {/* div end for right side */}
    </div>
    <div>
    </div>


    {/* div start for NewsLatter */}
    <div className=' flex-col text-center py-40'>
      
      <p className='text-3xl font-bold py-8'>Subscribe Our Newsletter</p>
      <p>Get the latest information and promo offers directly</p>
      <p className='flex justify-center py-6 gap-3 '>
      <Input className='w-64 items-center border-black bg-slate-50 rounded-none' type="email" placeholder="Input Email  addrees" />
      <Button className='bg-black shadow-lg rounded-none'>Get Started</Button>
      </p>

    </div>
    {/* div end for NewsLatter */}
    </div>

  )
}
