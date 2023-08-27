import { RES_LOGO } from "../utils/constants";

const ResCards = (props) => {
  const {ResData : {data : { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime }}} = props
  return(
    <div className="res-card">
      <img className="res-logo" src={RES_LOGO+cloudinaryImageId}
        ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

export default ResCards;