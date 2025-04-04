import React from 'react'

const CartItem = ({item,handleCartInc,handleCartDec}) => {
  return (
    <div className='flex justify-between items-center bg-white rounded-md p-3 shadow'>
        <div className='flex flex-col justify-center'>
            <span className='text-md font-medium '>{item.name}</span>
            <span className='text-xs text-gray-400'>{`₹${item.price} x ${item.quantity} =₹${item.price*item.quantity}`}</span>
        </div>
        <div className='flex items-center gap-2'>
                <button className='h-6 w-6 text-white font-semibold text-xl flex items-center justify-center bg-red-500 rounded-sm cursor-pointer' onClick={()=>handleCartDec(item.id,item.quantity-1)}>-</button>
                <span>{item.quantity}</span>
                <button className='h-6 w-6 text-white font-semibold text-xl flex items-center justify-center bg-green-500 rounded-sm cursor-pointer' onClick={()=>handleCartInc(item.id)}>+</button>
        </div>
    </div>
  )
}

export default CartItem