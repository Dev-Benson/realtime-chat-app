

import React, { useState } from "react";
import { useMediaQuery } from "../device_hook";
import { handle_submit } from "./login_page_forms";
import "./login.css";

export const DEMO =( {dispatch} )=> {

    const [response, setResponse] = useState("");
    let screen = useMediaQuery()

    const callback=(message, bool)=> {
        setResponse(message);
        if (bool === true){
            screen <= 425 ? dispatch({action: "CHAT", dispatch}) : dispatch({action: "logged_in", dispatch})
        }
    }

    return(
        <form id="demo_form" onSubmit={
            e=> {
                handle_submit(e, callback)
                // dispatch({action: "logged_in", dispatch})
            } 
        }>
            <p className="join_response">{response}</p>
            <label htmlFor="name" className="name_label" >Join Live Chat</label>
            <input id="name" name="name" type="text" className={"name"} placeholder={"pick a nick name"} autoFocus/>
            <button type="submit" className={"login_button"} >Log In</button>
        </form>
    )
}

export const LOGIN_FORM =()=> {
    return(
        <form onSubmit={e=>handle_submit(e)}>
            <input name="name" type="text" className={"name"} placeholder={"User name"} autoFocus/>
            <input name="password" type="text" className={"password"} placeholder={"Password"} />
            <button type="submit" className={"login_button"} >Log In</button>
        </form>
    )
}

export const SIGN_UP_FORM =()=> {
    return(
        <form onSubmit={e=>handle_submit(e)}>
            <input name="firstname" type="text" className={"firstname"} placeholder={"First name"} autoFocus/>
            <input name="surname" type="text" className={"surname"} placeholder={"Surname"} autoFocus/>
            <input name="email" type="email" className={"email"} placeholder={"email"} autoFocus/>
            <input name="password" type="password" className={"password"} placeholder={"Password"} />
            <button type="submit" className={"sign_up_button"} >Join App</button>
        </form>
    )
}


