export const getCharacters = async (name: string='') => {
    /* Obtenemos la url de la API desde las variables de entorno */
    const url = import.meta.env.VITE_API_URL;
    
    const response = await fetch(`${url}?name=${name}`);
    if (!response.ok) {
        throw new Error("Error al obtener los personajes");
    }
    const data = await response.json();
    return data.results;
};
