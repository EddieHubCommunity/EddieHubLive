import { SocketContext, socket } from "./context/socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div>Hallo Welt</div>
    </SocketContext.Provider>
  );
}

export default App;
