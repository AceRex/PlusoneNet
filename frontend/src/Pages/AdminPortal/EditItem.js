import { useEffect, useState } from "react";
import Button from "../../Components/button";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { OthersAction } from "../../Redux/slice/otherSlice";
import {
  fetchProducts,
  getProductById,
  updateProductById,
} from "../../Redux/slice/productSlice";
import { TiInfo } from "react-icons/ti";
import Input from "../../Components/input";
import axios from "axios";

function formatToNaira(amount) {
  return `₦${amount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function EditProduct({ id }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.previewItem);
  const editProductModal = useSelector(
    (state) => state.others.editProductModal
  );

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setTitle(product.title || "");
      setCategory(product.category || "");
      setAmount(product.amount || "");
      setDescription(product.description || "");
      setSelectedImage(product.image || null);
    }
  }, [product]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "tz0uzcxu");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dcjnaao1t/image/upload",
          formData
        );

        setSelectedImage(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedData = {
        title,
        category,
        amount,
        description,
        image: selectedImage,
      };
      await dispatch(updateProductById({ productId: id, updatedData }));
      dispatch(fetchProducts());
      dispatch(OthersAction.setEditProductModal(!editProductModal));
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  const handleClosePreview = () => {
    dispatch(OthersAction.setEditProductModal(!editProductModal));
  };

  return (
    <div className="w-full h-screen fixed backdrop-blur-md p-24 bg-dark/30 z-50 top-0">
      <div className="bg-white rounded-lg p-12 flex gap-4 relative">
        <Button
          type={"outline"}
          icon={<AiOutlineClose size={20} />}
          variant={"blue"}
          className="absolute w-[3%] p-2 right-3 top-3"
          onClick={handleClosePreview}
        />
        <div className="w-[50%]">
          {selectedImage && (
            <div className="w-[450px] h-[450px] overflow-hidden">
              <img src={selectedImage} alt="img" className="object-contain" />
            </div>
          )}
          <Input
            type={"file"}
            accept={"image/*"}
            onChange={handleImageChange}
          />
        </div>
        <div className="w-[50%] p-2">
          <span className="text-xs text-primary1 justify-center gap-2 flex items-center bg-primary4 p-2 rounded-lg ">
            <TiInfo size={20} /> Click on any of the field to update values
          </span>
          <input
            type="text"
            value={title}
            className="text-5xl mt-4 tracking-tighter font-bold capitalize"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={category}
            className="text-sm text-center bg-primary1 rounded-lg text-primary5 p-1 px-4 font-bold"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            value={formatToNaira(amount)}
            className="text-4xl tracking-tighter font-bold mt-4"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="my-4 pb-4">
            <textarea
              rows={7}
              value={description}
              className="text-lg w-[100%] text-dark/40 overflow-hidden overflow-y-scroll no-scrollbar"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
            type={"fill"}
            text={"Update"}
            variant={"blue"}
            onClick={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
export default EditProduct;
