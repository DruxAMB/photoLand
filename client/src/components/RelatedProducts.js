import React from "react";
// useFetch hook
import useFetch from "../hooks/useFetch";
// components
import ProductSlider from "../components/ProductSlider";

const RelatedProducts = ({ categoryTitle }) => {
  // get products by category title
  const { data } = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);

  return <div className="mb-16">
    <div className="container mx-auto">
      <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
      <ProductSlider data={data}/>
    </div>
  </div>;
};

export default RelatedProducts;
