import { useContext } from "react";
import { Link } from "react-router-dom";
import BucketListContext from "../context/BucketListContext";
import Event from "../models/Event";
import "./Result.css";

interface Props {
  event: Event;
}

const Result = ({ event }: Props) => {
  const { addToBucket, removeFromBucket, isInBucket } =
    useContext(BucketListContext);
  return (
    <div className="Result">
      <p className="event-name">{event.name}</p>
      <img src={event.images[0].url} alt="event" />
      <Link
        className="details-link"
        to={`/events/${encodeURIComponent(event.id)}/details`}
      >
        <p>See more details</p>
      </Link>
      <p>
        Add to Bucket List!{" "}
        {!isInBucket(event?.id) ? (
          <i className="fas fa-star" onClick={() => addToBucket(event)}></i>
        ) : (
          <i
            className="fas fa-star bucketed"
            onClick={() => removeFromBucket(event.id)}
          ></i>
        )}
      </p>
    </div>
  );
};

export default Result;
