import React from 'react'
import p1 from "/public/p1.webp"
import p2 from "/public/p2.webp"
import p3 from "/public/p3.webp"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Promotion() {
  return (
    <div className='py-20 '>
      <p className='text-center  text-blue-600 font-bold'>Promotion</p>
      <p className='text-center  text-4xl font-bold py-3 pb-8'>Our Promotions Events</p>
      
      {/*div start for hole*/}
      <div className='flex lg:flex-row sm: flex-col '>


      {/*div start for 1st two image*/}
      <div className=''>



      {/*div for 1st image start*/}
      <div className='items-center flex py-3 px-6 text-xl bg-gray-200 h-52 w-auto '>
        <ul>
          <li>
        <p className='text-3xl font-bold'>GET UP TO 60%</p>
        </li>
        <li>
        <p>For the summer season</p>
        </li>
        </ul>
        <Image src={p1} alt='female1'/>
        </div>
        {/*div end for 1st image*/}

        {/*div start for 2nd image*/}
        <div className='flex-col   px-6  bg-zinc-900 h-52 w-auto text-center '>
          <p className='text-4xl py-6 font-bold text-white'>GET 30% Off</p>
          <p className='text-white '>USE PROMO CODE</p>
          <Button className='bg-zinc-600 font-bold  tracking-[0.4em]'>DINEWEEKENDSALE</Button>
        </div>
        {/*div end for 2nd image */}
        </div >

        {/*div end for 1st two image*/}
        


        <div className='bg-red-100 '>
          {/*div start for 3rd image*/}
          <ul>
          <li>
        <p className='pt-4'>Flex Sweatshirt</p>
        </li>
        <li>
        <p><span className='font-bold line-through'> &#36;100.00</span> <strong> &#36;75.00</strong> </p>
        </li>
        </ul>
        <Image src={p2} alt='female1'/>
        </div>
        {/* div end for 3rd image */}




        {/* div start for 4th image */}
        <div className='bg-gray-200 w-64' >
        <ul>
          <li>
        <p className='pt-4'>Flex Push Button Bomber</p>
        </li>
        <li>
       <p> <span className='line-through'>&#36;225.00</span><strong> &#36;190.00 </strong></p>
        </li>
        </ul>
        <Image src={p3} alt='female1'/>
        </div>
        {/* div start for 4th image */}






    </div>
    {/*div end for hole*/}


    
    </div>


  )
}
