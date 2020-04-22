import React, { useState, useContext } from "react";
import { Event } from "../util/events";
import CalendarContext from "../state/context";

const AddEventModal = (props) => {
  const [formState, setFormState] = useState(new Event());
  const { state, dispatch } = useContext(CalendarContext);

  function handleChange(field, value) {
    setFormState({ ...formState, [field]: value });
  }

  return (
    <div className="add-event-modal">
      <button>close</button>
      <form
        action="POST"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add_event", event: formState });
        }}
      >
        <label htmlFor="title">
          title
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="startDate">
          start date
          <input
            type="text"
            name="startDate"
            value={formState.startDate}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="endDate">
          end date
          <input
            type="text"
            name="endDate"
            value={formState.endDate}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="startTime">
          start time
          <input
            type="text"
            name="startTime"
            value={formState.startTime}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="endTime">
          end time
          <input
            type="text"
            name="endTime"
            value={formState.endTime}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="people">
          people
          <input
            type="text"
            name="people"
            value={formState.people}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="location">
          location
          <input
            type="text"
            name="location"
            value={formState.location}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor="description">
          description
          <input
            type="description"
            name="description"
            value={formState.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <button type="submit">add event</button>
      </form>
    </div>
  );
};

export default AddEventModal;
