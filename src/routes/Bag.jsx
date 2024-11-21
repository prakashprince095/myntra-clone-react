import BagItem from "../component/BagItem";
import BagSummary from "../component/BagItem";
import Footer from "../component/Footer";
import Header from "../component/Header";
const Bag = () => {
  const item = {
    company: "Peter England",
    item_name: "Jeans",
    current_price: 3999,
    original_price: 5999,
    discount_percentage: "33%",
    return_period: "30 days ",
    delivery_date: "30 Dec",
  };
  const itemSummary = {
    totalItem: 1,
    totalMRP: 2999,
    totalDiscount: 2000,
    finalAmount: 1099,
  };
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem />
          </div>
          <div className="bag-summary">
            <BagSummary itemSummary={itemSummary} />
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;
