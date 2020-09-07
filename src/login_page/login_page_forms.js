import { socket } from "../socket";

export const handle_submit =( e, callback )=> {
    socket.emit("testt");

    e.preventDefault();
    let formData = new FormData(e.target);
    let nickName;

    formData.forEach( data => nickName = data);
    socket.emit("join", { nickName}, callback );
};