import homePic from "../../../images/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../Loader/Loader";
import ProductCard from "../Products/ProductCard";
export default function Home() {
  function getAllProducts() {
    return axios.get("https://api.escuelajs.co/api/v1/products");
  }
  const { data, isLoading } = useQuery("products", getAllProducts, {
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <div className="">
        <img src={homePic} alt="Home pic " width="100%" className=" " />
      </div>
      <div>
        <h1 className="text-center mt-5">Welcome to Our Store</h1>
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
      </div>
    </>
  );
}
