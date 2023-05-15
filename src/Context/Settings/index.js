import React from "react";

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = React.useState(false);
  const [ pageItems, setPageItems ] = React.useState(3);
  const [sort, setSort] = React.useState('difficulty');

  const values = {
    showCompleted,
    setShowCompleted,
    pageItems,
    setPageItems,
    sort,
    setSort,
  };
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
  };

export default SettingsProvider;
