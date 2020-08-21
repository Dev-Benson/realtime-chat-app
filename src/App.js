import React, { useState, useEffect } from 'react';
import { socket } from "./socket"
import HEADER from "./header/header";
import CONTAINER from "./container/container";

const App = () => {

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