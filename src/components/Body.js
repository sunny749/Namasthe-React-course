import RestaurantCard,{pramotedResCard} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const {loggedInUser,setLoggedIn}=useContext(UserContext)

  const [searchText, setSearchText] = useState("");
  const PramotedResCard=pramotedResCard(RestaurantCard)
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    // Optional Chaining
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const netWorkStatus=useOnlineStatus()
  if(netWorkStatus===false)return <h1>please check the connection</h1>
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-10">
      <div className="flex">
        <div className="py-4 m-4">
          <input
            type="text"
            data-testid='searchInput'
            className='p-1 rounded-lg border border-solid border-black'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-4 rounded-lg px-4 py-2 bg-green-200"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
        <button
            className="ml-4 rounded-lg px-4 py-2 bg-gray-200"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) =>res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
            <input data-testid='user' className="mx-4 border p-2 rounded-lg border-black" type="text" value={loggedInUser} onChange={(e)=>setLoggedIn({loggedInUser:e.target.value})}/>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={'/restaurent/'+restaurant.info.id}>{restaurant.info.pramoted?<PramotedResCard resData={restaurant}/>:<RestaurantCard resData={restaurant} />}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;