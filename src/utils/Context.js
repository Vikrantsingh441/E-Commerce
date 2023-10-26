import { createContext , useEffect, useState } from "react"; //step 1
import App from "../App";
import { useLocation } from "react-router-dom";

export const Context = createContext() //step 2

//we'll make a component now 

const AppContext = ({children})=>{
    const [categories,setCategories]=useState()
    const [products,setProducts]=useState()
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal]= useState (0);
    const location = useLocation();

    useEffect(()=>{},[cartItems])

    const handleAddToCart = (product, quantity)=>{
        debugger
        let items = [...cartItems];
        let index = items.findIndex ((p)=>p.id=== product.id);
        if(index!==-1){
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items)
    }


    const handleRemoveFromCart = (product)=>{
        let items = [...cartItems];
        items = items.filter ((p)=>p.id !== product.id);
        setCartItems(items)
    }


    const handleCartProductQuantity = (type,product)=>{}
 return (
    <Context.Provider value={{categories,setCategories,products,setProducts,cartItems,setCartItems,cartCount,setCartCount,cartSubTotal,setCartSubTotal,handleAddToCart}}>
        {children}
    </Context.Provider>
 )
}

export default AppContext