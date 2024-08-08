import "react-tabs/style/react-tabs.css";
import { useGetAllProductsQuery } from "../../redux/ProductsApi/productsApi";
import ProductCard from "../ProductCard";

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  console.log(products);

  return (
    <div className="products">
      <div className="container">
        <div className="productsTop">
          <h3>New Arrivals</h3>
        </div>
      
        <div className="productCards">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong</p>}
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;
