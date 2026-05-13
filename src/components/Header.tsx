import React from 'react';

// Interfaz para las props del Header
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <h1>
        Rick & Morty API Explorer
      </h1>
      <p>Explora los personajes del multiverso</p>
    </header>
  );
};
