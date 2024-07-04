import React, { useEffect, useState } from "react";
import Img1 from "../../Assets/images/1w.png";
import Img2 from "../../Assets/images/5w.png";
import Img3 from "../../Assets/images/6w.png";
import Img4 from "../../Assets/images/7w.png";
import Img5 from "../../Assets/images/9w.png";
import Img6 from "../../Assets/images/10w.png";
import Img7 from "../../Assets/images/11w.png";
import Img8 from "../../Assets/images/12w.png";
import Img9 from "../../Assets/images/13w.png";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ImageData = [
  {
    image: Img1,
  },
  {
    image: Img2,
  },
  {
    image: Img3,
  },
  {
    image: Img4,
  },
  {
    image: Img5,
  },
  {
    image: Img6,
  },
  {
    image: Img7,
  },
  {
    image: Img8,
  },
  {
    image: Img9,
  },
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ImageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ImageData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[93%] m-auto mb-4 p-4 bg-white rounded-lg">
      <div className="w-[100%] relative overflow-hidden rounded-lg">
        <div className="h-[100%] flex items-center content-center place-content-center w-[5%] absolute top-0 left-0">
          <div
            onClick={handlePrevious}
            className=" w-[50%] flex items-center content-center place-content-center h-[20%] rounded-lg  bg-primary4/15 hover:bg-primary4 mx-auto  "
          >
            <GrPrevious />
          </div>
        </div>
        <div className="w-[1550px] h-[400px] object-cover">
          <img
            src={ImageData[currentIndex].image}
            alt="banner"
            className="w-[100%] h-[400px] object-cover"
          />
        </div>
        <div className="h-[100%] flex items-center content-center place-content-center w-[5%] absolute top-0 right-0">
          <div
            onClick={handleNext}
            className=" w-[50%] flex items-center content-center place-content-center h-[20%] rounded-lg bg-primary4/15 hover:bg-primary4 mx-auto  "
          >
            <GrNext />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
