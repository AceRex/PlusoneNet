import { useState } from "react";
import Button from "../../Components/button";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { OthersAction } from "../../Redux/slice/otherSlice";
import { TiInfo } from "react-icons/ti";

function formatToNaira(amount) {
  return `₦${amount?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function Preview({ image, title, category, amount, description }) {
  let dispatch = useDispatch();

  const openAdminPreview = useSelector(
    (state) => state.others.openAdminPreview
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const price = formatToNaira(amount);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClosePreview = () => {
    dispatch(OthersAction.setOpenAdminPreview(!openAdminPreview));
  };
  return (
    <div className="w-full h-screen fixed backdrop-blur-md p-24 bg-dark/30 z-50 top-0">
      <div className="bg-white rounded-lg p-12 flex relative">
        <Button
          type={"outline"}
          icon={<AiOutlineClose size={20}/>}
          variant={"blue"}
          className="absolute w-[3%] p-2 right-3 top-3"
          onClick={() => handleClosePreview()}
        />
        <div className="w-[50%]">
          {selectedImage && (
            <div className="w-[500px] h-[500px]">
              <img src={selectedImage} alt="img" />
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="w-[50%] p-2">
          <span className="text-xs text-primary1 justify-center gap-2 flex items-center bg-primary4 p-2 rounded-lg ">
            <TiInfo size={20} /> Click on any of the field to update values
          </span>
          <input
            type="text"
            value="Smart Watch"
            className="text-5xl mt-4 tracking-tighter font-bold"
          />
          <input
            type="text"
            value={"Watch"}
            className="text-sm text-center bg-primary1 rounded-lg text-primary5 p-1 px-4 font-bold"
          />
          <input
            type="text"
            value={price}
            className="text-4xl tracking-tighter font-bold mt-4"
          />
          <div className="my-4 pb-4">
            <textarea
              rows={7}
              value={""}
              className="text-lg w-[100%] text-dark/40 overflow-hidden overflow-y-scroll no-scrollbar "
            />
          </div>
          <Button type={"fill"} text={"Update"} variant={"blue"} />
        </div>
      </div>
    </div>
  );
}
export default Preview;
