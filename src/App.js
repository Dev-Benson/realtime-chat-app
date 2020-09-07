import React, { useState, useEffect, useReducer } from 'react';
import { socket } from "./socket"
import { DEMO } from "./login_page/login";
import { HEADER } from "./header/header";
// import { useMediaQuery } from "./device_hook";
import CONTAINER from "./container/container";
import CHAT from "./container/chat/chat";
import ASIDE from "./container/aside/aside";

const CHAT_INTERFACE =( {dispatch} )=> {
    return(
        <section id="chat_root">
        <HEADER dispatch={dispatch} />
        <CONTAINER dispatch={dispatch} />
        </section>
    )
}

const WELCOME_PAGE =(element)=> {
    return (
        <section id="welcome_page">
            <section id="text_section">
                <h1>WELCOME TO APP</h1>
            </section>
            {element}
        </section>
    )
}

const componentReducer =(state, {action, dispatch} )=>{
    switch (action) {
        case "logged_in":
            return <CHAT_INTERFACE dispatch={dispatch} />    
        case "CHAT":
            return <CHAT dispatch={dispatch} />    
        case "ASIDE":
            return (
                <>
                <HEADER dispatch={dispatch} />
                <ASIDE dispatch={dispatch} />
                </>
            )    
        default:
            return WELCOME_PAGE(<DEMO dispatch={dispatch} />);
    }
}

const App=()=> {
    const [display , dispatch] = useReducer(componentReducer)
    const [response, setResponse] = useState([]);
    // const [screen, setScreen] = useState([])

    // let screen_size = useMediaQuery()

    // useEffect( ()=>{
        
    //     setScreen(screen_size)
    //     dispatch({ action: "", dispatch });



    // },[screen_size] );

    useEffect(()=>{
        dispatch({ action: "", dispatch });
        socket.on("user_joined",  user_joined => {
            setResponse(user_joined)
        });
        
        // return ()=> socket.disconnect();
    },[])

    return(
        <>
            {display}
        </>
    )
}

export default App;