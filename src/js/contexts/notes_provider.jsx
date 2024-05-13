import React, { createContext, useState, useContext } from 'react';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <NotesContext.Provider value={{ notes, selectedNote, setSelectedNote }}>
      {children}
    </NotesContext.Provider>
  );
};
