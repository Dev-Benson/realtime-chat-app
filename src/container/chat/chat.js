import React, { useState, useEffect } from "react";
import user from "../../images/user.jpg"
import {handle_submit} from "./helpers/handle_submit";
import { socket } from "../../socket"
import "./chat.css";


const CHAT =( )=> {

    const [chats, setChats] = useState([]);
    const [online_status, setOnline_status] = useState("offline")
    const [message_status, setMessage_status] = useState("sending")

    const chat_message = (
        {
            time_stamp,
            message,
            className="me",
        }) => {
            
        setChats(
            [...chats,
                <p className={className} >
                    {message} <br/>
                    <i className={message_status} > {time_stamp} </i>
                </p>
            ]
        );
    };

    socket.on("buddy", message => {chat_message(message); console.log("got here")} );
    socket.on("online_status", status => setOnline_status(status));
    socket.on("message_status", status => setMessage_status(status));

    return (
        <section id="chat">
            <span id="chat-buddy">
                <span class="contact">
                    <img src={user} alt="user" class="current-image" />
                    <p>Nockk lynn <br/><i>{online_status}</i> </p>
                </span>
                <span class="icons" >
                    <i class="fa fa-video"></i>
                    <i class="fa fa-phone"></i>                    
                    <i class="fa fa-user"></i>                    
                </span>
            </span>

            <section id="message-container" >

                <p class="buddy">
                    hey Nockk, I heard you learning to fight karate now.
                    hope that's going super awesome cuz I'm looking to 
                    cause some mayhem downtown in the shortest time possible
                    seeing as i know you gat my back....<br/> <i>12:02pm</i>
                </p>

                <p class="me">
                    hey Nockk, I heard you learning to fight karate now.
                    hope that's going super awesome cuz I'm looking to 
                    cause some mayhem downtown in the shortest time possible
                    seeing as i know you gat my back....<br/> <i>12:02pm</i>
                </p>

                { chats }

            </section>
            <form id="type-message" name="chat" onSubmit={ e=> handle_submit( e, chat_message) } >
                <textarea type="" name="message-box" class="search chat-input" autoFocus></textarea>
                <button class="send-button" type="submit"><i class="fa fa-user"></i></button>
            </form>

        </section>
    )
}

export default CHAT;