import { useState, useEffect } from 'react';
import {getCharacters} from './services/characterService';
import './App.css'; 
import type { Character } from './interface';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CharacterGrid } from './components/CharacterGrid';
import { Footer } from './components/Footer';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="app-container">

      <Header />
      
      <div className="search-section">
    <SearchBar onSearch={async (val) => {
      setLoading(true);
      try {
        const data = await getCharacters(val); // Pasamos el nombre buscado
        setCharacters(data);
      } catch (error) {
        console.error("No se encontraron personajes");
        setCharacters([]); // Limpiamos si no hay resultados
      } finally {
        setLoading(false);
      }
    }} />
  </div>

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--portal-green)' }}>
          Abriendo portal al multiverso...
        </p>
      ) : (
        /* Grid de personajes */
        <CharacterGrid characters={characters} />
      )}

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
