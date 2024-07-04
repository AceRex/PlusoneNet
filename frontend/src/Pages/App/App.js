import Header from "../../Components/header";
import Loading from "../Loading/Loading.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../../Redux/slice/productSlice.js";
import CartModal from "../Cart/cart.js";
import Order from "../Order/order.js";
import { Outlet } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const cartModal = useSelector((state) => state.others.cartModal);
  const orderModal = useSelector((state) => state.others.orderModal);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);
  return (
    <>
      <Header />
      {productStatus === "loading" && <Loading />}
      <Outlet />
      {productStatus === "failed" && <div>{error}</div>}
      {cartModal && <CartModal />}
      {orderModal && <Order />}
    </>
  );
}
export default Main;
