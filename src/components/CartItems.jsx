import React from 'react'
import CartItem from './CartItem'
import { FREE_GIFT } from '../assets/data'

const CartItems = ({cartData,handleCartInc,handleCartDec,subTotal}) => {
  return (
    <div className='md:w-[60%] w-full p-6'>
        <div>
            <h2 className='font-semibold text-xl'>Cart Items</h2>
            {cartData.length>0 && <div className='flex flex-col gap-2'>
                {cartData.map(item=>{
                    return <CartItem key={item.id} item={item} handleCartDec={handleCartDec} handleCartInc={handleCartInc} />
                })}
            </div>}
        </div>
        {!cartData.length > 0 && <div className='bg-white rounded-md p-4 flex flex-col items-center justify-center'>
            <h2 className='text-lg text-gray-500 font-light'>Your cart is empty</h2>
            <p className='text-sm text-gray-400 font-light'>Add some products to see them here!</p>
        </div> }
        {subTotal >= 1000 && <div className='flex justify-between items-center bg-white rounded-md p-3 shadow mt-2'>
            <div className='flex flex-col justify-center'>
                <span className='text-md font-medium '>{FREE_GIFT.name}</span>
                <span className='text-xs text-gray-400'>{`₹${FREE_GIFT.price} x 1 =₹${FREE_GIFT.price*1}`}</span>
            </div>
            <span className='py-1 px-2 rounded-full text-xs font-light text-green-600 bg-green-200'>
                FREE GIFT
            </span>
        </div> }
    </div>
  )
}

export default CartItems