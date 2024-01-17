import { useState, useEffect } from "react"
import { REST_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const response = await fetch(REST_MENU_URL + resId);
        const data = await response.json();
        setRestInfo(data);
      };
    return restInfo;
}

export default useRestaurantMenu;