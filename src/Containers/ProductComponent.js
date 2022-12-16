import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";


const ProductComponent = () => {
  const products= useSelector((state) => state);
  console.log(products)
  const renderlist = products.map((products) => {
  const {id,title,image,price,category} = products;

  return (

    <div className="four wide columns" key={id} >
      <Link to={'/products/ ${id}'}>
    <div className="ui link card">
      <div className="card">
        <div className="image">
          <img src={image} alt={title}/>

          <div className="content">
             <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="price">{category}</div>
            
          </div>
        </div>
      </div>
    </div>
    </Link>
    </div>
    
    
    );
      
});
 return <>{renderlist}</>;
};
export default ProductComponent;