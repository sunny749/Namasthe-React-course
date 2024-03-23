    import {useEffect,useState}from 'react'
    import Shimmer from './Shimmer'
    import {useParams} from 'react-router-dom'
    import { MENU_API } from '../utils/contents'
    import useFetch from '../Hooks/useFetch'
    import RestaurantCategorie from './RestaurentCategorie'

    const RestaurentMenu=()=>{
        const {resId}=useParams()
        const resInfo=useFetch(MENU_API,resId)
        const [show,setShow]=useState(null)
        const showHandler=(index)=>{
            if(show===index){
                setShow(null)
                return
            }
            setShow(index)
        }
        if(resInfo==undefined) return <Shimmer></Shimmer>
        const { name, cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
        const categories=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
        return (
            <div className="text-center">
                <h1 className='text-2xl my-6 font-bold' data-testid='hotel name'>{name}</h1>
                <h3 className='font-bold text-lg'>{cuisines.join(',')}-{costForTwoMessage}</h3>
                {categories.map((c,i)=><RestaurantCategorie show={show===i?true:false} index={i} showHandler={showHandler} key={i} data={c.card.card} />)}
            </div>
        )
    }
    export default RestaurentMenu