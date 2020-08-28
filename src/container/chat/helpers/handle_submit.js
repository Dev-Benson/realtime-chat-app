import { socket } from "../../../socket";

export const handle_submit =( e, callback, sender )=> {
    
    e.preventDefault();
    let formData = new FormData(e.target);
    let time_stamp = Date.now()
    let message;

    formData.forEach( data => message = data);
    callback({
        message
    });

    // console.log({message});
    e.target.reset()

    socket.emit( "chat_message" , {message, sender });

};