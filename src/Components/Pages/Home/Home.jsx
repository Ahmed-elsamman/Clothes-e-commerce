import homePic from "../../../images/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../Loader/Loader";
import MainSlider from "../../Slider/Slider";

export default function Home() {
  function getAllProducts() {
    return axios.get("https://api.escuelajs.co/api/v1/products");
  }

  function getAllCategories() {
    return axios.get("https://api.escuelajs.co/api/v1/categories");
  }

  const { data: productsData, isLoading: productsLoading } = useQuery(
    "products",
    getAllProducts,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery(
    "categories",
    getAllCategories,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (productsLoading || categoriesLoading) return <Loader />;

  return (
    <>
      <div className="mb-4">
        <img src={homePic} alt="Home pic" width="100%" className="img-fluid" />
      </div>

      <div className="container">
        <div className="mb-5">
          <h2 className="text-center mb-4">Shop by Category</h2>
          <MainSlider 
            items={categoriesData?.data} 
            type="category" 
          />
        </div>

        <div className="mb-5">
          <h2 className="text-center mb-4">Featured Products</h2>
          <MainSlider 
            items={productsData?.data.filter(
              product => 
                !product.images[0].includes("[") && 
                !product.images[0].includes("]")
            )} 
            type="product" 
          />
        </div>
      </div>
    </>
  );
}
