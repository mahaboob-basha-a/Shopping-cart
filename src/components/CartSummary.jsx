import React from 'react'

const CartSummary = ({progress,subTotal}) => {
  return (
    <div className='p-6 py-1 md:w-[60%] w-full'>
        <h2 className='font-semibold text-xl'>Cart Summary</h2>
        <div className='py-4 px-3 bg-white rounded-sm shadow space-y-2'>
            <div className='flex justify-between items-center'>
                <span className='font-medium'>Subtotal:</span>
                <span className='font-medium'>₹{subTotal}</span>
            </div>
            <div className='text-gray-300 border'></div>
            {subTotal < 1000 && <div className='p-2 bg-slate-100 rounded-md space-y-2'>
                <p className='text-sm'>Add ₹{1000 - subTotal} more to get a FREE Wireless Mouse!</p>
                <div className='bg-gray-300 rounded-full h-3'>
                    <p style={{width:`${progress}%`}} className={`h-full transition-all duration-1000 rounded-full bg-blue-500`}></p>
                </div>
            </div> }
            {subTotal >= 1000 && <p className='text-md'>
                You got a free Wireless Mouse!
            </p> }
        </div>
    </div>
  )
}

export default CartSummary