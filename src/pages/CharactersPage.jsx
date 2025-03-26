import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import axios from 'axios';
import '../styles/CharactersPage.css';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]); // Состояние для списка персонажей
  const [search, setSearch] = useState(''); // Состояние для поиска по имени персонажа
  const [status, setStatus] = useState(''); // Состояние для фильтрации по статусу

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let url = 'https://rickandmortyapi.com/api/character/';

        // Добавляем поиск по имени персонажа, если есть запрос
        if (search) {
          url += `?name=${search}`;
        }

        // Добавляем фильтр по статусу, если есть запрос
        if (status) {
          url += search ? `&status=${status}` : `?status=${status}`;
        }

        const response = await axios.get(url);
        const charactersData = response.data.results.map((char) => ({
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          image: char.image,
        }));
        setCharacters(charactersData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchCharacters();
  }, [search, status]); // Зависимость от search и status

  return (
    <div className="character-app">
      <h2 className="character-app__title">Поиск персонажей Rick and Morty</h2>

      {/* Поле поиска по имени персонажа */}
      <input
        type="text"
        placeholder="Поиск по имени персонажа..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="character-app__search"
      />

      {/* Выпадающий список для фильтрации по статусу */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="character-app__filter"
      >
        <option value="">Все статусы</option>
        <option value="alive">Живой</option>
        <option value="dead">Мертвый</option>
        <option value="unknown">Неизвестно</option>
      </select>

      {/* Список персонажей */}
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharactersPage;