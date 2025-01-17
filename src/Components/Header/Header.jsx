import { Link, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/cart";
import logo from "../../images/saman_logo22.png";
import { UserAccountContext } from "../../Context/auth";
import { FaUser } from "react-icons/fa";
import styles from './header.module.css';

export default function Header() {
  const { cart } = useContext(cartContext);
  const { isLoggedIn, logoutUser, user } = useContext(UserAccountContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getDisplayName = () => {
    if (user?.firstName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user?.email?.split('@')[0] || 'User';
  };

  const handleLogout = () => {
    logoutUser();
    setIsMenuOpen(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} ${styles.navbarCollapse}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {['Home', 'Products', 'About'].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className={`nav-link fw-bold text-dark ${styles.navLink}`}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            
            <li className="nav-item me-md-5">
              <Link
                className={`nav-link fw-bold text-dark d-flex align-items-center  ${styles.navLink}`}
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
              >
                <BsCart size={20} />
                <span className="ms-1">Cart</span>
                {cart.length > 0 && (
                  <span className={`badge rounded-pill bg-danger ms-1 ${styles.cartBadge}`}>
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle d-flex align-items-center ${styles.navLink}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUser className="me-2" />
                  <span>{getDisplayName()}</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link 
                      className="dropdown-item" 
                      to="/profile"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link 
                    className={`nav-link fw-bold text-dark ${styles.navLink}`}
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className={`btn btn-primary fw-bold ${styles.navLink}`}
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
