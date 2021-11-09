import { useEffect, useState } from "react";
import Event from "../models/Event";
import { getLocalEvents } from "../services/EventService";
import "./Homepage.css";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

const Homepage = () => {
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      const coords = `${response.coords.latitude},${response.coords.longitude}`;
      setLocation(coords);
      console.log(coords);
      getLocalEvents(coords).then((response) => {
        console.log(response);
        setEvents(response._embedded.events);
      });
    });
  }, []);

  return (
    <div className="Homepage">
      <SearchForm />
      <h2>Events in your area: </h2>
      <ResultList events={events} />
    </div>
  );
};

export default Homepage;
