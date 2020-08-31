import React , { useState, useLayoutEffect } from "react"


export const useMediaQuery =()=> {
    const [screen_size, setScreen_size] = useState([]);

    useLayoutEffect(()=>{
        let update_screen_size =()=>{
            setScreen_size([window.innerWidth, window.innerHeight])
        };

        window.addEventListener("resize", update_screen_size);
        update_screen_size();
        return window.removeEventListener("resize", update_screen_size)
    }, []);
    return screen_size;
}

