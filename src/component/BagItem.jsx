import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";

const BagItem = ({ item }) => {
  const disptach = useDispatch();
  const handleRemoveFromBag = () => {
    console.log("handle remove from bag is being executed ");
    disptach(bagActions.removeFromBag(item.id));
  };
  // const item = {
  //   company: "Peter England",
  //   item_name: "Jeans",
  //   current_price: 3999,
  //   original_price: 5999,
  //   discount_percentage: "33%",
  //   return_period: "30 days ",
  //   delivery_date: "30 Dec",
  // };
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src="../${item.image}" />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            (${item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemoveFromBag}>
        <MdDelete />
      </div>
    </div>
  );
};
export default BagItem;
