import Button from "../../Components/button";
import { useDispatch, useSelector } from "react-redux";
import { OthersAction } from "../../Redux/slice/otherSlice";
import { useNavigate } from "react-router";

function Header() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const user = localStorage.getItem("user");
  const createProductModal = useSelector(
    (state) => state.others.createProductModal
  );
  const manageOrder = useSelector((state) => state.others.manageOrder);

  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };

  const handleCreateProduct = () => {
    dispatch(OthersAction.setCreateProductModal(!createProductModal));
  };
  const handleManageOrder = () => {
    dispatch(OthersAction.setManageOrder(!manageOrder));
  };
  return (
    <header className="p-4 relative z-50 h-[10vh] flex place-content-center">
      <div className="bg-primary1 flex justify-between items-center fixed shadow-xl font-bold text-xl w-[50vw] m-auto rounded-lg p-4 text-white text-center">
        <div className="w-[50%] text-start">
          <p>Ecommerce Admin Portal</p>
        </div>
        <div className="flex w-[50%] gap-4">
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
            <>
              <Button
                type={"outline"}
                text="Create product"
                onClick={handleCreateProduct}
              />
              <Button
                type={"fill"}
                text="Maintain Order"
                onClick={handleManageOrder}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
