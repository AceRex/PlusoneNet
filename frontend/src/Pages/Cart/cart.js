import { AiOutlineClose } from "react-icons/ai";
import Button from "../../Components/button";
import CartCard from "./cartCard";
import { useDispatch, useSelector } from "react-redux";
import { OthersAction } from "../../Redux/slice/otherSlice";
import { formatToNaira } from "../../Components/itemcard";
import { useMemo } from "react";

function CartModal() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.products.cart);
  const cartModal = useSelector((state) => state.others.cartModal);
  const orderModal = useSelector((state) => state.others.orderModal);

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const handleClosePreview = () => {
    dispatch(OthersAction.setCartModal(!cartModal));
  };
  const handleOrder = () => {
    dispatch(OthersAction.setOrderModal(!orderModal));
    dispatch(OthersAction.setCartModal(!cartModal));

  };
  return (
    <div className="w-[100vw] h-[100vh] bg-dark/20 backdrop-blur-lg fixed top-0 right-0 flex place-content-center p-24 z-50">
      <div className="bg-white rounded-lg w-[50%] p-8  relative ">
        <Button
          type={"outline"}
          icon={<AiOutlineClose size={20} />}
          variant={"blue"}
          className="absolute w-[3%] p-2 right-3 top-3"
          onClick={() => handleClosePreview()}
        />
        <div className="h-[83%] overflow-scroll">
          {cart.length === 0 && (
            <div className="flex place-content-center items-center text-2xl font-bold text-dark/20 w-[100%] h-[100%]">
              Cart is empty
            </div>
          )}
          {cart.length !== 0 &&
            cart?.map(
              ({
                amount,
                category,
                description,
                id,
                image,
                quantity,
                title,
              }) => (
                <CartCard
                  amount={amount}
                  category={category}
                  description={description}
                  id={id}
                  image={image}
                  quantity={quantity}
                  title={title}
                />
              )
            )}
        </div>
        <div className={`w-[70%] m-auto ${cart.length === 0 && "hidden"}`}>
          <div className="flex items-center place-content-center gap-3 mt-4 mb-2">
            <p className="text-2xl font-bold tracking-tighter">
              <span className="text-base mx-2">Total amount: </span>
              {formatToNaira(totalAmount)}
            </p>{" "}
            <p> x {totalItems} items</p>
          </div>
          <Button
            type={"fill"}
            text={"Place order"}
            variant={"blue"}
            onClick={() => handleOrder()}
          />
        </div>
      </div>
    </div>
  );
}
export default CartModal;
