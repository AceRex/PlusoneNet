import { useDispatch, useSelector } from "react-redux";
import Input from "../../Components/input";
import { useMemo, useState } from "react";
import { formatToNaira } from "../../Components/itemcard";
import Button from "../../Components/button";
import { createOrder } from "../../Redux/slice/OrderSlice";

function Order() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.products.cart);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState();

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        name,
        address,
        state,
        country,
        phone,
        amountOfOrder: totalAmount,
        quantityOfOrder: totalItems,
        cart,
      };

      dispatch(createOrder(orderData));

      setName("");
      setAddress("");
      setCountry("");
      setPhone();
      setState("");
    } catch (error) {
      console.error("There was an error creating the product!", error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-dark/20 backdrop-blur-lg fixed top-0 right-0 flex place-content-center p-24 z-50">
      <div class="w-[80%] bg-white rounded-lg p-12">
        <h3 className="font-bold text-3xl text-primary1">Place order</h3>
        <div className="flex gap-4">
          <div className="w-1/2 p-8">
            <Input type={"text"} placeholder={"Enter your name..."} onChange={(e) => setName(e.target.value)}/>
            <Input type={"text"} placeholder={"Address"} onChange={(e) => setAddress(e.target.value)}/>
            <Input type={"text"} placeholder={"State"} onChange={(e) => setState(e.target.value)}/>
            <Input type={"text"} placeholder={"Country"} onChange={(e) => setCountry(e.target.value)}/>
            <Input type={"number"} placeholder={"Phone number"} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="p-12 w-1/2 ">
            <div className="bg-neutral rounded-lg p-4">
              <span className="text-sm">Total Amount of Items</span>
              <p className="text-4xl font-bold tracking-tighter mb-4">
                {formatToNaira(totalAmount)}
              </p>
              <span className="text-sm">Total quantity of Items</span>
              <p className="text-4xl font-bold tracking-tighter">
                {totalItems}
              </p>
              <div className="mt-8">
                <Button
                  type={"fill"}
                  text={"Place order"}
                  variant={"blue"}
                  onClick={handlePlaceOrder}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
