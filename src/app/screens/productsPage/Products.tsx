import { Box, Button, Container, Input, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../../css/products.css";


const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "lavash", imagePath: "/img/lavash.webp" },
  { productName: "lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];
// const imageLogo = [
//     {logoImage: "/img/doner.webp"},
//     {logoImage: "/img/doner.webp"},
//     {logoImage: "/img/doner.webp"},
//     {logoImage: "/img/doner.webp"},
// ]

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Box className="avatar-text-box">Burak Restaurant</Box>
            <Stack className="avatar-search">
              <Input
                type="search"
                className="search-input"
                placeholder="Type here"
              />
              <Button
                className="search-botton"
                variant="contained"
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Stack>
          <Stack className="dishes-filter-section">
            <Button variant="contained" color="primary" className="order">
              New
            </Button>
            <Button variant="contained" color="secondary" className="order">
              Price
            </Button>
            <Button variant="contained" color="secondary" className="order">
              View
            </Button>
          </Stack>
          <Stack className="list-category-section">
            <Stack className="second-button">
              <Button variant="contained" color="primary" className="order-2">
                DISH
              </Button>
              <Button variant="contained" color="secondary" className="order-2">
                SALAD
              </Button>
              <Button variant="contained" color="secondary" className="order-2">
                DRINK
              </Button>
              <Button variant="contained" color="secondary" className="order-2">
                DESERT
              </Button>
              <Button variant="contained" color="secondary" className="order-2">
                OTHER
              </Button>
            </Stack>
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((products, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{ backgroundImage: `url(${products.imagePath})` }}
                      >
                        <div className="product-sale">Normal size</div>
                        <Button className="shop-btn">
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className="view-btn" sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{
                                color: 20 ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {products.productName}
                        </span>
                        <div className="product-desc2">
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Product are not available</Box>
              )}
            </Stack>
          </Stack>
          <Stack className="pagination-section">
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div className="brands-logo">
        <Container>
          <Stack className="logo-frame">
            <Box className="logo-text">Our Family Brands</Box>
            <Stack className="image-frame">
              <Box className="image-shadow">
                <img src="/img/gurme.webp" />
              </Box>
              <Box className="image-shadow">
                <img src="/img/seafood.webp" />
              </Box>
              <Box className="image-shadow">
                <img src="/img/sweets.webp" />
              </Box>
              <Box className="image-shadow">
                <img src="/img/doner.webp" />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className="address">
        <Container>
          <Stack className="adress-area">
            <Box className="title">Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5406809670517!2d127.73708425462246!3d34.73046199537132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356dd92127e62543%3A0x5a541babfbb74718!2z64-M7IKw6rO17JuQ!5e1!3m2!1sko!2skr!4v1737260314631!5m2!1sko!2skr"
              width="1320"
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
