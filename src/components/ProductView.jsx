import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import { withRouter } from "react-router";

import { useDispatch } from "react-redux";

import { addItem } from "../redux/shopping-cart/cartItemSlide";


const ProductView = (props) => {
  const dispatch = useDispatch();
 
  let products = props.products;

  if (products === undefined)
    products = {
      price: 0,
      title: "",
      colors: [],
      size: [],

    };

  const [previewImg, setPreviewImg] = useState(products.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPreviewImg(products.image01);
    setSize(undefined);
    setColor(undefined);
    setQuantity(1);
  }, [products]);

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  const check = () => {
    if (color === undefined ) {
      alert("Vui lòng chọn màu");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn kích cở");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: products.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: products.priceCart,
          img:products.image01,
          title: products.title,
        })
      );
      alert("Đặt hàng thành công")
    }
  };
  const goToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: products.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: products.priceCart,
          img:products.image01,
          title: products.title,
        })
      );
      props.history.push("/cart");
    }
  };





  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(products.image01)}
          >
            <img src={products.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(products.image02)}
          >
            <img src={products.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description  ${
            descriptionExpand ? "expand" : ""
          }`}
        >
          <div className="product-description__title">Thông tin sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: products.description }}
          ></div>
          <div className="product-description__toggle">
            {" "}
            <Button onClick={() => setDescriptionExpand(!descriptionExpand)}>
              {descriptionExpand ? "Thu gon" : "Xem them"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="product__info__title">
          <h1>{products.title}</h1>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__price">
            <span>{products.price}</span>
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {products.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Dung lượng</div>
          <div className="product__info__item__list">
            {products.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()
          }>Thêm vào giỏ</Button>
          <Button onClick={() => goToCart()
          
         }>Mua ngay</Button>
        </div>
      </div>
     
    </div>
  );
};

export default withRouter(ProductView);
