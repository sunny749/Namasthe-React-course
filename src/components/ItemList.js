import {CDN_URL} from '../utils/contents'
import {useDispatch} from 'react-redux'
import { addItem } from '../utils/cartSlice'
const ItemList =({items})=>{
    const dispatch=useDispatch()
    const handleAddToCart=(item)=>{
        dispatch(addItem(item))
    }
    return (
        <div>
            {
                items.map(item=>{
                    return <div data-testid='items' key={item.card.info.id} className='flex justify-between items-center text-left p-2 border-solid border-b-2 border-gray-300 ' >
                        <div className='w-9/12'>
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price/100||item.card.info.defaultPrice/100}</span>
                        <div className="text-xs text-gray-500">{item.card.info.description}</div>
                        </div>
                        <div className='p-4 w-3/12 relative'>
                        <button onClick={()=>handleAddToCart(item)} className='bg-black bottom-0 left-[30%] p-2 rounded-lg text-white absolute'>Add +</button>
                        <img src={CDN_URL+item.card.info.imageId} alt={item.card.info.name}  />
                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default ItemList