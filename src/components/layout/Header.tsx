import React from 'react'
import logo from "/public/logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <div className='flex justify-between items-center py-6  px-20'>
      <Link href={"/."}>
        <Image className='w-44' src={logo} alt="logo"/>
        </Link>
        <ul className='flex gap-x-10'>
            <li className='text-lg'>
            <Link href={"/Categorys/female"}> 
            Female
            </Link>
            </li>
            <li className='text-lg'>
              <Link href={"/Categorys/male"}> Male</Link>
              </li>
            <li className='text-lg'>
              <Link href={"/Categorys/kids"}>Kids</Link>
              </li>
            <li className='text-lg'>
              <Link href={"/Products"}>All Products</Link></li>
        </ul>
        <div className=" h-10 w-10 rounded-full bg-slate-100 flex justify-center items-center" >
          <ShoppingCart />
        </div>
    </div>
  )
}

