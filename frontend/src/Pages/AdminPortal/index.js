import { useEffect, useState } from "react";
import Row from "../../Components/row";
import Card from "./Components/Card";
import Header from "./Header";
import Preview from "./Preview";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../Redux/slice/productSlice";
import Loading from "../Loading/Loading";
import CreateProduct from "./createProduct";
import { OthersAction } from "../../Redux/slice/otherSlice";

function AdminPortal() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [id, setId] = useState();
  const openAdminPreview = useSelector(
    (state) => state.others.openAdminPreview
  );
  const createProductModal = useSelector(
    (state) => state.others.createProductModal
  );

  const handlePreview = (id) => {
    dispatch(OthersAction.setOpenAdminPreview(!openAdminPreview));
    setId(id);
  };

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
              // handleDelete={handleDelete(product._id)}
              handlePreview={() => handlePreview(product._id)}
            />
          ))}
        </Row>
      )}
      {productStatus === "failed" && <div>{error}</div>}

      {openAdminPreview && <Preview id={id} />}
      {createProductModal && <CreateProduct />}
    </div>
  );
}
export default AdminPortal;
