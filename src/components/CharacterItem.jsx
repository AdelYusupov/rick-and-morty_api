import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

const CharacterItem = ({ character }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <div className="character-item">
      <Link to={`/details/${character.id}`} className="character-link">
        <img
          src={character.image}
          alt={character.name}
          className="character-item__thumbnail"
        />
        <p className="character-item__name">{character.name}</p>
        <p className="character-item__status">{character.status}</p>
        <p className="character-item__species">{character.species}</p>
      </Link>
      <button
        className={`character-item__fav-btn ${isFavorite ? 'remove' : 'add'}`}
        onClick={() =>
          isFavorite ? removeFromFavorites(character.id) : addToFavorites(character)
        }
      >
        {isFavorite ? 'Удалить' : 'Добавить'}
      </button>
    </div>
  );
};

export default CharacterItem;