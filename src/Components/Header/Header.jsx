import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { cartContext } from "../../Context/cart";
import logo from "../../images/saman_logo22.png";

export default function Header() {
  const { cart } = useContext(cartContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        height: "80px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top rounded-circle"
          />
        </Link>

        <button
          className="navbar-toggler border-0"
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {['Home', 'Products', 'About'].map((item) => (
              <li className="nav-item mx-2" key={item}>
                <Link
                  className="nav-link fw-bold text-dark hover-effect"
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
            
            <li className="nav-item position-relative mx-2">
              <Link
                className="nav-link fw-bold text-dark d-flex align-items-center"
                to="/cart"
              >
                <BsCart size={20} />
                <span className="ms-1">Cart</span>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            {/* <li className="nav-item mx-2">
              <Link
                className="nav-link fw-bold text-dark"
                to="favorite"
              >
                Favorite
              </Link>
            </li> */}

            <li className="nav-item mx-2">
              <Link
                className="nav-link fw-bold text-dark"
                to="login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="btn btn-primary fw-bold"
                to="register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
