import React from "react";
import ResList from "./ResList";

const RestaurantCategory = (props) => {
  /** 
   * here in restaurantcategory component it has its own state and controlled by itself , parent doesn't have control, so it is uncontrolled component.
   * -- if the state is not there here and that is managed from parent, then it is controlled component.
  */
    // const [ showItem, setShowItem ] = React.useState(false);

    const {data, showItem, setShowItem} = props;

    const onHandleClick = () => {
      setShowItem();
    }

    return <div className="my-4 p-2 mx-auto border bg-gray-100 shadow-lg rounded-md border-b-2
     border-b-neutral-300 w-9/12 text-center">
        <div className="justify-between text-start flex font-bold cursor-pointer" 
          onClick={() => onHandleClick()}>
            <div className="text-lg">{data.title} ({data.itemCards.length})</div>
            <div>⬇</div>
        </div>
        {showItem && <div>
          {data.itemCards.map((item) => <ResList key={item.card.info.id} data={item.card.info}/>)}
        </div>}
      </div>
  }

export default RestaurantCategory;