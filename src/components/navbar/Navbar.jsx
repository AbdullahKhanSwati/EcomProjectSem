import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/Cart";
import './Navbar.scss'
import CartContext from '../../store/cart-context';

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const cartCtx = useContext(CartContext);
  //   const cart = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="item" to="/">
            <img src="https://cdn5.vectorstock.com/i/1000x1000/30/89/initial-letter-h-wing-round-badge-logo-design-vector-30553089.jpg" />
            <Link className="title" to="/">
              Hotel.com
            </Link>
          </Link>
        </div>
        <div className="center">
          <Link className="item" to="/category/c1">
            Single Room
          </Link>
          <Link className="item" to="/category/c2">
            Double Room
          </Link>
          <Link className="item" to="/category/c3">
            Family Room
          </Link>
        </div>
        <div className="right">
        
          <Link className="item" to="/">
            Hompage
          </Link>
          <Link className="item" to="/aboutus">
            About Us
          </Link>
          <Link className="item" to="/services">
            Services
          </Link>
          <Link className="item" to="/login">
            Admin
          </Link>
          <div className="item">
            <SearchOutlinedIcon />
          </div>
          <div className="item">
            <ShoppingCartOutlinedIcon
              onClick={() => {
                setShowCart((prev) => !prev);
              }}
            />
            <span className="label">{cartCtx.items.length}</span>
          </div>
        </div>
      </div>
      {showCart && <Cart close = {() => setShowCart(false)}/>}
    </div>
  );
};

export default Navbar;