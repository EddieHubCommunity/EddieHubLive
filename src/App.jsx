import { socket } from "./environment/socket";
import Map from "./components/map";
import EventCard from "./components/event-card";
import Header from "./components/header";
import React, { useEffect, useState } from "react";

function App() {

  const [events, setEvents] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  const ignoreEvents = ["workflowRun", "checkSuite", "checkRun"];

  useEffect(() => {
    socket.emit("github-event");
    socket.on("events/github", (data) => {
      if (ignoreEvents.includes(data.event)) return;
      if (!events.find((event) => event._id === data._id)) {
        setEvents([...events,data]); 
      }
      if (!uniqueUsers.find((user) => user.githubUsername._id === data.githubUsername._id)) {
        setUniqueUsers([...uniqueUsers, data]);
      }
    });
  }, [events]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex">
        <div className="flex h-screen w-1/3 flex-col gap-2 overflow-y-scroll p-2">
          {events.map((event) => (
            <EventCard key={event._id} data={event} />
          ))}
        </div>
        <div className="w-2/3">
          <Map key={uniqueUsers._id} events={uniqueUsers} />
        </div>
      </main>
    </div>
  );
}

export default App;
