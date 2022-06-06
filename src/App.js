import { SocketContext, socket } from "./context/socket";
import Map from "./components/map";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Map />
    </SocketContext.Provider>
  );
}

export default App;
