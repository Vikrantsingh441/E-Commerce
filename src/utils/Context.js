import { createContext , useState } from "react"; //step 1
import App from "../App";

export const Context = createContext() //step 2

//we'll make a component now 

const AppContext = ({children})=>{
    const [categories,setCategories]=useState()
    const [products,setProducts]=useState()
 return (
    <Context.Provider value={{categories,setCategories,products,setProducts}}>
        {children}
    </Context.Provider>
 )
}

export default AppContext