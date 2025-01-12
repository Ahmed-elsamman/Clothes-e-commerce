import { useQuery } from "react-query";
import image from "../../../images/Pic yellow bg.png";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
export default function Products() {
  function getAllProducts() {
    return axios.get("https://api.escuelajs.co/api/v1/products");
  }
  const { data, isLoading, isFetching } = useQuery("products", getAllProducts);
  // console.log("data", data?.data);
  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="justify-content-center  align-items-center  vw-100 vh-100">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        </div>
      ) : (
        <div className="row">
          {data?.data.map((product) => (
            <div key={product.id} className="col-md-3 mx-1">
              <Link to={`/prod/${product.id}`}>
                <div className="card">
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"> {product.price}EGP</p>
                  </div>
                  <button className="btn btn-primary">+ADD card</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
