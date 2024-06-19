import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatToNaira } from "../../Components/itemcard";
import Button from "../../Components/button";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction, getProductById } from "../../Redux/slice/productSlice";
import Loading from "../Loading/Loading";

const Preview = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    if (productId) {
      dispatch(getProductById(productId));
    }
  }, [dispatch, productId]);

  if (status === "loading") {
    return <Loading />;
  }


  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  const addToCart = () => {
    dispatch(
      ProductAction.addToCart({
        id: product._id,
        image: product.image,
        title: product.title,
        category: product.category,
        amount: product.amount,
        description: product.description,
      })
    );
  };
  return (
      <div className="p-12">
        <div className=" p-8 bg-white rounded-lg flex gap-4">
          <div className="w-1/2">
            <div className=" border border-dark/20 rounded-xl w-[400px] h-[500px] overflow-hidden">
              <img
                src={product?.image || ""}
                alt="imag"
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-1/2 py-12">
            <div className="h-[95%]">
              <p className="text-5xl font-bold tracking-tighter capitalize text-dark">
                {product?.title}
              </p>
              <span className="text-sm font-bold text-primary2">
                {product?.category}
              </span>
              <p className="text-3xl my-3 tracking-tighter text-dark">
                {formatToNaira(product?.amount)}
              </p>
              <p className="text-sm my-4">{product?.description}</p>
            </div>

            <div className="flex place-content-end">
              <Button
                type={"fill"}
                text={"Add to Cart"}
                variant={"blue"}
                onClick={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Preview;
