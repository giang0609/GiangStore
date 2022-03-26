import React from 'react'

import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard"
import ProductView from "../components/ProductView"

import productsTop from "../assets/fake-data/products-top";
import products from "../assets/fake-data/products";


const Product = (props) => {
      const getProductBySlug = slug => products.find(e=>e.slug===slug)
            const product = getProductBySlug(props.match.params.slug)
    
 
            return (
    <Helmet title={product.title} >
        <div  className="section">
            <div className="sectionBody">
           <ProductView products={product} />
            </div>
        </div>

        <div  className="section">
            <div className="title-home">
           Các sản phẩm khác
            </div>
            <div className="sectionBody">
               <Grid
               col="4" mdCol="2" smCol="1" gap="20"
               >
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
            </div>
        </div>
       


    </Helmet>
    
  )
}

export default Product