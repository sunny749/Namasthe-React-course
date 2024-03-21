// import {CDN_URL} from "../utils/contents";
import CDN_URL from "../utils/contents";
import UserContext from "../utils/UserContext";
import {useContext} from 'react'

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser}=useContext(UserContext)
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
    } = resData?.info;
    const {deliveryTime} =resData?.info?.sla

    return (
      <div className="p-4 m-4 rounded-lg w-[200px]" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="rounded-lg"
          alt="res-logo"
          src={
            CDN_URL+cloudinaryImageId
          }
        />
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4 className="font-bold">{loggedInUser}</h4>
      </div>
    );
  };
  
  export default RestaurantCard