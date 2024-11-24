import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/ItemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
const FetchItems = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fetchStatus);
  // console.log("the value of the currently fetching status is ", fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    // dispatch(fetchStautsAction.currentlyFetching);

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());

        dispatch(itemsActions.addInitialItems(items[0]));
        // console.log("Items fetched", items[0]);
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
