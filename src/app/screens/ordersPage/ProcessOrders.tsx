import React from "react";
import { Margin } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";
import { Box, Stack } from "@mui/material";

export default function ProcessOrders() {
  return (
    <Stack className="all-order-collections">
      <TabPanel value="2">
        {[1,2].map((ele, index) => {
          return (
            <Stack key={index} className="order-collection-frame">
            <Stack className="order-collection-top">
              {[1, 2,3].map((ele2, index2) => {
                return (
                  <Stack key={index2} className="order-top-frame1">
                <img src="/img/lavash.webp" className="order-dish-img" />
                <Box className="top-collection-dish">Lavash</Box>
                <Stack className="top-calculate-frame">
                  <span>$9</span>
                  <img src="/icons/close.svg" />
                  <span>2</span>
                  <img src="/icons/pause.svg" />
                  <span style={{ marginLeft: "15px" }}>$24</span>
                </Stack>
              </Stack>
                )
              })}
            </Stack>
            <Stack className="order-collection-bottom">
              <Stack className="order-collection-bottom-left">
                <span>Product price</span>
                <span>$18</span>
                <img
                  src="/icons/plus.svg"
                  style={{ marginLeft: "20px", height: "17px", width: "17px" }}
                />
                <span>Delivery cost</span>
                <span>2</span>
                <img
                  src="/icons/pause.svg"
                  style={{ marginLeft: "20px", height: "17px", width: "17px" }}
                />
                <span>Total</span>
                <span>$20</span>
                
              </Stack>
              <Stack className="time-frame">
              <span className="data-compl">
                  {moment().format("YY-MM-DD HH:mm")}
              </span>
              <Button  className="pay-button1" >
                <span className="span-proces">VERIFY TO FULFIL</span>
              </Button>
              </Stack>
            </Stack>
          </Stack>
          )
        })}
       {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src="/icons/noimage-list.svg"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
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
