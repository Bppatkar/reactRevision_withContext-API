import React, { createContext, useState, useEffect } from "react";
import Instance from "./axios";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getProducts = async () => {
    try {
      const { data } = await Instance.get("/products");
      // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const contextValue = {
    products,
    setProducts,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
