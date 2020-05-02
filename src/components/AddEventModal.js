import React, { useState, useContext } from "react";
import { Event } from "../util/events";
import CalendarContext from "../state/context";
import CloseButton from "../images/CloseButton";

const AddEventModal = (props) => {
  const { state, dispatch } = useContext(CalendarContext);
  const [formState, setFormState] = useState(new Event());
  const [accentColor, setAccentColor] = useState("#999999");

  function handleChange(field, value) {
    setFormState({ ...formState, [field]: value });
  }

  return (
    <div
      className="add-event-modal"
      style={{ visibility: state.modalVisible ? "visible" : "hidden" }}
    >
      <button
        className="close_button"
        onClick={() => dispatch({ type: "hide_modal" })}
        onPointerOver={() => setAccentColor("#333333")}
        onPointerOut={() => setAccentColor("#999999")}
      >
        <CloseButton color={accentColor} />
      </button>
      <form
        action="POST"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add_event", event: formState });
        }}
        className="add_event_form"
      >
        <label htmlFor="title" labeltitle="title">
          title
        </label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <label htmlFor="startDate" labeltitle="startDate">
          start date
        </label>
        <input
          type="date"
          name="startDate"
          value={state.selectedDayId}
          onChange={(e) => {
            dispatch({ type: "set_current", dateId: e.target.value });
          }}
          style={{ fontFamily: "inherit" }}
        />
        <label htmlFor="endDate" labeltitle="endDate">
          end date
        </label>
        <input
          type="date"
          name="endDate"
          value={state.selectedDayId}
          readOnly
          disabled
          style={{ fontFamily: "inherit" }}
        />
        <label htmlFor="startTime" labeltitle="startTime">
          start time
        </label>
        <input
          type="text"
          name="startTime"
          placeholder="--:--"
          value={formState.startTime}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <label htmlFor="endTime" labeltitle="endTime">
          end time
        </label>
        <input
          type="text"
          name="endTime"
          placeholder="--:--"
          value={formState.endTime}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <label htmlFor="people" labeltitle="people">
          people
        </label>
        <input
          type="text"
          name="people"
          value={formState.people}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <label htmlFor="location" labeltitle="location">
          location
        </label>
        <input
          type="text"
          name="location"
          value={formState.location}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <label htmlFor="description" labeltitle="description">
          description
        </label>
        <input
          type="description"
          name="description"
          value={formState.description}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <button type="submit">add event</button>
      </form>
    </div>
  );
};

export default AddEventModal;
