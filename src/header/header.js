import React, { useState, useEffect } from "react";
import "./header.css";
import messages from "./chat.svg";
import { socket } from "../socket";
import user_img from "../images/user.jpg"
import { useMediaQuery } from "../device_hook";

export let userObject = {};
export let my_username;

export const USER_OBJECT =()=>{
    const [user, setUser] = useState({});

    socket.on("user_object", user_object =>{
        setUser(user_object);
        userObject = user_object;
        my_username = user_object.nickName
    } )
    
    return (
        <span className="contact">
            <img src={user_img} alt="user" className="current-image" />
            <p>{user.nickName} </p>
        </span>
    )

}

export const HEADER =({dispatch})=> {
    const [Chat, setChat] = useState(null);
    const [reverse, setReverse] = useState("");
    const [screen, setScreen] = useState(null);

    let title= <p>D.Benson Realtime Chat App</p>
    let Screen = useMediaQuery()
    let chat = <i className="chat-messages" onClick={()=>{dispatch({action: "CHAT", dispatch})}} ><img alt="" src={messages} width="auto" className="messages" /></i>;


    useEffect(()=>{
        setScreen(Screen)
        
        if(screen <= 425){
            setChat(chat);
            setReverse("row-reverse");
        }else{
            setChat(title);
            setReverse("")
        }
    },[screen])

    return (
        <section id="header" className={reverse} >
            {Chat}
            <USER_OBJECT />
        </section>
    )
}

