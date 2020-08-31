import React, { useState, useEffect, useRef } from "react";
import user from "../../images/user.jpg"
import {handle_submit} from "./helpers/handle_submit";
import { socket } from "../../socket"
import { userObject } from "../../header/header";
import { useMediaQuery } from "../../device_hook";
import "./chat.css";


const CHAT =({dispatch})=> {


    let space = (
        <span className="contact row-reverse">
            <img src={user} alt="user" className="current-image" />
            <p>The Common Room <br/><i>{}</i> </p>
        </span>
    )

    const [chats, setChats] = useState([]);
    const [chat_space, setChat_space] = useState(space);
    const [online_status, setOnline_status] = useState("offline")
    const [message_status, setMessage_status] = useState("sending")
    const [icon, setIcon] = useState(null);

    let aside = <i onClick={()=>{dispatch({action: "ASIDE", dispatch});console.log("aside")}} className="fa fa-video">c</i>;
    let screen = useMediaQuery();
    useEffect(()=>{
        screen <= 425 ? setIcon(aside) : setIcon(null)

    },[])

    const messages_ref = useRef(chats[chats.length-1]);
    const to_last_message =()=> {
        messages_ref.current.scrollIntoView({
            behavior: "smooth"
        });
        console.log("called");
    }

    let ref = <span ref={messages_ref}></span>;

    // useEffect=(()=>to_last_message(),[])
    const chat_message = (
        {
            time_stamp = "..:..",
            message,
            className="me",
            sender
        }) => {
            
        setChats(
            [...chats,
                <p className={className} >
                    {message} <br/>
                    <i className={message_status} > { sender, `@${time_stamp}`} </i>
                </p>
            ]
        );

        // to_last_message();
        console.log(messages_ref)
    };

    socket.on("buddy", message => {chat_message(message); console.log("got here")} );
    socket.on("online_status", status => setOnline_status(status));
    socket.on("message_status", status => setMessage_status(status));

    return (
        <section id="chat">
            <span id="chat-buddy">
                {chat_space}
                <span className="icons" >
                    {icon}                   
                </span>
            </span>

            <section  id="message-container" >

                <p className="buddy">
                    hey Nockk, I heard you learning to fight karate now.
                    hope that's going super awesome cuz I'm looking to 
                    cause some mayhem downtown in the shortest time possible
                    seeing as i know you gat my back....<br/> <i>12:02pm</i>
                </p>

                <p className="me">
                    hey Nockk, I heard you learning to fight karate now.
                    hope that's going super awesome cuz I'm looking to 
                    cause some mayhem downtown in the shortest time possible
                    seeing as i know you gat my back....<br/> <i>12:02pm</i>
                </p>

                { chats }

            </section>
            <form id="type-message" name="chat" onSubmit={ e=> handle_submit( e, chat_message , userObject.nickName) } >
                <textarea type="" name="message-box" className="search chat-input" autoFocus></textarea>
                <button className="send-button" type="submit"><i className="fa fa-user"></i></button>
            </form>

        </section>
    )
}

export default CHAT;