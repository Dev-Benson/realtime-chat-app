import React, { useState, useEffect } from "react";
import user_img from "../../images/user.jpg"
import "./aside.css";
import { socket, selected_user } from "../../socket";

const ASIDE =()=> {

    const [users, setUsers] = useState([]);

    socket.on("user_joined", user_joined=> {
        setUsers([...users,user_joined.nickName]);
        console.log(user_joined)
    })

    socket.on("old_users", (old_users) => setUsers(old_users) )

    return (
        <aside id="contact-list">

            <form id="search-contact">
                <input type="search" class="search" placeholder="search contact" />
                <button type="submit" class="" ><i class="fa fa-search"></i></button>
            </form>
            <span class="contact">
                <img src={user_img} alt="user image" class="user-image" />
                <p>Nockk lynn <br/><i>online</i> </p>
            </span>
            
            <span class="contact">
                <img src={user_img} alt="user image" class="user-image" />
                <p>Nockk lynn <br/><i>online</i> </p>
            </span>

            {
                users.map( user => <span class="contact">
                    <img src={user_img} alt="user image" class="user-image" />
                    <p>{user} <br/><i>online</i> </p>
                </span> )
            }

        </aside>
    )
}

export default ASIDE;

