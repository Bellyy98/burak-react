import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from '@mui/joy/Card';
import { CardContent, CssVarsProvider, Divider, IconButton, Typography } from "@mui/joy"
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from "@mui/joy/AspectRatio";


const activeUsers  = [
    { memberNick: "Martin", memberImage: "/img/martin.webp"},
    { memberNick: "Justin", memberImage: "/img/justin.webp"},
    { memberNick: "Rose", memberImage: "/img/rose.webp"},
    { memberNick: "Nusret", memberImage: "/img/nusret.webp"},
]

export default function ActiveUsers () {
    return (
    <div className="active-users-frame">
        <Container>
            <Stack className="main">
             <Box className="category-title" >Active Users</Box>
             <Stack className="cards-frame">
             {activeUsers.length !== 0 ? (
                    activeUsers.map((ele, index) => {
                        return (
               <CssVarsProvider>
               <Card variant="outlined" sx={{ width: 305,marginRight:"10px"}}>
                <CardOverflow>
                <AspectRatio  className="membeer-image1">
                    <img src={ele.memberImage} alt=""/>
                 </AspectRatio>
                </CardOverflow>
                 <CardOverflow variant="soft" sx={{ bgcolor: "white" }}>
                    <Typography
                        level="h2"
                        textAlign={"center"}
                        fontSize={"lg"}
                        textColor={"0,0,0"}
                        className="member-nickname"
                        >
                        {ele.memberNick}
                    </Typography>
                </CardOverflow>
    </Card>
               </CssVarsProvider>
              )
            })
        ) : ( <Box className="no-data"> No Active Users!</Box>)}
        </Stack>
            </Stack>
        </Container>
    </div>)
}