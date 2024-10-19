import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenProducts, fetchProductDetails } from "../redux/productSlice";
import { LoadingSpinner, ProductCard, Error } from "../components";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    data: products,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchMenProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleClick = useCallback(
    (code) => {
      dispatch(fetchProductDetails(code));
      navigate(`/product/${code}`);
    },
    [dispatch, navigate]
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-2">All Products</h1>

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-10">
          <Error message={error} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.images[0].baseUrl}
              name={product.name}
              brandname={product.brandName}
              price={product.price.value}
              onClick={(e) => {
                handleClick(product.defaultArticle.code);
              }}
              onClick1={() => handleAddToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
