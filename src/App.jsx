import React, { useEffect, useState } from 'react'
import Products from './components/Products'
import CartSummary from './components/CartSummary'
import CartItems from './components/CartItems'
import { PRODUCTS } from './assets/data'
import { toast, ToastContainer } from 'react-toastify'

const App = () => {
  const [productData,setProductsData] = useState(PRODUCTS);
  const [cartData,setCartData] = useState([]);
  const [subTotal,setSubTotal] = useState(0);
  const [progress,setProgress] = useState(0);

  const handleProductQuantityInc = (id)=>{
    const updateProductQuantity = productData.map(item=>{
      if(item.id === id){
        return {...item,quantity:item.quantity+1}
      }
      return item
    })
    setProductsData(updateProductQuantity)
  }
  const handleProductQuantityDec = (id)=>{
    const updateProductQuantity = productData.map(item=>{
      if(item.id === id && item.quantity > 1){
        return {...item,quantity:item.quantity-1}
      }
      return item
    })
    setProductsData(updateProductQuantity)
  }

  const handleAddToCart = (cartItem) =>{
    const itemExist = cartData.find(item=>{
      return item.id === cartItem.id
    })
    if(itemExist){
      const updateProductQuantity = cartData.map(item=>{
        if(item.id === cartItem.id){
          return {...item,quantity:item.quantity+1}
        }
        return item
      })
      setCartData(updateProductQuantity)
    }else{
      setCartData(prev=>[...prev,cartItem])
    }
  }

  const handleCartInc = (id) =>{
    const updateProductQuantity = cartData.map(item=>{
      if(item.id === id){
        return {...item,quantity:item.quantity+1}
      }
      return item
    })
    setCartData(updateProductQuantity)
  }
  const handleCartDec = (id,quantity) =>{

    if(quantity === 0){
      const removeItem = cartData.filter(item=>item.id !== id)
      
      return setCartData(removeItem)
    }
    const updateProductQuantity = cartData.map(item=>{
      if(item.id === id){
        return {...item,quantity:item.quantity-1}
      }
      return item
    })
    setCartData(updateProductQuantity)
  }

  useEffect(()=>{
    const subTotal = cartData.map((prev)=>{

      return (prev.price*prev.quantity)
    })
    const total = subTotal.reduce((prev,cur)=> prev+cur,0)
    setSubTotal(total)
    const progress = Math.floor(Math.min((total/1000)*100,100))
    setProgress(Math.max(progress,0))
    if(subTotal >= 1000){
      toast.success("FREE GIFT Added Successfully")
    }
  },[cartData])

  return (
    <div className='py-4 px-8 bg-gray-200 w-full max-md:w-full flex flex-col items-center'>
      <h1 className='text-2xl font-semibold text-center'>Shopping Cart</h1>
      <Products productData={productData} handleProductQuantityInc={handleProductQuantityInc} handleProductQuantityDec={handleProductQuantityDec} handleAddToCart={handleAddToCart} />
      <CartSummary subTotal={subTotal} progress={progress} />
      <CartItems cartData={cartData} handleCartInc={handleCartInc} handleCartDec={handleCartDec} subTotal={subTotal} />
      <ToastContainer />
    </div>
  )
}

export default App