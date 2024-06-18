import Header from "../../Components/header";
import Row from "../../Components/row";
import Itemcard from "../../Components/itemcard";
import Loading from "../Loading/Loading.js"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../Redux/slice/productSlice.js";

function Main() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);


  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);
  return (
    <>
      <Header />
      {productStatus === "loading" && <Loading />}
      {productStatus === "succeeded" && (
        <Row>
          {products.map((product) => (
            <Itemcard
              title={product.title}
              category={product.category}
              image={product.image}
              amount={product.amount}
            />
          ))}
        </Row>
      )}
      {productStatus === "failed" && <div>{error}</div>}
    </>
  );
}
export default Main;
