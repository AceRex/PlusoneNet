import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Row from "../../Components/row";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Itemcard from "../../Components/itemcard";

export default function Main() {
  const products = useSelector((state) => state.products.items);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const paginatedProduct = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return products.slice(startIndex, startIndex + rowsPerPage);
  }, [products, currentPage, rowsPerPage]);
  return (
    <>
      <Row>
        {paginatedProduct.map((product) => (
          <Itemcard
            id={product._id}
            title={product.title}
            category={product.category}
            image={product.image}
            amount={product.amount}
          />
        ))}
      </Row>
      <div className="flex justify-between place-content-end w-[30%] m-auto items-center my-4 px-4 bg-white">
        <span className="text-xs p-2 rounded-lg">Page {currentPage}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-neutral_color3/20 disabled:bg-neutral_color3/50 text-neutral_color3/70 disabled:text-neutral_color3/100 rounded disabled:opacity-20"
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < Math.ceil(products.length / rowsPerPage)
                  ? prev + 1
                  : prev
              )
            }
            disabled={currentPage >= Math.ceil(products.length / rowsPerPage)}
            className="px-4 py-2 bg-neutral_color3/20 disabled:bg-neutral_color3/50 text-neutral_color3/70 disabled:text-neutral_color3/100 rounded disabled:opacity-20"
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </>
  );
}
