import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props
    const {name, avgRatingString, cuisines} = resData?.info
    const {deliveryTime} = resData.info.sla
    // console.log(deliveryTime)
  return (
    <div>
      <div className="res-card">
        <img
          className="food-image"
          src={RES_URL + resData.info.cloudinaryImageId}
          alt="food-image"
        />
        <div className="res-content">
          <h3>{name}</h3>
          <h4>{avgRatingString} stars</h4>
          <h4>{resData.info.sla.deliveryTime} mins</h4>
          <h4>{cuisines.join(", ")}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard