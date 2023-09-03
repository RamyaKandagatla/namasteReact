import { RES_LOGO } from "../utils/constants";

const ResCards = (props) => {
  const {ResData : {info : { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, areaName }}} = props
  return(
    <div className="res-card">
      <img className="res-logo" src={RES_LOGO+cloudinaryImageId}
        ></img>
      <h3>{name}</h3>
      <h4>{areaName}</h4>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default ResCards;