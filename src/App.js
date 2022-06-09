import { socket } from "./context/socket";
import Map from "./components/map";
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
      <div className="w-1/3"></div>
      <div className="w-2/3">
        <Map events={events} />
      </div>
    </main>
  );
}

export default App;
