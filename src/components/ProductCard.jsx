import React from 'react'
import Button from "react-bootstrap/Button";    
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

const ProductCard = (props) => {

   const dispatch= useDispatch()
    
  return (
    <div className="product-card">
    <div className="product-card__btn">
        <Link to={`/catalog/${props.slug}`}><Button
        onClick = {()=> dispatch(set(props.slug))}
        >Mua ngay</Button></Link>
    </div>
    <div className="product-card__img">
        <img src={props.img} alt="" sizes="" srcset="" />
    </div>
    <div className="product-card__info">
       <h4>{props.title}</h4>
       <p>{props.price}</p>
    </div>
   
</div>
  )
}

export default ProductCard