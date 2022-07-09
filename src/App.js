import { socket } from "./environment/socket";
import Map from "./components/map";
import EventCard from "./components/event-card";
import React, { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    socket.emit("github-event");
    socket.on("events/github", (data) => {
      setEvents([...events, data]);
    });
  });

  return (
    <main className="flex">
      <div className="w-1/3  flex flex-col gap-2">
        {events.reverse().map((event) => (
          <EventCard data={event} />
        ))}
      </div>
      <div className="w-2/3">
        <Map events={events} />
      </div>
    </main>
  );
}

export default App;
