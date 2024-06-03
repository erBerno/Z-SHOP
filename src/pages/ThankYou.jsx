import React, { useEffect } from "react";
import { SectionTitle } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { calculateTotals, clearCart } from "../features/cart/cartSlice";

const ThankYou = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveToOrderHistory = async () => {
    try {
      const response = await axios.post("http://localhost:8080/orders", {
        userId: localStorage.getItem("id"),
        orderStatus: "in progress",
        subtotal: total,
        cartItems: cartItems,
      });
    } catch (err) {
      toast.error(err.response);
    }
  };

  if (cartItems.length > 0) {
    saveToOrderHistory();
    store.dispatch(clearCart());
    store.dispatch(calculateTotals());
    toast.success("Orden completada con éxito!");
  }

  useEffect(() => {
    if (!loginState) {
      toast.error("Debes iniciar sesión para completar el pedido");
      navigate("/");
    }
  }, []);


  return (
    <>
      <SectionTitle title="Thank You" path="Home | Cart | Thank you" />
      <div className="thankyou-content text-center text-accent-content px-10 max-w-7xl mx-auto">
        <h2 className="text-6xl max-sm:text-4xl">
          Gracias por tu compra!
        </h2>

        <h3 className="text-2xl mt-5 max-sm:text-xl">
          Ahora puedes hacer lo siguiente:
        </h3>
        <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/order-history">&rarr; Ver historial de compras &larr;</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">&rarr; Comprar más &larr;</Link>
          </li>
        </ul>

        <h4 className="text-xl mt-5 max-sm:text-lg">
          Gracias por tu compra nuevamente!
        </h4>
        <h4 className="text-xl max-sm:text-lg">
          Con ZShop, comprar es más fácil.
        </h4>
      </div>
    </>
  );
};

export default ThankYou;
