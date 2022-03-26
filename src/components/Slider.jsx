import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Slider = (props) => {
  const data = props.data;
  return (
    <Carousel  variant="dark"  interval={4000}>
      {data.map((item, index) => (
          <Carousel.Item key={index} className="image"  >
            <img
              className="d-block"
              src={item.img}
              alt="First slide"
            />
            <Carousel.Caption className="content"  >
              <h3 className={`color-${item.color}`}>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.path} ><Button className={`bg-${item.color}`} >Xem chi tiết</Button></Link>
    
            </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
