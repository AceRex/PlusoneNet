import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { OthersAction } from "../Redux/slice/otherSlice";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo/Logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { category } from "../Data";
import { IoCloseOutline } from "react-icons/io5";

import catImg from "../Assets/images/1s.png";
import catImg1 from "../Assets/images/2s.png";
import catImg2 from "../Assets/images/3s.png";
import catImg3 from "../Assets/images/4s.png";
import catImg4 from "../Assets/images/5s.png";
import catImg5 from "../Assets/images/6s.png";
import catImg6 from "../Assets/images/7s.png";
import catImg7 from "../Assets/images/13s.png";
import catImg8 from "../Assets/images/9s.png";
import catImg9 from "../Assets/images/10s.png";
import catImg10 from "../Assets/images/11s.png";
import catImg11 from "../Assets/images/12s.png";
import { GrNext } from "react-icons/gr";

const CatImg = [
  { image: catImg },
  { image: catImg1 },
  { image: catImg2 },
  { image: catImg3 },
  { image: catImg4 },
  { image: catImg5 },
  { image: catImg6 },
  { image: catImg7 },
  { image: catImg8 },
  { image: catImg9 },
  { image: catImg10 },
  { image: catImg11 },
];

function MobileHeader() {
  const dispatch = useDispatch();

  const [actImg, setActImg] = useState(0);
  const [accClick, setAccClick] = useState(false);
  const [catClick, setCatClick] = useState(false);

  const cart = useSelector((state) => state.products.cart);
  const cartModal = useSelector((state) => state.others.cartModal);

  useEffect(() => {
    const interval = setInterval(() => {
      setActImg((prevIndex) =>
        prevIndex === CatImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openCart = () => {
    dispatch(OthersAction.setCartModal(!cartModal));
  };
  const handleAccClick = () => {
    setAccClick(!accClick);
  };
  const handleCatClick = () => {
    setCatClick(!catClick);
  };
  return (
    <header className="flex h-[18.5vh] bg-red lg:hidden xl:hidden flex-col place-content-center">
      <div className="fixed h-[16vh] bg-white top-0 z-50">
        <div className="flex  items-center content-center place-content-center h-[60%] w-[100%]">
          <div className="w-[20%] relative p-2">
            <div className="w-[100%] m-auto mt-1 flex items-center">
              <div
                className={`flex gap-2 items-center cursor-pointer`}
                onClick={handleCatClick}
              >
                {!catClick ? (
                  <RxHamburgerMenu size={20} className="text-primary1" />
                ) : (
                  <IoCloseOutline size={25} className="text-primary1" />
                )}
              </div>
            </div>
            <div
              className={`absolute flex flex-row z-50 ${
                !catClick ? "right-[12rem]" : "-left-5"
              } w-[100vw] transition-transform duration-500 ease-in-out top-11 bg-neutral`}
            >
              <div className="w-[40%] bg-white list-none h-[28rem] overflow-scroll">
                {category.map(({ slug, name }) => (
                  <li className="flex justify-between items-center tracking-tight hover:bg-neutral p-4 px-6 text-sm">
                    <p>{name}</p> <GrNext />
                  </li>
                ))}
              </div>
              <div className="w-[60%] p-8">Main category</div>
              {/* <div className="w-[30%] p-4">
              <div className=" bg-white p-2 rounded-lg">
                <img
                  src={CatImg[actImg].image}
                  className=" w-[400px] h-[400px]"
                  alt="banner"
                />
              </div>
            </div> */}
            </div>
          </div>
          <div className="w-[50%] flex items-center content-center place-content-center p-8">
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="w-[60px]" />
            </Link>
          </div>
          <div className="w-[20%] text-center flex justify-right p-1">
            {/* <div className="flex gap-4 items-center place-content-center"> */}
            <div
              onClick={handleAccClick}
              className="relative flex items-center rounded-md p-3 px-4 gap-2 cursor-pointer"
            >
              <FiUser size={20} className="text-primary1" />
              {!accClick ? (
                <IoIosArrowDown size={15} className="text-primary1" />
              ) : (
                <IoIosArrowUp size={15} className="text-primary1" />
              )}
              {accClick && (
                <div className="absolute z-50 p-4 rounded-md w-[100%] capitalize list-none top-12 bg-white shadow-xl shadow-dark/30">
                  <li className="p-2 bg-primary1 text-center rounded-md text-sm mb-3 font-medium tracking-tight">
                    <p className="text-center text-white">Login</p>
                  </li>
                  <li className="p-2 bg-secondary text-center rounded-md text-sm font-medium tracking-tight">
                    <p className="text-center text-dark">Register</p>
                  </li>
                </div>
              )}
            </div>
            {/* <div
              onClick={openCart}
              className=" flex border-l items-center cursor-pointer place-content-center text-primary1 p-3 px-6 gap-2"
            >
              <FaShoppingCart size={25} />
              <div className="flex flex-col">
                <p className="text-sm text-primary1 tracking-tighter -mb-1 font-semibold">
                  {cart.length} items in cart
                </p>
                <p className="text-[10px] text-dark tracking-tight">
                  Total Amount is $80
                </p>
              </div>
            </div> */}
            {/* </div> */}
          </div>
        </div>

        <div className="w-[100vw] p-2 bg-primary1">
          <div className="flex gap-2">
            <input
              type="search"
              className="p-2 w-[70%] border  rounded-md border-dark/50 outline-none"
            />
            <button className="bg-secondary w-[30%] text-sm rounded-md text-white flex items-center place-content-center gap-2">
              <FaMagnifyingGlass size={10} />{" "}
              <span className="font-semibold">Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
