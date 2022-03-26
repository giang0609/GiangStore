import React , { useState , useEffect} from "react";

import products from "../assets/fake-data/products";
import ProductView from "./ProductView";

import Button from "react-bootstrap/Button";

import {useSelector , useDispatch} from "react-redux"

import {remove} from "../redux/product-modal/productModalSlice";



const ProductViewModal = () => {
  const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
  // const productData = getProductBySlug(productSlug);

   const productSlug = useSelector((state)=> state.productModal.value)
   const dispatch =  useDispatch()
   const [product, setProduct] = useState(undefined)

   useEffect(() => {
    setProduct(getProductBySlug(productSlug))
    
  },[productSlug])
   



  return (
    <div className={`product-view__modal ${product === undefined ? "" : "active"}`}>
      <div className="product-view__modal__content">
          <ProductView products={product} />
          <div className="product-view__modal__content__close">
              <Button onClick = { () => dispatch(remove()) }>
                  Đóng
              </Button>
          </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
