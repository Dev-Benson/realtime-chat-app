import io from "socket.io-client";

// const ENDPOINT = "http://localhost:7000/";
const ENDPOINT = "https://dev-benson-chat-server.herokuapp.com/";
const socket =  io(ENDPOINT);

export { socket }