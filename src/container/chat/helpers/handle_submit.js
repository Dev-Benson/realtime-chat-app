import { socket } from "../../../socket";

export const handle_submit =( e, callback, sender )=> {
    
    e.preventDefault();
    let formData = new FormData(e.target);
    const options = {
        hour12 : true,
        hour:  "2-digit",
        minute: "2-digit",
    }

    let time_stamp = new Date().toLocaleString("en-US", options);
    console.log(time_stamp)
    let message;

    formData.forEach( data => message = data);
    callback({
        message, time_stamp, sender:"me"
    });

    // console.log({message});
    e.target.reset()

    socket.emit( "chat_message" , {message, sender });

};