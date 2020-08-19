import React, { useState, useEffect } from "react";
import user from "../../images/user.jpg"
import "./chat.css";

const CHAT =()=> {
    return (
        <section id="chat">
            <span id="chat-buddy">
                <span class="contact">
                    <img src={user} alt="user" class="current-image" />
                    <p>Nockk lynn <br/><i>online</i> </p>
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

            </section>
            <form id="type-message">
                <textarea type="" class="search chat-input" ></textarea>
                <button class="send-button" type="submit"><i class="fa fa-user"></i></button>
            </form>

        </section>
    )
}

export default CHAT;