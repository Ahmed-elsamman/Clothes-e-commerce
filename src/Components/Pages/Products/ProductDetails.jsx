import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  console.log("prodID out ", id);
  function getProductById(id) {
    return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
  const { data, isError, isFetching, isLoading } = useQuery(
    ["ProductDetails", id],
    () => getProductById(id),
    {
      //   enabled: !!prodID.id,
      cacheTime: 1000,
    }
  );
  console.log("data", data?.data);

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
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <img
                src={data?.data.images[0]}
                alt={data?.data.title}
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h2>{data?.data.title}</h2>
              <h4>{data?.data.category.name}</h4>
              <p>{data?.data.description}</p>
              <p>{data?.data.price} EGP</p>
              <button className="btn btn-primary">+ADD card</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
