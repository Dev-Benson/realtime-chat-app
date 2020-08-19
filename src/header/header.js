import React from "react";
import "./header.css";
import user from "../images/user.jpg"  

const HEADER =()=> {
    return (
        <section id="header" >
            <p>chat app</p>
            <span class="contact">
                <img src={user} alt="user image" class="current-image" />
                <p>Nockk lynn </p>
            </span>
        </section>
    )
}

export default HEADER;