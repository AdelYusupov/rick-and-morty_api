import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Загрузка избранных из LocalStorage при монтировании
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Добавление персонажа в избранное
  const addToFavorites = (character) => {
    const updatedFavorites = [...favorites, character];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Удаление персонажа из избранного
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((char) => char.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return { favorites, addToFavorites, removeFromFavorites };
};