import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { HiEye } from "react-icons/hi";

function formatToNaira(amount) {
  return `₦${amount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function Card({ id, image, title, category, amount, description, handleDelete, handleEdit, handlePreview }) {
 
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
        <p className="text-lg py-2 text-center text-primary2 capitalize truncate">
          {title}
        </p>
        <div className="text-xs w-[50%] m-auto text-center p-1 px-2 rounded-lg text-dark/50 bg-primary5 uppercase">
          {category}
        </div>
      </div>
      <div className="w-full mt-2">
        <p className="text-2xl text-center tracking-tighter font-bold text-dark capitalize truncate">
          {price}
        </p>
        <div className="flex justify-between w-[50%] m-auto mt-3 gap-3">
          <button onClick={handleDelete} className="bg-primary5 p-2 text-xl text-primary3 hover:text-primary1 rounded-lg">
            <MdDelete />
          </button>
          <button onClick={handleEdit} className="bg-primary5 p-2 text-xl text-primary3 hover:text-primary1 rounded-lg">
            <MdEditSquare />
          </button>
          <button
            onClick={handlePreview}
            className="bg-primary5 p-2 text-xl text-primary3 hover:text-primary1 rounded-lg"
          >
            <HiEye />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
