import React from 'react';
import type { Character } from '../interface';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive': return '#55cc44';
      case 'Dead': return '#d63d2e';
      default: return '#9e9e9e';
    }
  };

  return (
    <article className="card">
      <img src={character.image} alt={character.name} style={{ width: '100%' }} />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: 'var(--rick-blue)' }}>{character.name}</h3>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{
            height: '10px',
            width: '10px',
            backgroundColor: getStatusColor(character.status),
            borderRadius: '50%',
            marginRight: '8px'
          }}></span>
          <span>{character.status} - {character.species}</span>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#ccc' }}>Última ubicación:</p>
        <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>{character.location.name}</p>
      </div>
    </article>
  );
};
