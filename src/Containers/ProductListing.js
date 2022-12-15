import React ,{useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import {action} from "./redux/actions/productActions";

import ProductComponent from "./ProductComponent";


const ProductListing = () => {
  const products= useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);
  console.log('Hello')
  const fetchproducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products/1").catch((err) => {
        console.log("Err",err);
      });
      console.log((response.data));
  };

   useEffect(() => {fetchproducts()},[]);
   console.log("products","products");
  return (
  <div className="uigrid container">
    <ProductComponent />
    </div>
    )
};

export default ProductListing;