import React, { useState } from 'react';

interface Props { onSearch: (term: string) => void; }

export const SearchBar = ({ onSearch }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Buscar..."
      />
      <button type="submit">Explorar</button>
    </form>
  );
};
