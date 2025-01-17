import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../../Loader/Loader";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const { categoryId } = useParams();
  const [filters, setFilters] = useState({
    title: "",
    price_min: "",
    price_max: "",
    categoryId: categoryId || ""
  });

  // Function to build the URL with filters
  const buildFilterUrl = () => {
    let url = "https://api.escuelajs.co/api/v1/products";
    const params = new URLSearchParams();

    if (filters.title) params.append("title", filters.title);
    if (filters.price_min) params.append("price_min", filters.price_min);
    if (filters.price_max) params.append("price_max", filters.price_max);
    if (filters.categoryId) params.append("categoryId", filters.categoryId);

    const queryString = params.toString();
    return queryString ? `${url}?${queryString}` : url;
  };

  // Get categories for the dropdown
  const { data: categories } = useQuery("categories", () =>
    axios.get("https://api.escuelajs.co/api/v1/categories")
  );

  // Get filtered products
  const { data: products, isLoading } = useQuery(
    ["products", filters],
    () => axios.get(buildFilterUrl()),
    {
      keepPreviousData: true
    }
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFilters({
      title: "",
      price_min: "",
      price_max: "",
      categoryId: categoryId || ""
    });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              name="title"
              value={filters.title}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Min price"
              name="price_min"
              value={filters.price_min}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-2 mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Max price"
              name="price_max"
              value={filters.price_max}
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-3 mb-3">
            <select
              className="form-select"
              name="categoryId"
              value={filters.categoryId}
              onChange={handleFilterChange}
            >
              <option value="">All Categories</option>
              {categories?.data?.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2 mb-3">
            <button
              className="btn btn-secondary w-100"
              onClick={handleReset}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row g-4 mt-2 justify-content-center align-items-center">
            {products?.data
              .filter(
                (product) =>
                  !product.images[0].includes("[") &&
                  !product.images[0].includes("]")
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
