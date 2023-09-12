import { RES_LOGO } from "../utils/constants";

const ResCards = (props) => {
  const {ResData : {info : { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla }}} = props
  return(
    <div className="border bg-purple-200 w-60 m-2 p-2 rounded-lg hover:bg-green-300">
      <img className="rounded-md" src={RES_LOGO+cloudinaryImageId}
        ></img>
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className="py-2 font-medium">{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default ResCards;