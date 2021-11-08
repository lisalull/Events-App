import axios from "axios";
import EventResponse from "../models/EventResponse";

const key = process.env.REACT_APP_EVENT_KEY || "";

export const getLocalEvents = (location: string): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events", {
      params: {
        apikey: key,
        geoPoint: location,
      },
    })
    .then((response) => {
      return response.data;
    });
};
