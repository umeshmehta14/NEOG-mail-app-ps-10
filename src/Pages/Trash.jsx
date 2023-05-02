import React from "react";
import { useData } from "../Contexts/DataContext";
import ShowMails from "../Components/ShowMails";
import Filter from "../Components/Filter";

const Trash = () => {
  const { filteredData } = useData();
  const TrashData = filteredData.filter(({ isDeleted }) => isDeleted);
  return (
    <div className="container ">
      <Filter />

      <h2 className="heading">Total Trash:{TrashData.length}</h2>
      {TrashData.length > 0 && (
        <div className="mail-container">
          {TrashData.map((mail) => <ShowMails key={mail.mId} element={mail} />
              
          )}
        </div>
      )}
    </div>
  );
};

export default Trash;
