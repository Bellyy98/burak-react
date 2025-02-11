import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutLinedIcon from "@mui/icons-material/DescriptionOutlined";
import Divider from "../../components/divider";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievPopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApp } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */

const popularDishesRetriever = createSelector(
  retrievPopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetriever);

  /** console.log("popularDishes", popularDishes);*/

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {popularDishes.length !== 0 ? (
              popularDishes.map((product: Product) => {
                const imagePath = `${serverApp}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Card className="card">
                      <CardCover>
                        <img src={imagePath} alt="" />
                      </CardCover>
                      <CardCover className="card-cover" />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
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
                            {product.productName}
                          </Typography>
                          {/* <Divider width="1" height="23" bg="#d9d9d9"/> */}
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {product.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "Spx" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          borderTop: "1px solid",
                          height: "60px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutLinedIcon />}
                          textColor={"neutral.300"}
                        >
                          {product.productDesc}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data"> Popular products are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
