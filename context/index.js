import { Children, createContext } from "react";



export const Context = createContext(null);



function GlobalState ({children}){

    return <Context.Provider>{children}</Context.Provider>
}

export default GlobalState