import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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

  return (
    <div className="Details">
      <h2>Details of {event?.name}</h2>
      <img src={event?.images[0].url} alt="" />
      <p>{event?.dates.start.localDate}</p>
      <p>{event?.dates.start.localTime}</p>
      <p>
        ${event?.priceRanges[0].min} - ${event?.priceRanges[0].max}
      </p>
      <p>{event?._embedded.venues[0].name}</p>
      <p>
        {event?._embedded.venues[0].address.line1},{" "}
        {event?._embedded.venues[0].city.name},{" "}
        {event?._embedded.venues[0].state.stateCode}
      </p>
      <p>{event?.info}</p>
      <p>{event?.pleaseNote}</p>
      <a href={event?.url!}>
        <p>See event on TicketMaster</p>
      </a>
    </div>
  );
};

export default Details;
