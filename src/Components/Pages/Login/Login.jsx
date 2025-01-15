import "./Login.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAccountContext } from "../../../Context/auth";
import { useFormik } from "formik";

export default function Login() {
  const { loginUser } = useContext(UserAccountContext);
  const navigate = useNavigate();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginUser(values);
      navigate('/');
    },
    validate: (values) => {
      const errors = {};
      if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password || values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      return errors;
    },
  });

  return (
    <div className="login-container">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form className="form" onSubmit={loginFormik.handleSubmit}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="title">Welcome Back</p>
            <p className="message">Log in to access your account</p>
          </motion.div>

          <motion.div
            className="input-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
              </div>
              {loginFormik.touched.email && loginFormik.errors.email && (
                <p className="error">{loginFormik.errors.email}</p>
              )}
            </label>
          </motion.div>

          <motion.div
            className="input-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                />
              </div>
              {loginFormik.touched.password && loginFormik.errors.password && (
                <p className="error">{loginFormik.errors.password}</p>
              )}
            </label>
          </motion.div>

          <motion.div
            className="forgot-password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/forgot-password">Forgot Password?</Link>
          </motion.div>

          <button type="submit" className="submit">
            Login
          </button>

          <motion.div
            className="social-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="or-divider">or continue with</p>
            <div className="social-buttons">
              <motion.button
                className="social-button google"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGoogle /> Google
              </motion.button>
              <motion.button
                className="social-button github"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> GitHub
              </motion.button>
            </div>
          </motion.div>

          <motion.p
            className="signin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Don't have an account? <Link to="/register">Sign up</Link>
          </motion.p>
        </form>
      </motion.div>
    </div>
  );
}
