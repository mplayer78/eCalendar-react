import React from "react";
import { makeTimeString } from "../util/helpers";

const EventListing = (props) => {
  const { title, startTime } = props;
  return (
    <div className="event-listing">
      {makeTimeString(startTime)} {title}
    </div>
  );
};

export default EventListing;
