import { Link, Outlet } from 'react-router-dom';
import '../styles/MainLayout.css';

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>Rick and Morty Characters</h1>
        <nav>
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/favorites" className="nav-link">Избранное</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;