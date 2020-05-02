import React from "react";
import { makeTimeString } from "../util/helpers";

const EventListing = (props) => {
  const { title, startTime, endTime, description, location, people } = props;
  console.log("props", props);
  return (
    <>
      <div className="event-listing">
        <h4>
          {makeTimeString(startTime)} - {makeTimeString(endTime)} {title}
        </h4>
      </div>
      <div className="eventDetails">
        <p>
          <strong>{description}</strong>
        </p>
        <p>
          @ {location}, with {people}
        </p>
      </div>
    </>
  );
};

export default EventListing;
