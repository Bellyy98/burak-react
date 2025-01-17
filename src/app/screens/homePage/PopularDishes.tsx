import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles"
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardCover  from "@mui/joy/CardCover";
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardOverflow from '@mui/joy/CardOverflow';
import VisibilityIcon from "@mui/icons-material/Visibility"
import DescriptionOutLinedIcon from "@mui/icons-material/DescriptionOutlined"
import Divider from "../../components/divider";

const list  = [
    { productName: "Lavash", imagePath: "/img/lavash.webp"},
    { productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    { productName: "Kebab", imagePath: "/img/kebab.webp"},
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
]

export default function PopularDishes () {
    return (
    <div className="popular-dishes-frame">
        <Container>
            <Stack className="popular-section">
                <Box className="category-title">Popular Dishes</Box>
                <Stack className="cards-frame">
                {list.length !== 0 ? (
                    list.map((ele, index) => {
                        return (
                            <CssVarsProvider key={index}>
                            <Card className="card">
              <CardCover>
                <img src={ele.imagePath} alt=""/>
              </CardCover>
              <CardCover className="card-cover"/>
              <CardContent sx={{ justifyContent: "flex-end"}}>
                    <Stack 
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                         >
                        <Typography
                            level="h2"
                            fontSize={"lg"}
                            textColor={"#fff"}
                            mb={1}
                             >
                            {ele.productName}
                        </Typography>
                        {/* <Divider width="1" height="23" bg="#d9d9d9"/> */}
                            <Typography
                            sx={{
                                fontWeight:"md",
                                color: "neutral.300",
                                alignItems: "center",
                                display: "flex",
                            }}>
                                20
                                <VisibilityIcon
                                sx={{ fontSize: 25, marginLeft: "Spx"}}
                                />
                            </Typography>
                     </Stack>
              </CardContent>
                            <CardOverflow sx={{
                                display: "flex",
                                gap: 1.5,
                                py: 1.5,
                                borderTop: "1px solid",
                                height: "60px",
                            }}
                            >
                                <Typography
                                startDecorator={<DescriptionOutLinedIcon/>}
                                textColor={"neutral.300"}
                                >
                                   This is delicious meal 
                                </Typography>
                            </CardOverflow>
                     </Card>
                            </CssVarsProvider>
                        )
                    })
                ) : ( <Box className="no-data"> Popular products are not available</Box>)}
                </Stack>
            </Stack>
        </Container>
    </div>)
}