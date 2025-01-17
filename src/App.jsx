import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/Pages/About/About";
import Products from "./Components/Pages/Products/Products";
import ProductCard from "./Components/Pages/Products/ProductCard";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import { CartProvider } from "./Context/cart";
import Cart from "./Components/Pages/Cart/Cart";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Favorite from "./Components/Pages/Favorite/Favorite";
import { FavoriteProvider } from "./Context/favorite";
import Checkout from "./Components/Pages/Checkout/Checkout";
import NotFound from "./Components/NotFound/NotFound";
import { UserAccountProvider } from "./Context/auth";
import MainSlider from "./Components/Slider/Slider";
import Profile from "./Components/Pages/Profile/Profile";
import Test from "./Components/Test/Test";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "card", element: <ProductCard /> },
      { path: "prod/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "favorite", element: <Favorite /> },
      { path: "test", element: <Test /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <CartProvider>
        <FavoriteProvider>
          <UserAccountProvider>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </UserAccountProvider>
        </FavoriteProvider>
      </CartProvider>
    </>
  );
}

export default App;
