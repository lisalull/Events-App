import { useContext } from "react";
import BucketListContext from "../context/BucketListContext";
import "./BucketList.css";
import ResultList from "./ResultList";
import sadFace from "../assets/sadface.png";

const BucketList = () => {
  const { bucketList } = useContext(BucketListContext);
  console.log(bucketList);

  return (
    <div className="BucketList">
      <h2>Bucket List Events</h2>
      {bucketList.length > 0 ? (
        <ResultList events={bucketList} />
      ) : (
        <div className="empty-bucket">
          <p className="no-events">There are no events in your bucket!</p>
          <img src={sadFace} alt="sad face" />
        </div>
      )}
    </div>
  );
};

export default BucketList;
