import { useEffect } from "react";
import Row from "../../Components/row";
import Card from "./Components/Card";
import Header from "./Header";
import Preview from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/slice/productSlice";
import Loading from "../Loading/Loading";
import CreateProduct from "./createProduct";

function AdminPortal() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const openAdminPreview = useSelector(
    (state) => state.others.openAdminPreview
  );
  const createProductModal = useSelector(
    (state) => state.others.createProductModal
  );

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);
  return (
    <div className="relative">
      <Header />
      {productStatus === "loading" && <Loading />}
      {productStatus === "succeeded" && (
        <Row>
          {products.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.title}
              category={product.category}
              amount={product.amount}
            />
          ))}
        </Row>
      )}
      {productStatus === "failed" && <div>{error}</div>}

      {openAdminPreview && <Preview />}
      {createProductModal && <CreateProduct />}
    </div>
  );
}
export default AdminPortal;
