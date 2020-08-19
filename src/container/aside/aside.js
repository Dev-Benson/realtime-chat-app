import React, { useState, useEffect } from "react";
import user from "../../images/user.jpg"
import "./aside.css";

const ASIDE =()=> {
    return (
        <aside id="contact-list">

            <form id="search-contact">
                <input type="search" class="search" placeholder="search contact" />
                <button type="submit" class="" ><i class="fa fa-search"></i></button>
            </form>
            <span class="contact">
                <img src={user} alt="user image" class="user-image" />
                <p>Nockk lynn <br/><i>online</i> </p>
            </span>
            
            <span class="contact">
                <img src={user} alt="user image" class="user-image" />
                <p>Nockk lynn <br/><i>online</i> </p>
            </span>

        </aside>
    )
}

export default ASIDE;