import {useDispatch,useSelector} from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart=()=>{
    const dispatch=useDispatch()
    const cartItems=useSelector(state=>state.cart.items)
    if(cartItems.length===0)return <div className='text-center p-4 m-4'>Your cart is empty add some food to your cart</div>
    return (
        <div className='text-center p-4 mt-4'>
            <div className='text-2xl font-bold'>Cart</div>
            <button onClick={()=>{dispatch(clearCart())}} className='text-white p-2 rounded-lg bg-red-400'>Clear Cart</button>
        <div className='w-6/12 mx-auto'>
        <ItemList items={cartItems} />
        </div>
        </div>
    )
}
export default Cart