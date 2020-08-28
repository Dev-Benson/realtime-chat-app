import React, { createContext } from "react";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:7000/";
export const socket =  io(ENDPOINT);
export const SocketContext = createContext(socket)

export let selected_user;

// export const update_store =(user)=> {
//     USER_STORE.push(user)
// }
