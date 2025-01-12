import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./Components/Pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import About from "./Components/Pages/About/About";
import Products from "./Components/Pages/Products/Products";
import ProductCard from "./Components/Pages/Products/ProductCard";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./Components/Pages/Products/ProductDetails";

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
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
