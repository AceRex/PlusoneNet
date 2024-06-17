import Button from "./button";

function Itemcard({ image, title, category, amount, description }) {
  return (
    <div className="bg-white p-4 rounded-lg overflow-hidden">
      <div className="h-[200px] w-full mb-4 flex items-center justify-center">
        <img src={image} alt={title} className="object-cover h-full w-full" />
      </div>
      <div className="w-full py-3 border-b border-b-neutral">
        <p className="text-sm font-semibold text-dark/40 -mb-1 capitalize truncate">
          {title}
        </p>
        <span className="text-xs text-dark/20 uppercase">{category}</span>
      </div>
      <div className="w-full py-3 flex ">
        <p className="text-xl font-bold text-dark -mb-1 capitalize truncate">
          {amount}
        </p>
        <Button type={"fill"} text={"Add to Cart"} variant={"blue"}/>
      </div>
    </div>
  );
}

export default Itemcard;
