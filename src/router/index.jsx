import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersPage from '../pages/CharactersPage';
import FavoritesPage from '../pages/FavoritesPage';
import MainLayout from '../layouts/MainLayout';
import CharacterDetailPage from '../pages/CharacterDetailPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CharactersPage />} />
          <Route path="/details/:id" element={<CharacterDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;