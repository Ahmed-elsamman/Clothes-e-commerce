import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

export default function ProductDetails() {
  const { id } = useParams();

  console.log("prodID out ", id);
  function getProductById(id) {
    return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
  const { data, isLoading } = useQuery(
    ["ProductDetails", id],
    () => getProductById(id),
    {}
  );
  console.log("data", data?.data);

  return (
    <>
      {isLoading ? (
        <Loader />
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
