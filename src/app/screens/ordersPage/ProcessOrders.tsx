import React from "react";
import { Margin } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { Box, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "./selector";
import { Messages, serverApi } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { useGlobals } from "../../hooks/useGlobals";
import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

/** REDUX SLICE & SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);

interface ProcessOrdersProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: ProcessOrdersProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { processOrders } = useSelector(processOrdersRetriever);

  // HANDLER

  const finishOrderHandler = async (e: T, orderId: string) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      // PAYMENT Process

      
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };

      const confirmation = window.confirm("Have you recieved your order?");
      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setValue("3");
        // Process Orders
        setOrderBuilder(new Date());
      }
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack className="all-order-collections">
      <TabPanel value="2">
        {processOrders?.map((order: Order) => {
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
                <Stack className="time-frame">
                  <span className="data-compl">
                    {moment().format("YY-MM-DD HH:mm")}
                  </span>
                  <Button
                    className="pay-button1"
                    value={order._id}
                    onClick={(e:any) => finishOrderHandler(e,order._id) }
                   
                    variant="contained"
                  >
                    <span className="span-proces">Verify to Fulfil</span>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
        {!processOrders ||
          (processOrders.length === 0 && (
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

    // <TabPanel value={"2"}>
    //   <Stack >
    //     {[].map((ele, index) => {
    //       return (
    //         <Box key={index} className={"order-main-box"}>
    //           <Box className="order-box-controll">
    //             {[1, 2].map((ele2, index2) => {
    //               return (
    //                 <Box key={index2} className="orders-main-price">
    //                   <img src="/img/kebab.webp" className="order-dish-img" />
    //                   <p className="title-dish">Kebab</p>
    //                   <Box className="price-box">
    //                     <p>$11</p>
    //                     <img src="/icons/close.svg" />
    //                     <p>2</p>
    //                     <img src="/icons/pause.svg" />
    //                     <p style={{ marginLeft: "15px" }}>$22</p>
    //                   </Box>
    //                 </Box>
    //               );
    //             })}
    //           </Box>

    //           <Box className={"total-price-box"}>
    //             <Box className="box-total">
    //               <p>Product price</p>
    //               <p>$22</p>
    //               <img src="/icons/plus.svg" style={{ marginLeft: "20px" }} />
    //               <p>delivery cost</p>
    //               <p>$2</p>
    //               <img src="/icons/pause.svg" style={{ marginLeft: "20px" }} />
    //               <p>Total</p>
    //               <p>$24</p>
    //             </Box>
    //             <p className="data-compl">
    //               {moment().format("YY-MM-DD HH:mm")}
    //             </p>
    //             <Button className="verify-button" variant="contained">
    //               Verify to Fulfil
    //             </Button>
    //           </Box>
    //         </Box>
    //       );
    //     })}

    //     {true && (
    //       <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
    //         <img
    //           src="/icons/noimage-list.svg"
    //           style={{ width: 300, height: 300 }}
    //         />
    //       </Box>
    //     )}
    //   </Stack>
    // </TabPanel>
  );
}
