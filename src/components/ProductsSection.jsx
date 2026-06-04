import React, { useState } from "react";
import ProductsType from "./ProductsType";

import ProductcsScroller from "./ProductcsScroller";


const ProductsSection = () => {
  const products = [
    {
      id: 1,
      img: "/products/ergon-chair.png",
      name: "Ergon Task Chair",
      price: "$249",
      productCategory: "chair",
    },
    {
      id: 2,
      img: "/products/arc-chair.png",
      name: "Arc Lounge Chair",
      price: "$189",
      productCategory: "chair",
    },
    {
      id: 3,
      img: "/products/woven-chair.png",
      name: "Woven Accent Chair",
      price: "$132",
      productCategory: "chair",
    },
    {
      id: 4,
      img: "/products/haven-bed.png",
      name: "Haven Platform Bed",
      price: "$699",
      productCategory: "bed",
    },
    {
      id: 5,
      img: "/products/nordic-bed.png",
      name: "Nordic Queen Bed",
      price: "$529",
      productCategory: "bed",
    },
    {
      id: 6,
      img: "/products/cloud-sofa.png",
      name: "Cloud 3-Seater Sofa",
      price: "$899",
      productCategory: "sofa",
    },
    {
      id: 7,
      img: "/products/metro-sofa.png",
      name: "Metro Corner Sofa",
      price: "$1,149",
      productCategory: "sofa",
    },
    {
      id: 8,
      img: "/products/arc-lamp.png",
      name: "Arc Floor Lamp",
      price: "$89",
      productCategory: "lamp",
    },
    {
      id: 9,
      img: "/products/drum-lamp.png",
      name: "Drum Pendant Lamp",
      price: "$64",
      productCategory: "lamp",
    },
    {
      id: 10,
      img: "/products/slim-lamp.png",
      name: "Slim Table Lamp",
      price: "$49",
      productCategory: "lamp",
    },
  ];
  const [filteredProducts, setfilteredProducts] = useState(products);

  const filterProducts = (clickedItem) => {
    if (clickedItem == "All") {
      setfilteredProducts(products);
      return;
    }
    const filter = products.filter((product) =>
      product.productCategory.toLowerCase().includes(clickedItem.toLowerCase()),
    );
    setfilteredProducts(filter);
  };
  return (
    <section
      className="productsSection bg-[#F7F7F7] py-10 px-5"
      id="shopSection"
    >
      <div className="container flex flex-col items-center gap-3">
        <h3 className="text-xl font-bold mx-auto">Best Selling Products</h3>
        <ProductsType filterProducts={filterProducts} />
        <ProductcsScroller filteredProducts={filteredProducts}/>
      </div>
    </section>
  );
};

export default ProductsSection;
