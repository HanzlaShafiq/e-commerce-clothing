import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Promotion from '@/views/Promotion'


export default function Home() {
  return (
    <div className='px-20'>
   <Hero />
   <Promotion />
   <ProductList />
    </div>
  )
}
