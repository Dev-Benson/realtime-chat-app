import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import user from "../../images/user.jpg"
import {handle_submit} from "./helpers/handle_submit";
import { socket } from "../../socket"
import { userObject } from "../../header/header";
import { useMediaQuery } from "../../device_hook";
import userIcon from "./users.svg"
import send from "./send.svg"
import "./chat.css";


const CHAT =({dispatch})=> {


    let space = (
        <span className="contact">
            <img src={user} alt="user" className="current-image" />
            <p>The Common Room <br/><i>{}</i> </p>
        </span>
    )
    

    const [chats, setChats] = useState([]);
    const [Screen, setScreen] = useState([]);
    // const [chat_space, setChat_space] = useState(space);
    // const [online_status, setOnline_status] = useState("offline")
    const [message_status, setMessage_status] = useState("sending")
    const [icon, setIcon] = useState(null);

    let aside = <i className="icons" onClick={()=>{dispatch({action: "ASIDE", dispatch})}}><img alt="" src={userIcon} width="auto" className="M-Icon" /></i>;
    let Send = <i className=""><img alt="" src={send} width="auto" className="send" /></i>;
    let screen = useMediaQuery();
    useEffect(()=>{
        setScreen(screen)
        Screen <= 425 ? setIcon(aside) : setIcon(null)
    },[screen, Screen])
    const messages_ref = useRef(null);

    useLayoutEffect(()=>{

        if (chats.length > 1 ){
            messages_ref.current.scrollIntoView({
                behavior: "smooth"
            });
        }

    },[chats])

    const chat_message = (
        {
            time_stamp = "..:..",
            message,
            className="me",
            sender = "you"
        }) => {
            
        setChats(
            [...chats,
                <p className={className} >
                    {message} <br/>
                    <i className={message_status} > { `${sender} @${time_stamp}`} </i>
                </p>
            ]
        );

    };

    socket.on("buddy", message => {chat_message(message)} );
    // socket.on("online_status", status => setOnline_status(status));
    socket.on("message_status", status => setMessage_status(status));

    return (
        <section id="chat">
            <span id="chat-buddy">
                {space}
                <span className="" >
                    {icon}                   
                </span>
            </span>

            <section  id="message-container" >

                {/* <p className="buddy">
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
                </p> */}

                { chats  }

                <p ref={messages_ref} className="ref"></p>

            </section>
            <form id="type-message" name="chat" onSubmit={ e=> handle_submit( e, chat_message , userObject.nickName) } >
                <textarea type="" rows="1" name="message-box" className="search chat-input" autoFocus></textarea>
                <button className="send-button" type="submit">{Send}</button>
            </form>

        </section>
    )
}

export default CHAT;