import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";
import Devider from "../../components/divider/index"

export default function Statistics () {
    return (
        <div className="static-frame ">
            <Container>
               <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-num">12</Box>
                    <Box className="static-text">Restaurants</Box>
                </Stack>

                <Devider height="64" width="2" bg="#E3C08D" />

                <Stack className="static-box">
                    <Box className="static-num">8</Box>
                    <Box className="static-text">Experience</Box>
                </Stack>
                <Devider height="64" width="2" bg="#E3C08D" />
                <Stack className="static-box">
                    <Box className="static-num">50+</Box>
                    <Box className="static-text">Menu</Box>
                </Stack>
                <Devider height="64" width="2" bg="#E3C08D" />
                <Stack className="static-box">
                    <Box className="static-num">200+</Box>
                    <Box className="static-text">Clients</Box>
                </Stack>
               </Stack>
            </Container>
        </div>
    )}