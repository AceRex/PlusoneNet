import Button from "../../Components/button";
import { useDispatch, useSelector } from "react-redux";
import { OthersAction } from "../../Redux/slice/otherSlice";

function Header() {
  let dispatch = useDispatch();
  const createProductModal = useSelector(state => state.others.createProductModal)
  
  const handleCreateProduct = () => {
    dispatch(OthersAction.setCreateProductModal(!createProductModal))
  };
  return (
    <header className="p-4 relative z-50 h-[10vh] flex place-content-center">
      <div className="bg-primary1 flex justify-between items-center fixed shadow-xl font-bold text-xl w-[50vw] m-auto rounded-lg p-4 text-white text-center">
        
        <div className="w-[50%] text-start"><p>Ecommerce Admin Portal</p></div>
        <div className="flex w-[50%] gap-4">
          <Button
            type={"outline"}
            text="Create product"
            onClick={handleCreateProduct}
          />
          <Button
            type={"fill"}
            text="Maintain Order"
            onClick={handleCreateProduct}
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
