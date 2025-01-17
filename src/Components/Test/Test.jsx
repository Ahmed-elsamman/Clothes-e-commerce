import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Pages/Products/ProductCard';
import Loader from '../Loader/Loader';

export default function Test() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://amazonserveriti-production.up.railway.app/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container-fluid">
      <div className="row g-4 mt-2 justify-content-center align-items-center">
        {products.map((product) => (
          <div key={product._id} className="col-md-3 col-sm-6 col-12 mx-1">
            <div className="card">
              <div className="position-relative">
                <img
                  src={product.imageUrls[0]}
                  className="card-img-top"
                  alt={product.name.en}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                {product.discounts > 0 && (
                  <span className="position-absolute top-0 end-0 badge bg-danger m-2">
                    {product.discounts}% OFF
                  </span>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name.en}</h5>
                <p className="card-text text-truncate">
                  {product.description.en}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-primary">${product.price}</span>
                  <span className="text-muted">Stock: {product.stock}</span>
                </div>
                <div className="mt-2">
                  <span className="badge bg-info me-2">{product.brand}</span>
                  {product.isVerified && (
                    <span className="badge bg-success">Verified</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
