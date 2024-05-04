import React,{createContext, useContext, useState} from 'react'

import all_product from '../../assets/products'

export const Context = createContext(null)



const getDefaultcart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
  }




export const ShopContextProvider = (props) => {
const [cartitems, setcartitems] = useState(getDefaultcart())
console.log(cartitems)

const addCart = (item) => {
  setcartitems((prev)=>({...prev, [item]:prev[item]+1}))
}

const removeCart= (item)=>{
setcartitems((prev)=>({...prev,[item]:prev[item]-1}))
}

const getTotalCart = ()=> {
  let totalAmount = 0;
  for (const item in cartitems){
    if(cartitems[item] > 0)
    {
      let itemInfo = all_product.find((product)=>product.id === Number(item))
      totalAmount += itemInfo.new_price * cartitems[item];
    }
  
  }
  return totalAmount;
}

const getCartNumber = () =>{
let totalItem = 0;
for (const item in cartitems){
  if(cartitems[item]>0){
    totalItem =+ cartitems[item]
  }
}
return totalItem
}
const ValueContext = {all_product, cartitems,addCart, removeCart, getTotalCart, getCartNumber}







  return (

    <div>
      <Context.Provider value={ValueContext}>
       {props.children}
        </Context.Provider>
    </div>
  )
}

export default ShopContextProvider;


