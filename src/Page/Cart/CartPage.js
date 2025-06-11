import React ,{useEffect} from 'react'
import CartItem from '../../Components/Cart/CartItems'
import CartCheckout from './../../Components/Cart/CartCheckout';
import GetAllProductFromCart from '../../Hooks/CartHooks/GetAllProductFromCart';
 
const CartPage = () => {
  const [GetProductFromCart,items,totalprice]=GetAllProductFromCart()
  useEffect(() =>{
    const products=async ()=>
    {
      await GetProductFromCart()
    }
    products()
   },[])
  
  return (
    <div style={{minHeight:"670px"}} className='container'>
<div className='row m-4  ' style={{fontSize:'1.3rem', fontWeight:'700'}}>
    
Shopping Cart
    
</div>  
<div className=' row d-flex justify-content-center'>

<div className='col-12 col-md-8 '>
    <div className="cart-items">
      {  items  && items.length > 0  ? items.map((item, index) => (
        <CartItem key={index} item={item} />
      )) : <h3>no product in cart</h3>}
    </div>
    </div>    
<div className='col-6 col-md-4'>
<CartCheckout totalprice={totalprice}/>
    </div>    
</div>
  </div>
  )
}

export default CartPage
