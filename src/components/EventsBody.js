import React, { useContext } from "react";
import CalendarContext from "../state/context";
import EventListing from "./EventListing";

const EventsBody = ({ events }) => {
  events = events || [];
  const { state, dispatch } = useContext(CalendarContext);
  return (
    <div className="events-body">
      <div className="events-container">
        {events.length === 0 && <h1>No Appointments</h1>}
        {events.map((v) => (
          <EventListing key={v.id} {...v} />
        ))}
      </div>
    </div>
  );
};

export default EventsBody;
