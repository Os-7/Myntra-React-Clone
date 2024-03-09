import { useDispatch, useSelector } from "react-redux"
import { bagAction } from "../store/bagSlice"
import { IoMdAddCircle } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";

const HomeItem = ({item}) => {

  const bagItems = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const elementFound = bagItems.indexOf(item.id) >= 0

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id))
  }
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id))
  }

  return(
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound ? (<button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}><IoMdAddCircle /> Add to Bag</button>) : (<button type="button" className=" btn-add-bag btn btn-danger" onClick={handleRemove}><IoTrashBin /> Remove</button>)}
    </div>
  )
}

export default HomeItem