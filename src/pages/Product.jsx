import React, { useContext } from 'react'
import { Context } from '../context/ShopContext/ShopContext'
import {useParams} from 'react-router-dom'
import BreadCrumbs from '../components/breadcrumbs/BreadCrumbs'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import DescriptionBox from '../components/descriptionbox/DescriptionBox'
import RelatedProducts from '../components/related/RelatedProducts'
const Product = () => {
  const {all_product} = useContext(Context);
   const {productId} = useParams();

   const product = all_product.find((p) => p.id === Number(productId))
  
   return (
    <div>
      <BreadCrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
