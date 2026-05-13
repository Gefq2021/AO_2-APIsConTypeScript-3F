// Definición del personaje según la API 
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
}

// Interfaz para la respuesta de búsqueda
export interface ApiResponse {
  results: Character[];
}
