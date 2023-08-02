import React from 'react'
import f1 from "/public/f1.png"
import Image from 'next/image'
import { CardTitle } from '@/components/ui/card'

export default function Promotion() {
  return (
    <div className='py-20'>
      <p className='text-center  text-blue-600 font-bold'>Promotion</p>
      <p className='text-center  text-4xl font-bold py-3'>Our Promotions Events</p>

      <div className='flex py-3 px-6 text-xl bg-gray-200'>
        <ul>
          <li>
        <p>GET UP TO 60%</p>
        </li>
        <li>
        <p>For the summer season</p>
        </li>
        </ul>
        <Image src={f1} alt='female1'/>
        </div>
        
    </div>

  )
}
