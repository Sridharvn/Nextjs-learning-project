"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => console.log("Added to Cart")}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
