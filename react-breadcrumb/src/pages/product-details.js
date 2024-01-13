import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, []);
  return (
    <div>
      <h2>{product?.title}</h2>
      {product ? (
        <div>
          <img src={product.thumbnail} alt={product.title} />
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
