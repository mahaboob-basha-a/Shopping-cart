import React from 'react'

const ProductCard = ({name,price,quantityIncrease,quantityDecrease,quantity,id,AddToCart}) => {

    const handleCart = () =>{
        const cartItem = {
            id,name,price,quantity
        }
        AddToCart(cartItem)
    }
  return (
    <div className='rounded-md bg-white w-50 p-4 space-y-2 shadow'>
        <span className='font-medium'>{name}</span>
        <div className='flex items-center justify-between'>
            <span className='text-sm'>₹{price}</span>
            <div className='flex items-center gap-2'>
                <button className='h-6 w-6 text-white font-semibold text-xl flex items-center justify-center bg-red-500 rounded-sm cursor-pointer' onClick={()=>quantityDecrease(id)} >-</button>
                <span>{quantity}</span>
                <button className='h-6 w-6 text-white font-semibold text-xl flex items-center justify-center bg-green-500 rounded-sm cursor-pointer' onClick={()=>quantityIncrease(id)} >+</button>
            </div>
        </div>
        <button className={`py-1 px-10 cursor-pointer rounded-md bg-blue-500 text-white text-shadow-md`} onClick={handleCart} >Add to Cart</button>
    </div>
  )
}

export default ProductCard