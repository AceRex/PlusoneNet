import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Components/button.js";
import { AiOutlineClose } from "react-icons/ai";
import { OthersAction } from "../../../Redux/slice/otherSlice.js";
import Row from "../../../Components/row.js";
import ManageCard from "./card.js";
import {
  deletedOrderById,
  fetchOrder,
} from "../../../Redux/slice/OrderSlice.js";

const ManageOrder = () => {
  const manageOrder = useSelector((state) => state.others.manageOrder);
  const orders = useSelector((state) => state.order.items);
  const orderStatus = useSelector((state) => state.order.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (orderStatus === "idle") {
      dispatch(fetchOrder());
    }
  }, [orderStatus, dispatch]);

  const handleClosePreview = () => {
    dispatch(OthersAction.setManageOrder(!manageOrder));
  };
  const handleDelete = async (id ) => {
    console.log(`Delete ${id}`);
    try {
      await dispatch(deletedOrderById(id));
      dispatch(fetchOrder());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 bg-dark/30 backdrop-blur-lg z-50 p-24">
      <div className="bg-white p-12  rounded-lg relative">
        <Button
          type={"outline"}
          icon={<AiOutlineClose size={20} />}
          variant={"blue"}
          className="absolute w-[3%] p-2 right-3 top-3"
          onClick={() => handleClosePreview()}
        />
        <h1 className="text-3xl font-bold text-primary1 tracking-tighter">
          Manage Order{" "}
        </h1>
        <div className="h-[25rem] overflow-scroll">
        <Row>
          {orders.map(
            (order, index) => (
              <ManageCard
                key={index}
                id={order._id}
                name={order.name}
                amount={order.amountOfOrder}
                quantityOfOrder={order.quantityOfOrder}
                handleDelete={() => handleDelete(order._id)}
              />
            )
          )}
        </Row>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
