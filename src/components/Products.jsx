import React from 'react'
import ProductCard from './ProductCard'

const Products = ({productData,handleProductQuantityDec,handleProductQuantityInc,handleAddToCart}) => {
  return (
    <div className='p-6 space-y-2'>
        <h2 className='font-semibold text-xl'>Products</h2>
        <div className='flex flex-wrap gap-3'>
            {productData.map(item=>{
                return (
                    <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} quantityIncrease={handleProductQuantityInc} quantityDecrease={handleProductQuantityDec} quantity={item.quantity} AddToCart={handleAddToCart} />
                )
            })}
        </div>
    </div>
  )
}

export default Products