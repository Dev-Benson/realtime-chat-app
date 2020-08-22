import React, { useState, useEffect, useReducer } from 'react';
import { socket } from "./socket"
import { DEMO } from "./login_page/login";
import HEADER from "./header/header";
import CONTAINER from "./container/container";

const CHAT_INTERFACE =( {dispatch} )=> {
    return(
        <>
        <HEADER dispatch={dispatch} />
        <CONTAINER dispatch={dispatch} />
        </>
    )
}

const componentReducer =(state, {action, dispatch} )=>{
    switch (action) {
        case "logged_in":
            return <CHAT_INTERFACE dispatch={dispatch} />    
        default:
            return <DEMO dispatch={dispatch} />;
    }
}

const App=()=> {
    const [display , dispatch] = useReducer(componentReducer)

    useEffect( ()=>{
        dispatch({ action: "", dispatch });
    },[] );

    return(
        <>
        {display}
        </>
    )
}

const App2 = () => {

    const [response, setResponse] = useState([]);

    useEffect(()=> {
 
        socket.on("server_response",  server_response => {
            setResponse(server_response)
        });

        return ()=> socket.disconnect();

    }, []);

    console.log(response);    

    return(<>
    {/* <SOCKET/> */}
    <HEADER />
    <CONTAINER />
    </>)
}

export default App;