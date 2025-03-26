import { useFavorites } from '../hooks/useFavorites';
import CharacterList from '../components/CharacterList';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Избранные персонажи</h2>
      {favorites.length > 0 ? (
        <CharacterList characters={favorites} />
      ) : (
        <p className="favorites-list__empty">Нет избранных персонажей</p>
      )}
    </div>
  );
};

export default FavoritesPage;