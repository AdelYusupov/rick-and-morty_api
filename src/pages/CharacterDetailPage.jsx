import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CharacterDetailPage.css';

const CharacterDetailPage = () => {
  const { id } = useParams(); // Получаем ID персонажа из URL
  const [character, setCharacter] = useState(null); // Состояние для данных персонажа
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const charData = response.data;
        setCharacter({
          name: charData.name,
          status: charData.status,
          species: charData.species,
          gender: charData.gender,
          origin: charData.origin.name,
          location: charData.location.name,
          image: charData.image,
        });
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) return <p>Загрузка...</p>;

  return (
    <div className="character-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        Назад
      </button>
      <h2 className="character-detail__title">{character.name}</h2>
      <img
        className="character-detail__thumbnail"
        src={character.image}
        alt={character.name}
      />
      <p className="character-detail__info">Статус: {character.status}</p>
      <p className="character-detail__info">Вид: {character.species}</p>
      <p className="character-detail__info">Пол: {character.gender}</p>
      <p className="character-detail__info">Происхождение: {character.origin}</p>
      <p className="character-detail__info">Локация: {character.location}</p>
    </div>
  );
};

export default CharacterDetailPage;