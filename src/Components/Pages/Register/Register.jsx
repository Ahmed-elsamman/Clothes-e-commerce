import { useFormik } from "formik";
import "../Login/Login.css";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAccountContext } from "../../../Context/auth";
import { useContext } from "react";

export default function Register() {
  const dataOfRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { registerUser } = useContext(UserAccountContext);
  const navigate =useNavigate()


  const registerFormik = useFormik({
    initialValues: dataOfRegister,
    onSubmit: (values) => {
      console.log(values);
      registerUser(values)
      navigate('/login')


    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName || values.firstName.length < 3) {
        errors.firstName = "First Name is required and must be at least 3 characters long";
      }
      if (!values.lastName || values.lastName.length < 3) {
        errors.lastName = "Last Name is required and must be at least 3 characters long";
      }
      if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password || values.password.length < 6) {
        errors.password = "Password is required and must be at least 6 characters long";
      }
      if (!values.confirmPassword || values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
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
        <form className="form" onSubmit={registerFormik.handleSubmit}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="title">Create Account</p>
            <p className="message">Sign up now and get full access to our app.</p>
          </motion.div>

          <motion.div
            className="flex"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  className="input"
                  type="text"
                  placeholder="First Name"
                  required=""
                  name="firstName"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.firstName}
                  onBlur={registerFormik.handleBlur}
                />
              </div>
              {registerFormik.touched.firstName && registerFormik.errors.firstName ? (
                <p className="error">{registerFormik.errors.firstName}</p>
              ) : null}
            </label>

            <label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  required=""
                  name="lastName"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.lastName}
                  onBlur={registerFormik.handleBlur}
                />
              </div>
              {registerFormik.touched.lastName && registerFormik.errors.lastName ? (
                <p className="error">{registerFormik.errors.lastName}</p>
              ) : null}
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
                <FaEnvelope className="input-icon" />
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required=""
                  name="email"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.email}
                  onBlur={registerFormik.handleBlur}
                />
              </div>
              {registerFormik.touched.email && registerFormik.errors.email ? (
                <p className="error">{registerFormik.errors.email}</p>
              ) : null}
            </label>
          </motion.div>

          <motion.div
            className="input-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  required=""
                  name="password"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.password}
                  onBlur={registerFormik.handleBlur}
                />
              </div>
              {registerFormik.touched.password && registerFormik.errors.password ? (
                <p className="error">{registerFormik.errors.password}</p>
              ) : null}
            </label>
          </motion.div>

          <motion.div
            className="input-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  required=""
                  name="confirmPassword"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.confirmPassword}
                  onBlur={registerFormik.handleBlur}
                />
              </div>
              {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword ? (
                <p className="error">{registerFormik.errors.confirmPassword}</p>
              ) : null}
            </label>
          </motion.div>

          <motion.button
            className="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
         
           <button className="submit" disabled={!registerFormik.dirty || !registerFormik.isValid ||registerFormik.isSubmitting}>Create Account</button> 
          </motion.button>

          <motion.div
            className="social-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
            transition={{ delay: 0.9 }}
          >
            Already have an account? <Link to="/login">Sign in</Link>
          </motion.p>
        </form>
      </motion.div>
    </div>
  );
}
