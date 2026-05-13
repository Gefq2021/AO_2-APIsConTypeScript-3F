import React from 'react';
import type { Character } from '../interface';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characters: Character[];
}

export const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <section className="character-grid">
      {characters.length > 0 ? (
        characters.map((char) => (
          // map de personajes usando el componente CharacterCard para cada uno.
          <CharacterCard key={char.id} character={char} />
        ))
      ) : (
        <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>
          No se encontraron personajes. ¡Intenta con otra búsqueda!
        </p>
      )}
    </section>
  );
};
