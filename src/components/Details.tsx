import { useEffect, useState } from "react";
import { useParams } from "react-router";

import SingleEventResponse from "../models/SingleEventResponse";
import { getEventDetails } from "../services/EventService";
import "./Details.css";

interface RouteParams {
  id: string;
}

const Details = () => {
  const [event, setEvent] = useState<SingleEventResponse>();
  const id = useParams<RouteParams>().id;
  useEffect(() => {
    getEventDetails(id).then((response) => {
      setEvent(response);
    });
  }, [id]);

  let time: string | undefined = event?.dates.start.localTime;
  if (time) {
    let splitTime = time.split(":");
    let hours = parseInt(splitTime[0]);
    let minutes = splitTime[1];
    if (hours > 12) {
      hours = hours - 12;
      time = `${hours}:${minutes} PM`;
    } else {
      time = `${hours}:${minutes} AM`;
    }
  }

  return (
    <div className="Details">
      <h2>Details of {event?.name}</h2>
      <img src={event?.images[0].url} alt="" />
      <div>
        <p>Date: {event?.dates.start.localDate}</p>
        <p>Time: {time}</p>
        <p>
          Price Range:{" "}
          {event?.priceRanges
            ? `${event?.priceRanges[0].min} - ${event?.priceRanges[0].max}`
            : "TBD"}
        </p>
        <p>{event?._embedded.venues[0].name}</p>
        <p>
          {event?._embedded.venues[0].address.line1},{" "}
          {event?._embedded.venues[0].city.name},{" "}
          {event?._embedded.venues[0].state.stateCode}
        </p>
      </div>
      <p>{event?.info}</p>
      <p>{event?.pleaseNote}</p>
      <a href={event?.url!} className="ticketmaster">
        <p>See event on TicketMaster</p>
      </a>
    </div>
  );
};

export default Details;
