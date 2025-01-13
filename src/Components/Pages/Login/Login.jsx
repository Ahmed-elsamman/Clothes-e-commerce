import "./Login.css";
export default function Login() {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center my-5">
        <form className="form ">
          <p className="title">Log in </p>
          <p className="message">login now and get full access to our app. </p>

          <label>
            <input className="input" type="email" placeholder="" required="" />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              placeholder=""
              required=""
            />
            <span>Password</span>
          </label>

          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
