import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/Pages/About/About";
import Products from "./Components/Pages/Products/Products";
import ProductCard from "./Components/Pages/Products/ProductCard";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import { CartProvider } from "./Context/cart";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

const router = createBrowserRouter([
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
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </CartProvider>
    </>
  );
}

export default App;
