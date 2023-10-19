import { createContext , useState } from "react"; //step 1
import App from "../App";

export const Context = createContext() //step 2

//we'll make a component now 

const AppContext = ({children})=>{
 return (
    <Context.Provider>
        {children}
    </Context.Provider>
 )
}

export default AppContext