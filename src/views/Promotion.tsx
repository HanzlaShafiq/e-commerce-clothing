import React from 'react'
import f1 from "/public/f1.png"
import Image from 'next/image'
import { CardTitle } from '@/components/ui/card'

export default function Promotion() {
  return (
    <div>Promotion
        <Image src={f1} alt='female1'/>
<CardTitle> female products</CardTitle>
    </div>

  )
}
