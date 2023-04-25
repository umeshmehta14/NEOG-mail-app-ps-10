import React, { createContext, useContext, useReducer } from "react";
import { mails } from "../Data/Data";
import { DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initial = {
    mailsData: mails,
    filterBy:[]
  };
  const [state, dispatch] = useReducer(DataReducer, initial);

  const filtered = [...state.mailsData];
  const filteredData = state.filterBy.length !== 0 ? filtered.filter((email) => state.filterBy.every((value)=> email[value])): filtered;

  return (
    <DataContext.Provider value={{ filteredData, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);


