import { useEffect, useLayoutEffect, useState } from "react";

export function useLocalStorage (val) {
    const[token,setToken] = useState(localStorage.getItem(val));
 
    function setItem(newToken) {
        localStorage.setItem(val,  JSON.stringify(newToken));
        setToken(() => localStorage.getItem(val));
    }

    function removeItem() {
        localStorage.removeItem(val);
        setItem(() => "")

    }
    
    useEffect(() => {
        localStorage.setItem(val,  JSON.stringify(''));
      }, []);

    return [
        token,
            { 
                setItem,
                removeItem
            }
    ]
        
}