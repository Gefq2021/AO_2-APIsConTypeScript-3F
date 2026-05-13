import { useState, useEffect } from 'react';
import './App.css'; 
import type { Character, ApiResponse } from './interface';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CharacterGrid } from './components/CharacterGrid';
import { Footer } from './components/Footer';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // URL de la API de Rick and Morty. 
  const API_URL = "https://rickandmortyapi.com/api/character";

  const getCharacters = async (name: string = "") => {
    setLoading(true);
    try {
      const url = name.trim() 
        ? `${API_URL}/?name=${name.trim()}` 
        : API_URL;

      const response = await fetch(url);
      
      // La API devuelve 404 si no encuentra resultados. 
      if (!response.ok) {
        setCharacters([]);
        return;
      }

      const data: ApiResponse = await response.json();
      setCharacters(data.results || []);
    } catch (error) {
      console.error("Error cargando personajes:", error);
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="app-container">

      <Header />
      
      <div className="search-section">
        <SearchBar onSearch={(val) => getCharacters(val)} />
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
