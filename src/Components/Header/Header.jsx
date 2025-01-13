import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { cartContext } from "../../Context/cart";
import logo from "../../images/saman_logo22.png";
export default function Header() {
  const { cart } = useContext(cartContext);
  console.log("Cart : ", cart);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-secondary  "
        style={{
          height: "100px",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" aria-current="page" to="/">
            <img
              src={logo}
              alt="Logo"
              // style={{ width: "100px", height: "100px" }}
              width="80px"
              height="80px"
              className="d-inline-block align-text-top rounded-circle"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
            <ul className="navbar-nav me-0 mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <Link
                  className="nav-link active  fw-bold   "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  fw-bold "
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  fw-bold "
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link active  fw-bold "
                  aria-current="page"
                  to="card"
                >
                  card
                </Link>
              </li> */}
              <li className="nav-item position-relative">
                <Link
                  className="nav-link active  fw-bold "
                  aria-current="page"
                  to="/cart"
                >
                  Cart{" "}
                  <span
                    className="me-5 fw-bold  "
                    // style={{ fontSize: "1.5rem" }}
                  >
                    <BsCart />
                  </span>
                  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  fw-bold "
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  fw-bold "
                  aria-current="page"
                  to="register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
