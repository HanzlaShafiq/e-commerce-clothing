import { Products } from "@/utils/mock"
import ProductCard from "@/components/layout/ProductCard"
import { StaticImageData } from "next/image"
import { DiagnosticCategory } from "typescript";


const getProductsByCategory =( category:string) =>{
  return Products.filter((product) =>product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
const result = getProductsByCategory(params.slug);
  return <div className='flex justify-evenly flex-wrap mt-16 py-10'>
{
 result.length>0 ? result.map((product)=>(
  <ProductCard
   key={product.id} 
   tital={product.name}
   type={product.type}
    category={product.category}
     price={product.price} 
     Img={product.image as StaticImageData}
    id={product.id}
    />
  )) :<p> No Product</p>
  
}

</div>
}