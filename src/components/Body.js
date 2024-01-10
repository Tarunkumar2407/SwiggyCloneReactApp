import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../utils/appData";

const Body = () => {
    return (
      <div className="restaurant-container">
      {
          restaurantList.map((restaurant) => {
              return(
                  <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
              )
          })
      }
      </div>
    );
  };

export default Body