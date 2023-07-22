import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import heroImg from "/public/heroImg.webp"
import Image from 'next/image'
import brand from "/public/brand.webp"
import brand2 from "/public/brand2.webp"
import brand3 from "/public/brand3.webp"
import brand4 from "/public/brand4.webp"


export default function Hero() {
  return (
    <section className='flex items-center flex-col gap-y-10 lg:flex-row '>
        <div className='flex-1'>
        <Badge className='py-3 px-6  bg-blue-300 text-blue-600 '>70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-7">
           An Industrial Take on Streetwear
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits
    </p>
    <Button className='mt-4 bg-black '>start shoping</Button>

    <ul className='flex gap-x-8 pt-6'>
        <li>
    <Image src={brand} alt='brand'/>
    </li>
    <li>
    <Image src={brand2} alt='brand2'/>
    </li>
    <li><Image src={brand3} alt='brand3'/></li>
    <li><Image src={brand4} alt='brand4'/></li>
    </ul>
        </div>
        <div className='flex-1'>
            <Image src={heroImg} alt='heroImg' />

        </div>
    </section>
  )
}
