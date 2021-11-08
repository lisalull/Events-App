import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./Result.css";

interface Props {
  event: Event;
}

const Result = ({ event }: Props) => {
  return (
    <div className="Result">
      <p>{event.name}</p>
      <img src={event.images[0].url} alt="event" />
      <Link
        className="details-link"
        to={`/events/${encodeURIComponent(event.id)}/details`}
      >
        <p>See more details</p>
      </Link>
      <p>Add to Bucket List!</p>
    </div>
  );
};

export default Result;
