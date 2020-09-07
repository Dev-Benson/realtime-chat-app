import { useState, useEffect } from "react"


export const useMediaQuery =()=> {
    const [screen_size, setScreen_size] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(()=>{
        let update_screen_size =()=>{
            setScreen_size({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };

        window.addEventListener("resize", update_screen_size());
        // update_screen_size();
        return window.removeEventListener("resize", update_screen_size)
    }, []);
    return screen_size.width;
}



// export const useMediaQuery =()=> {
//     const [screen_size, setScreen_size] = useState([]);

//     useLayoutEffect(()=>{
//         let update_screen_size =()=>{
//             setScreen_size([window.innerWidth, window.innerHeight])
//         };

//         window.addEventListener("resize", update_screen_size);
//         update_screen_size();
//         return window.removeEventListener("resize", update_screen_size)
//     }, []);
//     return screen_size;
// }
