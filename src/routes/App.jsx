import Header from "../component/Header";
import Footer from "../component/Footer";
import HomeItem from "../component/HomeItem";
import { Outlet } from "react-router-dom";
import FetchItems from "../component/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LoadingSpinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus) || [];
  console.log("the value of the fetch status is ", fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
