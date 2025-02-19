import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  const authMember = false;
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<any>({ status: true });

  useEffect(() => {
    console.log("componentDidMount", count);
    setCount(count + 1);
  }, [value]);

  // HANDLER
  const buttonHandler = () => {
    value.status = !value.status;
    console.log(value);
    setValue({ ...value }); // ishladi ammo status true boldi no ishladi
  };

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className="hover-line">
              <NavLink to="/" activeClassName={"underline"}>
                {" "}
                Home{" "}
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink to="/products" activeClassName={"underline"}>
                {" "}
                Products{" "}
              </NavLink>
            </Box>
            {authMember ? (
              <Box className="hover-line">
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className="hover-line">
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My page
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover-line">
              <NavLink to="/help" activeClassName={"underline"}>
                {" "}
                Help{" "}
              </NavLink>
            </Box>
            {/* BASKET */}
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"tree"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-txt">World's Most Delicious Cousine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">{count} hours service</Box>
            <Box className="signup">
              {!authMember ? (
                <Button
                  variant={"contained"}
                  className="signup-button"
                  onClick={buttonHandler}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className="logo-frame">
            <div className="logo-img"></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
