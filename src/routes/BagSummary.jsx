import { useSelector } from "react-redux";

const BagSummary = () => {
  // const itemSummary = {
  //   totalItem: 1,
  //   totalMRP: 2999,
  //   totalDiscount: 2000,
  //   finalAmount: 1099,
  // };
  const items = useSelector((store) => store.items);
  const bagSlice = useSelector((store) => store.bagSlice);
  const finalItem = items.filter((item) => {
    const res = bagSlice.indexOf(item.id);
    return res >= 0;
  });
  let totalItem = 0;
  let totalMRP = 0;
  let totalDiscount = 0;
  let convienceFee = 0;
  let finalAmount = 0;

  finalItem.map((res) => {
    totalItem++; // Count the items

    // Add the original price (converted to an integer) to total MRP
    let originalPrice = parseInt(res.original_price, 10);
    totalMRP += originalPrice;

    // Calculate the discount for the current item
    let discountPercentage = parseInt(res.discount_percentage, 10);
    let discount = (originalPrice * discountPercentage) / 100;
    totalDiscount += discount;

    // Convenience fee is assumed to be the original price (same as MRP for simplicity)
    convienceFee += 99;

    // Add the discounted price of the item to the final amount
    finalAmount += originalPrice - discount + convienceFee;
  });

  // Logging results to verify the calculation
  console.log("Total Items:", totalItem);
  console.log("Total MRP:", totalMRP);
  console.log("Total Discount:", totalDiscount);
  console.log("Convenience Fee:", convienceFee);
  console.log("Final Amount:", finalAmount);

  return (
    <>
      <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS ({bagSlice.length} Items) </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹{totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹{convienceFee}</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">₹{finalAmount}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};
export default BagSummary;
