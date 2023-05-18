import React, { useEffect } from "react";

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = React.useState(false);
  const [ pageItems, setPageItems ] = React.useState(3);
  const [sort, setSort] = React.useState('difficulty');

  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({ pageItems, sort, }));
  }

  const values = {
    showCompleted,
    setShowCompleted,
    pageItems,
    setPageItems,
    sort,
    setSort,
    saveLocally
  }

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'));
    if (storage){
      console.log('storage: ', storage);
      setShowCompleted(storage.showCompleted);
      setPageItems(storage.setPageItems ? storage.setPageItems : 3);
      setSort(storage.sort);
    }
  }, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
  };

export default SettingsProvider;
