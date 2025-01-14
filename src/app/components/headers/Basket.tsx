import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";

export default function Basket() {
  const authMember = null;
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={3} color="secondary">
          <img src={"/icons/shopping-cart.svg"} />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className={"basket-frame"}>
          <Box className={"all-check-box"}>
            <div>Cart is empty!</div>
          </Box>

          <Box className={"orders-main-wrapper"}>
            <Box className={"orders-wrapper"}>
              <Box className={"basket-info-box"}>
                <div className={"cancel-btn"}>
                  <CancelIcon color={"primary"} />
                </div>
                <img src={"/img/fresh.webp"} className={"product-img"} />
                <span className={"product-name"}>Kebab</span>
                <p className={"product-price"}>$10 x 1</p>
                <Box sx={{ minWidth: 120 }}>
                  <div className="col-2">
                    <button className="remove">-</button>{" "}
                    <button className="add">+</button>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={"basket-order"}>
            <span className={"price"}>Total: $100 (98 +2)</span>
            <Button startIcon={<ShoppingCartIcon />} variant={"contained"}>
              Order
            </Button>
          </Box>
        </Stack>
      </Menu>
    </Box>
  );
}
