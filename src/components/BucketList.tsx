import { useContext } from "react";
import BucketListContext from "../context/BucketListContext";
import "./BucketList.css";
import ResultList from "./ResultList";

const BucketList = () => {
  const { bucketList } = useContext(BucketListContext);
  console.log(bucketList);

  return (
    <div className="BucketList">
      <h2>Bucket List Events</h2>
      <ResultList events={bucketList} />
    </div>
  );
};

export default BucketList;
