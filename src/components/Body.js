import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../utils/appData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";

const Body = () => {

    const[listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterBySearchList, setFilterBySearchList] = useState([]);

    const handleGetData = async () => {
         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.872315040853184&lng=78.75272217779278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
         const data = await response.json()
         console.log(data)
         setListOfRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilterBySearchList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        handleGetData()
        console.log('use effect')
    }, [])

    if(listOfRestaurant.length === 0){
        console.log('reslist empty')
        return (
            <Shimmer />
        )
    }

    const handleSortingOfRestaurant = () => {
       console.log("i am clicked")
       const filterResList = listOfRestaurant.filter(restaurant  => restaurant.info.avgRatingString > 4)
       setFilterBySearchList(filterResList)
    }

    const handleSearch = () => {
        const filterBySearch = listOfRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterBySearchList(filterBySearch)
    }

  return (
    <>
      <div style={{marginLeft: "22px"}}>
            <input className="input-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search by restaurant name"></input>
            <button className="search-btn" onClick={handleSearch}>Search</button>
            <button className="sort-btn" onClick={handleSortingOfRestaurant}>Top Rated Restaurant</button>
      </div>
      <div className="restaurant-container">
        {filterBySearchList.map((restaurant) => {
          return (
          <NavLink to={`restaurants/${restaurant.info.id}`} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></NavLink>  
          );
        })}
      </div>
    </>
  );
};

export default Body