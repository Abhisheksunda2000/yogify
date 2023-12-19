import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/ContextReducer";
import MyOrders from "./pages/MyOrders";
import EnrollForm from "./pages/EnrollForm";
import PaymentForm from "./pages/PaymentForm";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/createuser" element={<Signup />} />
              <Route exact path="/myOrders" element={<MyOrders />} />
              <Route exact path="/enrole/:batchDetails" element={<EnrollForm />} />
              <Route exact path="/payment" element={<PaymentForm />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
