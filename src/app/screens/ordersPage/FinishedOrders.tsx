import React from "react";
import {} from "@mui/icons-material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { Box, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders, retrievePausedOrders } from "./selector";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders }))

export default function FinishedOrders() {
  const { finishedOrders } = useSelector(finishedOrdersRetriever);

  return ( 
    <Stack className="all-order-collections">
    <TabPanel value="3">
    {finishedOrders?.map((order: Order) => {
        return (
          <Stack key={order._id} className="order-collection-frame">
          <Stack className="order-collection-top">
          {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`
              return (
                <Stack key={item._id} className="order-top-frame1">
              <img src={imagePath} className="order-dish-img" />
              <Box className="top-collection-dish">{product.productName}</Box>
              <Stack className="top-calculate-frame">
              <span>${item.itemPrice}</span>
                <img src="/icons/close.svg" />
                <span>{item.itemQuantity}</span>
                <img src="/icons/pause.svg" />
                <span style={{ marginLeft: "15px" }}>${item.itemQuantity * item.itemPrice}</span>
              </Stack>
            </Stack>
              )
            })}
          </Stack>
          <Stack className="order-collection-bottom">
            <Stack className="order-collection-bottom-left">
              <span>Product price</span>
              <span>${order.orderTotal - order.orderDelivery}</span>
              <img
                src="/icons/plus.svg"
                style={{ marginLeft: "20px", height: "17px", width: "17px" }}
              />
              <span>Delivery cost</span>
              <span>${order.orderDelivery}</span>
              <img
                src="/icons/pause.svg"
                style={{ marginLeft: "20px", height: "17px", width: "17px" }}
              />
              <span>Total</span>
              <span>${order.orderTotal}</span>
            </Stack>
           
          
          </Stack>
        </Stack>
        )
      })}
     {!finishedOrders ||  (finishedOrders.length === 0 && (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
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
