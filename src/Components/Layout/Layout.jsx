import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="container-fluid ">
      <Header />
      <div className="ms-5 ms-md-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
