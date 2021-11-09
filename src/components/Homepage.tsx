import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Event from "../models/Event";
import { filterEvents, getLocalEvents } from "../services/EventService";
import "./Homepage.css";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Homepage = () => {
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  const name: string | null = new URLSearchParams(useLocation().search).get(
    "name"
  );

  const city: string | null = new URLSearchParams(useLocation().search).get(
    "city"
  );

  const date: string | null = new URLSearchParams(useLocation().search).get(
    "date"
  );

  useEffect(() => {
    if (!name && !city && !date) {
      navigator.geolocation.getCurrentPosition((response) => {
        const coords = `${response.coords.latitude},${response.coords.longitude}`;
        setLocation(coords);
        getLocalEvents(coords).then((response) => {
          setEvents(response._embedded.events);
        });
      });
    } else {
      filterEvents({ name, city, date }).then((response) => {
        setEvents(response._embedded.events);
      });
    }
  }, [name, city, date]);

  return (
    <div className="Homepage">
      <SearchForm />
      <h2>Events in your area: </h2>
      <ResultList events={events} />
    </div>
  );
};

export default Homepage;
