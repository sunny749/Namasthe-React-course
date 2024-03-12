    import {useEffect,useState}from 'react'
    import Shimmer from './Shimmer'
    import {useParams} from 'react-router-dom'
    import { MENU_API } from '../utils/contents'

    const RestaurentMenu=()=>{
        const {resId}=useParams()
        console.log(resId)
        const [resInfo,setResInfo]=useState(null)
        useEffect(()=>{
            fetchResMenu()
        },[])
        fetchResMenu=async()=>{
            const data=await fetch(MENU_API+resId)
            const json=await data.json()
            console.log(json)
            setResInfo(json)
        }
        if(resInfo===null) return <Shimmer />
        const { itemCards }=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        const { name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
        console.log(itemCards)
        if(itemCards===undefined)return <h1 style={{textAlign:'center'}}>Sorry We Are Closed Today</h1>
        return (
            <div className="menu">
                <h1>{name}</h1>
                <h3>{cuisines.join(',')}</h3>
                <h3>{costForTwoMessage}</h3>
                <h2>Menu</h2>
                <ul>
                    {itemCards.map(item=>{
                        return <li key={item.card.info.id}>{item.card.info.name}- Rs {item.card.info.price/100}</li>
                    })}
                </ul>
            </div>
        )
    }
    export default RestaurentMenu