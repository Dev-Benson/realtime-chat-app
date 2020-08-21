import { socket } from "../../../socket";

export const handle_submit =( e, callback )=> {
    
    e.preventDefault();
    let formData = new FormData(e.target);
    let message;

    formData.forEach( data => message = data);
    callback({
        message
    });

    // console.log({message});
    e.target.reset()

    socket.emit( "chat_message" , {message});

};