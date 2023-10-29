import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component from "./components/index.js";
import AppContext from "./utils/Context.js";
import PaymentSuccessfull from "./components/PaymentSuccessfull/PaymentSuccessfull";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Component.Header />
          <Routes>
            <Route path="/" element={<Component.Home />} />
            <Route path="/category/:id" element={<Component.Category />} />
            <Route path="/product/:id" element={<Component.SingleProduct />} />
            <Route path="/success" element={<PaymentSuccessfull/>}/>
          </Routes>
          <Component.Newsletter />
          <Component.Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
