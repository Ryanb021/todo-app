import React, { useEffect } from "react";

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = React.useState(false);
  const [ pageItems, setPageItems ] = React.useState(3);
  const [sort, setSort] = React.useState('difficulty');

  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({ pageItems, sort, }));
  }

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'));
    if (storage){
      setShowCompleted(storage.showCompleted);
      setPageItems(storage.pageItems);
      setSort(storage.sort);
    }
  }, [])

  const values = {
    showCompleted,
    setShowCompleted,
    pageItems,
    setPageItems,
    sort,
    setSort,
    saveLocally
  };
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
  };

export default SettingsProvider;
