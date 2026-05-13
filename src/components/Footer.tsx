import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Desarrollado por Facundo Rodriguez - Actividad Obligatoria 2</p>
      <p>© {currentYear} - Rick and Morty API - Todos los derechos reservados</p>
    </footer>
  );
};
