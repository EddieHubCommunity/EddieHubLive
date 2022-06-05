import io from "socket.io-client";
import { createContext } from "react";
import { SOCKET_URL } from "../config";

export const socket = io.connect(SOCKET_URL);
export const SocketContext = createContext();
