import { FormEvent, useContext, useState } from "react";
import BucketListContext from "../context/BucketListContext";
import "./BucketList.css";
import ResultList from "./ResultList";
import sadFace from "../assets/sadface.png";
import Event from "../models/Event";

const BucketList = () => {
  const { bucketList } = useContext(BucketListContext);
  const [filteredList, setFilteredList] = useState<Event[]>([...bucketList]);

  const sortHandler = (e: FormEvent) => {
    e.preventDefault();
    setFilteredList(
      bucketList.sort((a, b) =>
        a.dates.start.localDate > b.dates.start.localDate ? 1 : -1
      )
    );
    console.log(filteredList);
  };

  return (
    <div className="BucketList">
      <h2>Bucket List Events</h2>
      <form onSubmit={sortHandler}>
        <label htmlFor="sort">Filter by: </label>
        <select name="sort" id="sort">
          <option value="date">Date</option>
        </select>
        <button>Sort</button>
      </form>
      {filteredList.length > 0 ? (
        <ResultList events={filteredList} />
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
