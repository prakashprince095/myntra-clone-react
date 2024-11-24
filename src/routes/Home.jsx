import { useSelector } from "react-redux";
import HomeItem from "../component/HomeItem";
const Home = () => {
  const items = useSelector((store) => store.items) || [];
  // console.log("the value in the home item is for the ", items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item}></HomeItem>
        ))}
      </div>
    </main>
  );
};
export default Home;
