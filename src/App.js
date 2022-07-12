import { socket } from "./environment/socket";
import Map from "./components/map";
import EventCard from "./components/event-card";
import React, { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState([]);
  useEffect(() => {
    socket.emit("github-event");
    socket.on("events/github", (data) => {
      setEvents([...events, data]);
      if (
        !uniqueUsers.find(
          (user) => user.githubUsername._id === data.githubUsername._id
        )
      ) {
        setUniqueUsers([...uniqueUsers, data]);
      }
      console.log("events: "+events)
      console.log(uniqueUsers)
    });
  });

  return (
    <main className="flex">
      <div className="w-1/3 overflow-y-scroll h-screen p-2 flex flex-col gap-2">
        {events.map((event) => (
          <EventCard data={event} />
        ))}
      </div>
      <div className="w-2/3">
        <Map events={uniqueUsers} />
      </div>
    </main>
  );
}

export default App;
