import Button from "./button";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { OthersAction } from "../Redux/slice/otherSlice";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.products.cart);
  const cartModal = useSelector((state) => state.others.cartModal);

 
  const handleLogout = () => {};
  
  const openCart = () => {
    dispatch(OthersAction.setCartModal(!cartModal));
  };
  return (
    <header className="relative z-50 h-[10vh] flex place-content-center">
      <div className="w-[100vw] lg:w-[70vw] xl:w-[60vw] m-auto mt-3 fixed flex items-center shadow-md bg-primary1 p-4 rounded-lg">
        <div className="w-1/2">
        <Link to={"/"}>
          <p className="font-bold tracking-wide text-white text-lg uppercase">
            Ecommerce
          </p>
          </Link>
        </div>
          <div className="w-1/2 flex gap-2 place-content-end">
            <Button
              text={cart.length}
              icon={<FaShoppingCart />}
              type={"fill"}
              variant={"white"}
              onClick={openCart}
            />
            <Button
              icon={<HiOutlineLogout />}
              type={"outline"}
              onClick={handleLogout}
            />
          </div>
      </div>
    </header>
  );
}

export default Header;
