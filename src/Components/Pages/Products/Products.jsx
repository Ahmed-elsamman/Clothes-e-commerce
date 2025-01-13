import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../../Loader/Loader";
import ProductCard from "./ProductCard";
export default function Products() {
  function getAllProducts() {
    return axios.get("https://api.escuelajs.co/api/v1/products");
  }
  const { data, isLoading } = useQuery("products", getAllProducts, {
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container-fluid   ">
          <div className="row g-4 mt-5 justify-content-center align-items-center">
            {data?.data
              .filter(
                (product) =>
                  !product.images[0].includes("[") &&
                  !product.images[0].includes("]")
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
