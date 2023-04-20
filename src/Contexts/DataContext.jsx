import React, { createContext, useContext, useReducer } from "react";
import { mails } from "../Data/Data";
import { DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initial = {
    mailsData: mails,
    TrashData: [],
    showUnread: false,
    showStarred: false,
  };
  const [state, dispatch] = useReducer(DataReducer, initial);

  const checkFilter = () => {
    let filtered = state.mailsData;

    if (state.showUnread) {
      filtered = filtered.filter((email) => email.unread);
    }

    if (state.showStarred) {
      filtered = filtered.filter((email) => email.isStarred);
    }

    return filtered;
  };
  const filteredData = checkFilter();

  return (
    <DataContext.Provider value={{ filteredData, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);


