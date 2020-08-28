import React, { useState } from "react";
import "./header.css";
import { socket } from "../socket";
import user_img from "../images/user.jpg"

export let userObject = {};

export const User_object =()=>{
    const [user, setUser] = useState({});

    socket.on("user_object", user_object =>{
        setUser(user_object);
        userObject = User_object;
    } )
    
    return (
        <span className="contact">
            <img src={user_img} alt="user image" className="current-image" />
            <p>{user.nickName} </p>
        </span>
    )

}

export const HEADER =()=> {

    return (
        <section id="header" >
            <p>D.Benson Realtime Chat App</p>
            <User_object />
        </section>
    )
}

