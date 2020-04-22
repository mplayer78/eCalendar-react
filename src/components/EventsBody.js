import React from "react";
import EventListing from "./EventListing";

const EventsBody = ({ events }) => {
  events = events || [];
  return (
    <div className="events-body">
      <div className="events-container">
        {events.length === 0 && "No Appointments"}
        {events.map((v) => (
          <EventListing key={v.id} {...v} />
        ))}
      </div>
    </div>
  );
};

export default EventsBody;
