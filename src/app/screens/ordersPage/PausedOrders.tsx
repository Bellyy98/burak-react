import React from "react";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

export default function PausedOrders() {
  return (  
    <Stack className="all-order-collections">
    <TabPanel value="1">
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
            <Button
              variant="contained"
              color="secondary"
              className="cancel-button"
            >
              <span> Cancel</span>
            </Button>
            <Button variant="contained" className="pay-button">
              <span>Payment</span>
            </Button>
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
    
  );
}
