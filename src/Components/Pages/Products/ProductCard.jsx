import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { useContext, useState } from "react";
import { cartContext } from "../../../Context/cart";
import { IoBagRemove } from "react-icons/io5";

export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useContext(cartContext);
  const [flag, setFlag] = useState(true);

  function handleAddToCart(product) {
    addToCart(product);
    setFlag(false);
  }
  function handleRemoveFromCart(product) {
    removeFromCart(product);
    setFlag(true);
  }
  // "ss".splie(" ").splece(0, 2).join(" ");
  return (
    <>
      <div
        className=" col-md-3  col-sm-6  col-12  mx-1 shadow-lg p-3 mb-5 bg-body rounded h-100"
        style={{ width: "18rem", height: "30rem" }}
      >
        <Link to={`/prod/${product.id}`}>
          <div className="card border-0">
            <img
              src={product.images[0]}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">
                {product.title.split(" ").splice(0, 2).join(" ")}
              </h5>
              <p className="card-text"> {product.price}EGP</p>
            </div>
          </div>
        </Link>
        <div className=" d-flex justify-content-between  align-items-center  gx-5">
          {flag ? (
            <button
              className="btn btn-primary justify-content-center align-items-center w-75 me-5 "
              onClick={() => handleAddToCart(product)}
            >
              <span className="mx-2 fw-bold w-50 text-white">
                <FaCartPlus />
              </span>
              ADD{" "}
            </button>
          ) : (
            <button
              className="btn btn-primary justify-content-center align-items-center w-75 me-5 bg-danger "
              onClick={() => handleRemoveFromCart(product)}
            >
              <span className="mx-2 fw-bold w-50 text-white ">
                <IoBagRemove />
              </span>
              Remove
            </button>
          )}

          <span className="me-1 fw-bold w-50 text-danger ">
            <FaHeartBroken />
          </span>
        </div>
      </div>
    </>
  );
}
