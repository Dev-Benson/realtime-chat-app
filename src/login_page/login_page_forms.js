import { socket } from "../socket";

export const handle_submit =( e, callback )=> {

    e.preventDefault();
    let formData = new FormData(e.target);
    let nickName;

    formData.forEach( data => nickName = data);
    socket.emit("join", { nickName}, callback );
    console.log(nickName,callback );
    // e.target.reset()

};