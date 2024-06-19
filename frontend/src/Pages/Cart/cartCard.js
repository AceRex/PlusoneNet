import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ProductAction } from "../../Redux/slice/productSlice";
import Button from "../../Components/button";
import Input from "../../Components/input";

function CartCard({
  amount,
  category,
  description,
  id,
  image,
  quantity,
  title,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(ProductAction.removeFromCart({ id }));
  };
  const handleIncrement = () => {
    dispatch(ProductAction.incCartItem({id}));
  };
  const handledecrement = () => {
    dispatch(ProductAction.decCartItem({id}));
  };
  return (
    <div className="flex items-center mb-5 shadow-sm shadow-dark/5 hover:shadow-lg p-4">
      <div className="w-[70px] h-[70px] overflow-hidden">
        <img src={image} alt={title} className="object-contain" />
      </div>
      <div className="flex flex-col w-[60%]">
        <p className="text-lg text-dark font-bold capitalize">{title}</p>
        <span className="text-sm text-dark/40 uppercase">{category}</span>
      </div>
      <div className="flex items-center w-[30%] gap-3">
        <div className="flex items-center">
          <Button
            type={"outline"}
            text={"-"}
            variant={"blue"}
            onClick={() =>handledecrement()}
          />
          <Input type="text" placeholder={quantity} disabled />
          <Button
            type={"outline"}
            text={"+"}
            variant={"blue"}
            onClick={handleIncrement}
          />
        </div>
        <div
          onClick={handleDelete}
          className="bg-error/5 text-error hover:text-white hover:bg-error rounded-lg p-2"
        >
          <MdDeleteOutline size={20} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
