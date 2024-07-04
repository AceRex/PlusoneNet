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

function Header() {
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
    <header className="hidden z-50 h-[16vh] mb-3 bg-white lg:flex xl:flex flex-col place-content-center">
      <div className="flex items-center h-[50%] w-[93%] m-auto">
        <div className="w-[25%] p-4">
          <Link to={"/"}>
            <img src={Logo} alt="logo" className="w-[130px]" />
          </Link>
        </div>
        <div className="w-[45%] p-2 ">
          <div className="flex gap-2  ">
            <input
              type="search"
              className="p-2 w-[80%] border  rounded-md border-dark/50 outline-none"
            />
            <button className="bg-primary1 w-[20%] text-sm rounded-md text-white flex items-center place-content-center gap-2">
              <FaMagnifyingGlass size={10} />{" "}
              <span className="font-semibold">Search</span>
            </button>
          </div>
        </div>
        <div className="w-[30%] p-4">
          <div className="flex gap-4 items-center place-content-center">
            <div
              onClick={handleAccClick}
              className="relative flex items-center rounded-md p-3 px-4 gap-2 cursor-pointer"
            >
              <FiUser size={25} className="text-primary1" />
              <p className="text-sm tracking-tighter text-primary1 font-semibold">
                Account
              </p>
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
            <div
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
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100vw] relative shadow-md bg-primary1 p-2">
        <div className="w-[88%] m-auto mt-1 flex items-center">
          <div
            className={`w-1/2 flex gap-2 items-center cursor-pointer`}
            onClick={handleCatClick}
          >
            <RxHamburgerMenu className="text-white" />
            <p className="font-semibold tracking-tight text-white text-md capitalize">
              category
            </p>
            {!catClick ? (
              <IoIosArrowDown className="text-white" />
            ) : (
              <IoIosArrowUp className="text-white" />
            )}
          </div>
        </div>
        {catClick && (
          <div className="absolute flex z-50 left-[5%] w-[90%] top-11 bg-neutral rounded-lg">
            <div className="w-[30%] bg-white list-none h-[28rem] overflow-scroll">
              {category.map(({ slug, name }) => (
                <li className="flex justify-between items-center tracking-tight hover:bg-neutral p-4 px-8 text-sm">
                  <p>{name}</p> <GrNext />
                </li>
              ))}
            </div>
            <div className="w-[50%] p-8">Main category</div>
            <div className="w-[30%] p-4">
              <div className=" bg-white p-2 rounded-lg">
                <img
                  src={CatImg[actImg].image}
                  className=" w-[400px] h-[400px]"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
