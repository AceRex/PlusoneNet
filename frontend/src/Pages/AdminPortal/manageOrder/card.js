import Button from "../../../Components/button";
import { formatToNaira } from "../../../Components/itemcard";

export default function ManageCard({
  id,
  name,
  amount,
  quantityOfOrder,
  handleDelete,
}) {
  return (
    <div className="bg-white flex flex-col gap-2 border rounded-lg border-dark/5 p-4">
      <p className="text-xs font-light text-dark/50">
        <span>Order Id:</span> {id}
      </p>
      <p className="text-xl font-bold tracking-tighter flex flex-col h-[50%] text-primary1">
        <span className="text-sm font-light tracking-normal text-dark/50">
          Order by:{" "}
        </span>{" "}
        {name}
      </p>{" "}
      <p className="text-xl font-bold tracking-tighter text-dark">
        <span className="text-sm font-light tracking-normal text-dark/50">
          Order Amount:
        </span>
        {formatToNaira(amount)}
      </p>{" "}
      <p className="text-sm font-bold text-dark">
        <span className="text-sm font-light text-dark/50">Order items: </span>{" "}
        {quantityOfOrder}
      </p>
      <Button
        type={"fill"}
        text={"Delete Order"}
        variant={"blue"}
        onClick={handleDelete}
      />
    </div>
  );
}
