import React from "react";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Messages, serverApi } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { T } from "../../../lib/types/common";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { OrderStatus } from "../../../lib/enums/order.enum";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";


/** REDUX SLICE & SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

interface PausedOrdersProps {
  setValue: (input: string) => void
}

export default function PausedOrders(props: PausedOrdersProps) {
  const {setValue} = props
  const {authMember, setOrderBuilder} = useGlobals()
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  // HANDLER

  const deleteOrderHandler = async (e: T) => {
    try {
      if(!authMember) throw new Error(Messages.error2)
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };

      const confirmation = window.confirm("Do you want to delete the order?")
      if(confirmation) {
        const order = new OrderService()
        await order.updateOrder(input)
        setOrderBuilder(new Date())
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };


  const processOrderHandler = async (e: T) => {
    try {
      if(!authMember) throw new Error(Messages.error2)
        // PAYMENT Process

      const orderId = e.target.value
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };

      const confirmation = window.confirm("Do you want to proceed with payment?")
      if(confirmation) {
        const order = new OrderService()
        await order.updateOrder(input)
        setValue("2")
        // Process Orders
        setOrderBuilder(new Date())
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack className="all-order-collections">
      <TabPanel value="1">
        {pausedOrders?.map((order: Order) => {
          // console.log("order1111111:", order)
          return (
            <Stack key={order._id} className="order-collection-frame">
              <Stack className="order-collection-top">
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Stack key={item._id} className="order-top-frame1">
                      <img src={imagePath} className="order-dish-img" />
                      <Box className="top-collection-dish">
                        {product.productName}
                      </Box>
                      <Stack className="top-calculate-frame">
                        <span>${item.itemPrice}</span>
                        <img src="/icons/close.svg" />
                        <span>{item.itemQuantity}</span>
                        <img src="/icons/pause.svg" />
                        <span style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </span>
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
              <Stack className="order-collection-bottom">
                <Stack className="order-collection-bottom-left">
                  <span>Product price</span>
                  <span>${order.orderTotal - order.orderDelivery}</span>
                  <img
                    src="/icons/plus.svg"
                    style={{
                      marginLeft: "20px",
                      height: "17px",
                      width: "17px",
                    }}
                  />
                  <span>Delivery cost</span>
                  <span>${order.orderDelivery}</span>
                  <img
                    src="/icons/pause.svg"
                    style={{
                      marginLeft: "20px",
                      height: "17px",
                      width: "17px",
                    }}
                  />
                  <span>Total</span>
                  <span>${order.orderTotal}</span>
                </Stack>
                <Button
                  value={order._id}
                  variant="contained"
                  color="secondary"
                  className="cancel-button"
                  onClick={deleteOrderHandler}
                >
                  <span> Cancel</span>
                </Button>
                <Button
                  variant="contained"
                  className="pay-button"
                  value={order._id}
                onClick={processOrderHandler}
                >
                  <span>Payment</span>
                </Button>
              </Stack>
            </Stack>
          );
        })}
        {!pausedOrders ||
          (pausedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src="/icons/noimage-list.svg"
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </TabPanel>
    </Stack>
  );
}
