import { useEffect, useState } from "react";
import Button from "../../Components/button";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { OthersAction } from "../../Redux/slice/otherSlice";
import { TiInfo } from "react-icons/ti";
import { ProductAction, getProductById } from "../../Redux/slice/productSlice";

function formatToNaira(amount) {
  return `₦${amount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function Preview({ id }) {
  const dispatch = useDispatch();
  const previewItem = useSelector((state) => state.products.previewItem);
  const openAdminPreview = useSelector(
    (state) => state.others.openAdminPreview
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const price = formatToNaira(previewItem?.amount || 0);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
    return () => {
      dispatch(ProductAction.clearPreviewItem());
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (previewItem) {
      setSelectedImage(previewItem.image);
    }
  }, [previewItem]);

  const handleClosePreview = () => {
    dispatch(OthersAction.setOpenAdminPreview(!openAdminPreview));
  };

  if (!previewItem) {
    return null;
  }

  return (
    <div className="w-full h-screen fixed backdrop-blur-md p-24 bg-dark/30 z-50 top-0">
      <div className="bg-white rounded-lg p-12 flex gap-4 relative">
        <Button
          type={"outline"}
          icon={<AiOutlineClose size={20} />}
          variant={"blue"}
          className="absolute w-[3%] p-2 right-3 top-3"
          onClick={() => handleClosePreview()}
        />
        <div className="w-[50%]">
          <div className="w-[450px] h-[450px] overflow-hidden">
            <img src={selectedImage} alt="img" className="object-contain object-fit" />
          </div>
        </div>
        <div className="w-[50%] p-2">
          <input
            type="text"
            value={previewItem.title}
            className="text-5xl mt-4 tracking-tighter font-bold"
            disabled
          />
          <input
            type="text"
            value={previewItem.category}
            className="text-sm text-center bg-primary1 rounded-lg text-primary5 p-1 px-4 font-bold"
            disabled
          />
          <input
            type="text"
            value={price}
            className="text-4xl tracking-tighter font-bold mt-4"
            disabled
          />
          <div className="my-4 pb-4">
            <textarea
              rows={7}
              value={previewItem.description}
              className="text-lg w-[100%] text-dark/40 overflow-hidden overflow-y-scroll no-scrollbar "
              disabled
            />
          </div>

          <span className="text-xs text-primary1 justify-center gap-2 flex items-center bg-primary5 p-2 rounded-lg ">
            <TiInfo size={20} /> Items cannot be edited from here
          </span>
        </div>
      </div>
    </div>
  );
}

export default Preview;
