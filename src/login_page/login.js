

import React, { useState, useEffect } from "react";
import { handle_submit } from "./login_page_forms";

export const DEMO =( {dispatch} )=> {
    return(
        <form onSubmit={e=> {e.preventDefault(); dispatch({action: "logged_in"}) } }>
            <label htmlFor="name" >Join App</label>
            <input name="name" type="text" className={"name"} placeholder={"pick a nick name"} autoFocus/>
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


