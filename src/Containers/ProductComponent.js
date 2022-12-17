import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {

  const [state, setState]  = useState(useSelector((state) => state));
   const [products, setProducts] = useState();

   useEffect(() => {
    const getState =() => {
      setProducts(state.product.products)
    }
    getState();
    
    console.log(products)
   }, [state, products])
   

  // const renderlist = products?.map((product) => {
  //   console.log(product)
  //   const { id, title, image, price, category } = product;
  //   return (
  //   <div  className="four wide columns" key={id}>
  //       <Link to={`/products/ ${id}`}>
  //         <div className="ui link card">
  //           <div className="card">
  //             <div className="image">
  //               <img src={image} alt={title} />

  //               <div className="content">
  //                 <div className="header">{title}</div>
  //                 <div className="meta price">$ {price}</div>
  //                 <div className="price">{category}</div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </Link>
  //     </div>
  //   )
  // });
  return(
    <>
    {products?.map((p) => 
      <div  className="four wide columns" key={p.id}>
      <Link to={`/products/${p.id}`}>
        <div className="ui link card">
          <div className="card">
            <div className="image">
              <img src={p.image} alt={p.title} />

              <div className="content">
                <div className="header">{p.title}</div>
                <div className="meta price">$ {p.price}</div>
                <div className="price">{p.category}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
    )}
    </>
  );
};
export default ProductComponent;
