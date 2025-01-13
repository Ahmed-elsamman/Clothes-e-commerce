import { createContext, useState, useEffect } from "react";

export const favoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    if (!isInFavorites(product)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter((item) => item.id !== productId));
  };

  const isInFavorites = (product) => {
    return favorites.some((item) => item.id === product.id);
  };

  const getFavorites = () => {
    return favorites;
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
    <favoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
        clearFavorites,
        getFavorites,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
}
