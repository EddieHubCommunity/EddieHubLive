import io from "socket.io-client";
import { SOCKET_URL } from "../config";

export const socket = io.connect(SOCKET_URL, {
  // WARNING: in that case, there is no fallback to long-polling
  transports: ["websocket", "polling"], // or [ "websocket", "polling" ] (the order matters)
});
