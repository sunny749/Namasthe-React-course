    import {useEffect,useState}from 'react'
    import Shimmer from './Shimmer'
    import {useParams} from 'react-router-dom'
    import { MENU_API } from '../utils/contents'
    import useFetch from '../Hooks/useFetch'

    const RestaurentMenu=()=>{
        const {resId}=useParams()
        const resInfo=useFetch(MENU_API,resId)
        // useEffect(()=>{
        //     fetchResMenu()
        // },[])
        // fetchResMenu=async()=>{
        //     const data=await fetch(MENU_API+resId)
        //     const json=await data.json()
        //     console.log(json)
        //     setResInfo(json)
        // }

        if(resInfo===null) return <Shimmer />
        if(resInfo?.data?.cards[2]===undefined) return <h1 className='py-5 text-center'>Sorry We Are Closed Today</h1>
        const { itemCards }=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        const { name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
        // console.log(itemCards)
        if(itemCards===undefined)return <h1 className='py-5 text-center'>Sorry We Are Closed Today</h1>
        return (
            <div className="p-4 m-4 text-center">
                <h1 className='h1 font-bold'>{name}</h1>
                <h3>{cuisines.join(',')}</h3>
                <h3>{costForTwoMessage}</h3>
                <h2 className='h1 font-bold'>Menu</h2>
                <ul>
                    {itemCards.map(item=>{
                        return <li key={item.card.info.id}>{item.card.info.name}- Rs {item.card.info.price/100||item.card.info.defaultPrice/100}</li>
                    })}
                </ul>
            </div>
        )
    }
    export default RestaurentMenu