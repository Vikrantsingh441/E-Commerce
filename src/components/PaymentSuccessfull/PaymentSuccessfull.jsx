import React from "react";
import "./PaymentSuccessfull.scss"
import { useNavigate } from "react-router-dom";


const PaymentSuccessfull = ()=>{
    const navigate = useNavigate()
    return (<>

          <div className="Payment">
            <span>Payment Successfull</span>
            <button className="return-cta" onClick={()=>{
              navigate("/")}}>RETURN TO SHOP</button>
          </div>
        </>)
}

export default PaymentSuccessfull