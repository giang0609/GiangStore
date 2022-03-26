import React from "react";

import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import Grid from "../components/Grid";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productsTop from "../assets/fake-data/products-top";
import productsNew from "../assets/fake-data/products-new";
import banner from "../assets/images/banner.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Helmet title="Trang chu">
      {/*  slider */}
      <Slider data={heroSliderData} />
      {/* end slider */}

      {/* policy */}
      <div className="title-home">Chăm sóc khách hàng</div>
      <Grid col="4" mdCol="2" smCol="1" gap="20">
        {policy.map((item, index) => (
          <Link to="/policy" key={index}>
            <PolicyCard
              name={item.name}
              description={item.description}
              icon={item.icon}
            />
          </Link>
        ))}
      </Grid>
      {/* end policy */}

      {/* best sale product */}
      <div className="title-home">Sản Phẩm Bán Chạy Nhất</div>
      <Grid col="4" mdCol="2" smCol="1" gap="20">
        {productsTop.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            img={item.image01}
            slug={item.slug}
            description={item.description}
          />
        ))}
      </Grid>
      {/* end best sale product */}

      {/* banner */}
      <div className="title-home">Chương trình khuyến mãi</div>
      <Link to="/catalog">
        <img src={banner} style={{ width: "100%" }} />
      </Link>

      {/* end banner */}

      {/* new product */}

      <div className="title-home">Sản phẩm mới về</div>
      <Grid col="4" mdCol="2" smCol="1" gap="20">
        {productsNew.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            img={item.image01}
            slug={item.slug}
            description={item.description}
          />
        ))}
      </Grid>

      {/*end new product */}
    </Helmet>
  );
};

export default Home;
