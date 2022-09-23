import React from "react";
import Product from "./Product";
import cls from "../styles/Products.module.css";

function Products() {
  return (
    <>
      <div className={cls.products}>
        <Product />
      </div>
    </>
  );
}

export default Products;
