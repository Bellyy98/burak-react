import React, { SyntheticEvent, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import "../../../css/order.css"
import { Order } from "../../../lib/types/order";


/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  // setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data))
});

export default function OrdersPage() {

const {setPausedOrders, setProcessOrders, setFinishedOrders } = actionDispatch(useDispatch())
  const [value, setValue] = useState("1");


/** HANDLER */



  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  } 
  return (
    <div className="order-page">
        <Container>
            <Stack className="order-container">
                <Stack className="order-left">
                <TabContext value={value}>
            <Box className="order-new-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab label="PAUSE ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
                </Stack>
                <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  src="/icons/default-user.svg"
                  className="order-user-avatar"
                />
              </div>
              <div className="order-user-icon-box">
                <img
                  src="/icons/user-badge.svg"
                  className="order-user-prof-img"
                />
              </div>
              <span className="order-user-name"> Martin </span>
              <span className="order-user-prof">User</span>
            </Box>
            <div className="liner"></div>
            <Stack className="location-box">
              <img src="/icons/location.svg" className="location-icon"/>
              <Box className="location-name">South Korea, Busan</Box>
            </Stack>
          </Box>
          <Stack className="order-right-bottom">
            
            <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"Card number : 5243 4090 2002 7495"}
                className={"order-input1"}
              />
           
            <Stack className="order-input-stack">
            <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"07 / 24"}
                className={"order-input2"}
              />
               <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"CVV : 010"}
                className={"order-input2"}
              />
            </Stack>
           
            <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"Justin Robertson"}
                className={"order-input3"}
              />
          <Stack className="order-cards">
            <img src="/icons/western-card.svg" className="img-cards"/>
            <img src="/icons/master-card.svg" className="img-cards"/>
            <img src="/icons/paypal-card.svg" className="img-cards"/>
            <img src="/icons/visa-card.svg" className="img-cards"/>
          </Stack>
          </Stack>
                </Stack>
            </Stack>
        </Container>
    </div>
  ) }