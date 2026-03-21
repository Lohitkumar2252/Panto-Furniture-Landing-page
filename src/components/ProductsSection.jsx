import React from "react";
import ProductsType from "./ProductsType";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section className="productsSection bg-[#F7F7F7] py-10 px-5">
      <div className="container flex flex-col items-center gap-3">
        <h3 className="text-xl font-bold mx-auto">Best Selling Products</h3>
        <ProductsType />
        <div className="products mt-4 w-full flex flex-col  sm:flex-row justify-center items-center gap-3">
          <ProductCard
            img="/chair1.png"
            name="Sakarias Armchair"
            price="$132"
          />
          <ProductCard img="/chair2.png" name="Baltsar Chair" price="$299" />
          <ProductCard img="/chair3.png" name="Anjay Chair" price="$519" />
          <ProductCard img="/chair4.png" name="Nyantuy Chair" price="$921" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
