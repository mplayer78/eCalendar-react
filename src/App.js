import React, { useReducer } from "react";
import CalendarContext from "./state/context";
import reducer from "./state/reducer";
import { initialState } from "./state/initialState";
import Layout from "./components/Layout";
import CalendarComponent from "./components/CalendarComponent";
import EventsComponent from "./components/EventsComponent";
import AddEventModal from "./components/AddEventModal";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CalendarContext.Provider value={{ state, dispatch }}>
        <Layout>
          <CalendarComponent />
          <EventsComponent />
          <AddEventModal />
        </Layout>
      </CalendarContext.Provider>
    </>
  );
}

export default App;
