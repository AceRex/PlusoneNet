import { useDispatch } from "react-redux";
import Button from "./button";
import { FaCartPlus } from "react-icons/fa";
import { ProductAction } from "../Redux/slice/productSlice";

function formatToNaira(amount) {
  return `₦${amount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function Itemcard({ id, image, title, category, amount, description }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      ProductAction.addToCart({ id, image, title, category, amount, description })
    );
  };
  const price = formatToNaira(amount);
  return (
    <div className="bg-white p-4 rounded-lg overflow-hidden">
      <div className="h-[200px] w-full mb-4 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full hover:scale-125 transition"
        />
      </div>
      <div className="w-full py-3 border-b border-b-neutral">
        <p className="text-sm font-semibold text-dark/40 -mb-1 capitalize truncate">
          {title}
        </p>
        <span className="text-xs text-dark/20 uppercase">{category}</span>
      </div>
      <div className="w-full py-3 flex items-center">
        <p className="text-xl w-[90%] tracking-tight font-bold text-dark -mb-1 capitalize truncate">
          {price}
        </p>
        <Button
          type={"fill"}
          icon={<FaCartPlus />}
          variant={"blue"}
          onClick={addToCart}
        />
      </div>
    </div>
  );
}

export default Itemcard;
