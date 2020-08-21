import React, { createContext } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:7000/";
export const socket =  io(ENDPOINT);
export const SocketContext = createContext(socket)
