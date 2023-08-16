import React from 'react'
import Logo from "/public/Logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { Twitter } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { Linkedin } from 'lucide-react'

function Footer() {
  return (
    <section >
    <div className=' sm:flex justify-evenly flex-col lg:flex-row my-20 gap-x-20 '>
      <ul className='flex flex-col gap-y-3'>
        <li>
          <Image className='w-40' src={Logo}  alt='logo' />
        </li>
        <li>
          <p className=''>Small, artisan label that offers a<br />thoughtfully curated collection of <br />high quality everyday essentials made.</p>
        </li>
        <li className='flex gap-x-4 '>
          <Twitter />
          <Facebook />
          <Linkedin />
        </li>
      </ul>
      <ul className='flex flex-col gap-y-3'>
        <p className='text-slate-500 font-bold'>Company</p>
        <Link href={""}> About</Link>
        <Link href={""}> Terms of Use</Link>
        <Link href={""}> Privacy Policy</Link>
        <Link href={""}> How it Works</Link>
        <Link href={""}> Contact Us</Link>
      </ul>
      <ul className='flex flex-col gap-y-3'>
        <p className='text-slate-500 font-bold'>Support</p>
        <Link href={""}> Support Carrer</Link>
        <Link href={""}> 24h Service</Link>
        <Link href={""}> Quick Chat</Link>
        
      </ul>
      <ul className='flex flex-col gap-y-3'>
        <p className='text-slate-500 font-bold'>Contact</p>
        <Link href={""}> Whatsapp</Link>
        <Link href={""}> Support 24h</Link>
        
      </ul>
      </div>
      <div>
      <hr className='border-black'/>
      <ul className='flex justify-center items-center text-end gap-32 my-10'>
        <li>
        <p>Copyright &copy; 2022 <strong> Dine Market</strong></p>
        </li>
        <li>Design  by.<strong> Weird Design Studio</strong></li>
        <li>Code by. <strong>shabrina12 on github</strong></li>
      </ul>

    </div></section>
  )
}

export default Footer