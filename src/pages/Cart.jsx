import React, { useEffect, useState } from "react";

import products from "../assets/fake-data/products";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import CartItem from "../components/CartItem";

const Cart = () => {
  const mainNav = [
    {
      display: "Thông tin sản phẩm",
    },
    {
      display: "Giá tiền",
    },

    {
      display: "Số lượng",
    },
    {
      display: "Thao tác",
    },
  ];

  const cartItems = useSelector((state) => state.cartItems.value);
  console.log(cartItems);
  const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
  const getCartItemsDetail = (cartItems) => {
    let res = [];
    if (cartItems.length > 0) {
      cartItems.forEach((e) => {
        res.push({
          ...e,
          product: getProductBySlug(e.slug),
        });
      });
    }
    return res;
  };

  const [cartPruducts, setCartPruducts] = useState(
    getCartItemsDetail(cartItems)
  );
  console.log(cartPruducts);
  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartPruducts(getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + item.quantity, 0)
    );
    setTotalPrice(
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="title-home">giỏ hàng của bạn</div>
      <div className="cart">
        <div className="cart__fix">
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>Bạn có {totalProducts} sản phẩm trong giỏ hàng</p>
            </div>
            <div className="cart__info__txt__price">
              <span>Tổng tiền hàng:</span>
              <span>{totalPrice}đ</span>
             
            </div>
            <h5>Đã bao gồm VAT:</h5>
            <div className="cart__info__btn">
              <Button>Đặt hàng</Button>
              <Link to="/catalog">
                <Button>Tiếp tục mua hàng</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="cart__list">
          {cartPruducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
        <div className="cart__nav">
          {mainNav.map((item, index) => (
            <div className="cart__nav__name" key={index}>{item.display}</div>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
