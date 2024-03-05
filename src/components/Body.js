import {useState} from 'react'
import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/Data.js";
const Body = () => {
    const [listOfRestaurents,setRestaurents]=useState(resList)
    const [search,setSearch]=useState('')
    return (
      <div className="body">
        <div className='search-container'>
            <div>
                <input type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search Restaurents' />
                <button onClick={()=>{
                     if(search==='')return
                    let newList=listOfRestaurents.filter(res=>res.data.name.toLocaleLowerCase()===search.toLocaleLowerCase())
                    setRestaurents(newList)
                }}>Search</button>
            </div>
            <button
                onClick={()=>{
                    let newList=listOfRestaurents.filter(res=>res.data.avgRating>4)
                    setRestaurents(newList)
                }}
                className="filter-btn">Top Rated Restaurents</button>
        </div>
        <div className="res-container">
          {listOfRestaurents.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Body