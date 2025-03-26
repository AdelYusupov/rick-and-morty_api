import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))
      ) : (
        <p className="character-list__empty">Персонажи не найдены</p>
      )}
    </div>
  );
};

// Экспорт по умолчанию
export default CharacterList;