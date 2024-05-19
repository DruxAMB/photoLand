import React from "react";
// useFetch
import useFetch from '../hooks/useFetch'
// import components
import ProductSlider from '../components/ProductSlider'

const LatestProducts = () => {
  
  //get new product
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  return (
    <div className="md-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center lg:text-left">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
