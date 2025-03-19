import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | <Link to="/movies">Films</Link> | <Link to="/favorites">Favoris</Link>
    </nav>
  );
}

export default Navbar;