import { Products } from "@/utils/mock"
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

import { DiagnosticCategory } from "typescript";


const getProductsDetail =( id:number | string) =>{
  return Products.filter((product) =>product.id == id);
};

export default function Page({ params }: { params: { id: string  } }) {
const result = getProductsDetail(params.id);
  return (
  <div className='flex  flex-wrap mt-16 py-10'>
{
result.map((product)=>(
<div key={product.id} className="flex justify-between gap-6">
  <div>
<Image src={product.image} alt={product.name} />
  </div>
  <div>
    Product Detail
    <p>Name {product.name}</p>
  </div>
  <AddToCart />
 

</div>
  )) 
  
}
</div>

)}