import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer mt-auto py-4" style={{ 
      backgroundColor: "#1a1a1a",
      position: "relative",
      bottom: 0,
      width: "100%",
      marginTop: "auto"
    }}>
      <div className="container">
        {/* Social Media Section */}
        <div className="row py-4 border-bottom border-secondary">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="text-white">Connect With Us</h5>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white me-4 social-icon-link">
              <FaFacebook size={24} className="social-icon" />
            </a>
            <a href="#" className="text-white me-4 social-icon-link">
              <FaTwitter size={24} className="social-icon" />
            </a>
            <a href="#" className="text-white me-4 social-icon-link">
              <FaInstagram size={24} className="social-icon" />
            </a>
            <a href="#" className="text-white me-4 social-icon-link">
              <FaLinkedin size={24} className="social-icon" />
            </a>
            <a href="#" className="text-white social-icon-link">
              <FaGithub size={24} className="social-icon" />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="row py-4">
          {/* About Us Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-3">About Store</h5>
            <p className="text-white-50">
              Our online store offers the best products at competitive prices with excellent customer service available 24/7.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-white-50 text-decoration-none footer-link">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none footer-link">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-3">Contact Info</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">Address: Cairo, Egypt</li>
              <li className="mb-2">Phone: 123-456-789</li>
              <li className="mb-2">Email: info@store.com</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="text-white-50">Subscribe to get special offers and updates</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email"
                style={{ backgroundColor: "#2a2a2a", border: "1px solid #3a3a3a", color: "#fff" }}
              />
              <button 
                className="btn btn-primary" 
                type="button"
                style={{ zIndex: 0 }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row pt-3 border-top border-secondary">
          <div className="col-md-12 text-center">
            <p className="text-white-50 mb-0">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
