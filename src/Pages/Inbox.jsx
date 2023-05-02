import React from "react";
import Filter from "../Components/Filter";
import { useData } from "../Contexts/DataContext";
import ShowMails from "../Components/ShowMails";

const Inbox = () => {
  const { filteredData } = useData();
  const filteredMails = filteredData.filter(({isDeleted, isSpam})=> !isDeleted && !isSpam)
  const unreadMsg = filteredMails.reduce((acc, { unread }) => (unread ? acc + 1 : acc), 0);

  return (
    <div className="container">
    <Filter />

      <h2 className="heading">
        Unread:{" "}
        {unreadMsg}
      </h2>
      <div className="mail-container">
        {filteredMails.map((element) => <ShowMails key={element.mId} element={element}/>)}
      </div>
    </div>
  );
};

export default Inbox;
