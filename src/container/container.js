import React from "react";
import ASIDE from "./aside/aside";
import CHAT from "./chat/chat";
import "./container.css";


const CONTAINER =( )=> {
    return (
        <section id="container" >
        <ASIDE />
        <CHAT />
        </section>
    )
}

export default CONTAINER;