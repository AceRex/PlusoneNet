import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchProducts, createProduct } from "../../Redux/slice/productSlice";
import Input from "../../Components/input";
import Textarea from "../../Components/textarea";
import Button from "../../Components/button";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "tz0uzcxu");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dcjnaao1t/image/upload",
        formData
      );
      const uploadedImageUrl = response.data.secure_url;

      const productData = {
        title,
        description,
        amount,
        category,
        image: uploadedImageUrl,
      };

      dispatch(fetchProducts());
      dispatch(createProduct(productData));

      setTitle("");
      setDescription("");
      setAmount("");
      setCategory("");
      setImage(null);
      setImageUrl("");
      setImagePreview("");
    } catch (error) {
      console.error("There was an error creating the product!", error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 bg-dark/30 backdrop-blur-lg z-50 p-24">
      <div className="bg-white p-12 rounded-lg">
        <h1 className="text-3xl font-bold text-primary1 tracking-tighter">
          Create Product
        </h1>
        <form onSubmit={submitHandler} className="flex">
          <div className="w-[50%] p-12">
            <Input
              type={"text"}
              value={title}
              placeholder={"Product Title"}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              type={"text"}
              value={category}
              placeholder={"category"}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <Textarea
              row={7}
              value={description}
              placeholder={"description"}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              type={"number"}
              value={amount}
              placeholder={"amount"}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="w-[50%] p-10">
            <div>
              <Input
                type={"file"}
                accept="image/*"
                onChange={handleFileChange}
                required
              />
              <div className="w-[100%] h-[18rem] mb-4 overflow-hidden rounded-lg border-2 border-neutral">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="preview"
                    className="mt-2 w-[300px] object-contain"
                  />
                )}
              </div>
            </div>
            <Button type={"fill"} variant={"blue"} text={"Create product"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
