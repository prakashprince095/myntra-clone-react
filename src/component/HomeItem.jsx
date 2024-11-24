import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const HomeItem = ({ item }) => {
  const bagItem = useSelector((store) => store.bagSlice);
  const containsElement = bagItem.includes(item.id);
  console.log("the value of the elemnt is isFound", containsElement);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    console.log("the handleAddToBag is invoked ", item.id);
    dispatch(bagActions.addToBag(item.id)); // Correct action call
  };
  const handleRemoveElement = () => {
    console.log("the handle Remove the Element");
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
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
      {containsElement ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveElement}
        >
          Remove <MdDelete />
        </button>
      ) : (
        <button
          type="button "
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          Add to Bag <IoIosAddCircle />
        </button>
      )}
    </div>
  );
};
export default HomeItem;
