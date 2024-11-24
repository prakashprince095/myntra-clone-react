import BagSummary from "../routes/BagSummary";
import { useSelector } from "react-redux";
import BagItem from "../component/BagItem";
const Bag = () => {
  const bagItems = useSelector((store) => store.bagSlice);
  const items = useSelector((store) => store.items);
  const finalItem = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
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
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => (
              <BagItem key={item.id} item={item}></BagItem>
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary></BagSummary>
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;
