import React from "react";
import Filter from "../Components/Filter";
import { useData } from "../Contexts/DataContext";
import ShowMails from "../Components/ShowMails";

const Inbox = () => {
  const { filteredData } = useData();
  const unreadMsg = filteredData.reduce((acc, { unread }) => (unread ? acc + 1 : acc), 0);
  return (
    <div className="container">
      <Filter />
      <h2 className="heading">
        Unread:{" "}
        {unreadMsg}
      </h2>
      <div className="mail-container">
        {filteredData.map((element) => <ShowMails key={element.mId} element={element} clicked={false}/>)}
      </div>
    </div>
  );
};

export default Inbox;
