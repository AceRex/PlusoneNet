import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { HiEye } from "react-icons/hi";

function formatToNaira(amount) {
  return `₦${amount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function Card({ image, title, category, amount, description }) {
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
      <div className="w-full py-3 border-b border-b-dark/10">
        <p className="text-lg text-center text-primary2 capitalize truncate">
          {title}
        </p>
        <div className="text-xs w-[50%] m-auto text-center p-1 px-2 rounded-lg text-dark/50 bg-primary5 uppercase">
          {category}
        </div>
      </div>
      <div className="w-full mt-2">
        <p className="text-3xl text-center tracking-tighter font-bold text-dark capitalize truncate">
          {price}
        </p>
        <div className="flex justify-between w-[50%] m-auto mt-3 gap-3">
          <button className="bg-primary5 p-2 text-xl text-primary3 rounded-lg">
            <MdDelete />
          </button>
          <button className="bg-primary5 p-2 text-xl text-primary3 rounded-lg">
            <MdEditSquare />
          </button>
          <button className="bg-primary5 p-2 text-xl text-primary3 rounded-lg">
            <HiEye />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
