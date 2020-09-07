import React, { useState, useEffect } from "react";
// import { useMediaQuery } from "../../device_hook";
import user_img from "../../images/user.jpg"
import "./aside.css";
import { socket } from "../../socket";
import search from "./search.svg";

const ASIDE =()=> {

    const [users, setUsers] = useState([]);
    const [value, setValue] = useState("");
    // const [className, setClassName] = useState("");
    const [user_store, setUser_store] = useState([]);

    let Search = <i><img alt="" src={search} width="auto" className="M-Icon" /></i>;

    // let screen = useMediaQuery()

    socket.on("user_joined", user_joined=> {
        setUser_store([...user_store,user_joined.nickName]);
    })

    socket.on("old_users", (old_users) => {
        setUser_store(old_users);       
    } )

    useEffect(()=>{
        setUsers(user_store);
        // screen <= 425 ? setClassName("hide") : setClassName("");
    }, [user_store])

    const handle_change=(e)=>{
        setValue(e.target.value)
        let filtered_users = user_store.filter( user => user.includes(e.target.value) );
        e.target.value === "" ? setUsers(user_store) : setUsers(filtered_users)
    }

    return (
        <aside id="contact-list" >

            <form id="search-contact">
                <input type="search" value={value} onChange={(e)=>handle_change(e)} className="search" placeholder="search contact" />
                <button type="submit" className="" >{Search}</button>
            </form>
            {/* <span className="contact">
                <img src={user_img} alt="user" className="user-image" />
                <p>Nockk lynn <br/><i>online</i> </p>
            </span>
            
            <span className="contact">
                <img src={user_img} alt="user" className="user-image" />
                <p>Nockk lynn <br/><i>online</i> </p>
            </span> */}

            {
                users.map( user => <span class="contact">
                    <img src={user_img} alt="user" className="user-image" />
                    <p>{user} <br/><i>online</i> </p>
                </span> )
            }

        </aside>
    )
}

export default ASIDE;

