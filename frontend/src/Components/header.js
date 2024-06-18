import { useNavigate } from "react-router";
import Button from "./button";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

function Header() {
  let navigate = useNavigate();

  const cart = useSelector((state) => state.products.cart);
  console.log(cart.length);
  const user = localStorage.getItem("user");
  const handleLogout = () => {};
  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <header className="relative z-50 h-[10vh] flex place-content-center">
      <div className="w-[100vw] lg:w-[70vw] xl:w-[60vw] m-auto mt-3 fixed flex items-center shadow-md bg-primary1 p-4 rounded-lg">
        <div className="w-1/2">
          <p className="font-bold tracking-wide text-white text-lg uppercase">
            Ecommerce
          </p>
        </div>
        {user === null ? (
          <div className="w-1/2 flex place-content-end">
            <div className="w-1/2 flex flex-row items-end gap-4">
              <Button
                text={"Log in"}
                type="outline"
                variant="white"
                onClick={login}
              />
              <Button
                text={"Sign up"}
                type="fill"
                variant="white"
                onClick={register}
              />
            </div>
          </div>
        ) : (
          <div className="w-1/2 flex gap-2 place-content-end">
            <Button
              text={cart.length}
              icon={<FaShoppingCart />}
              type={"fill"}
              variant={"white"}
            />
            <Button
              icon={<HiOutlineLogout />}
              type={"outline"}
              onClick={handleLogout}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
