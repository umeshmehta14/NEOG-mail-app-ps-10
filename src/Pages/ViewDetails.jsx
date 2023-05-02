import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../Contexts/DataContext";
import ShowMails from "../Components/ShowMails";

const ViewDetails = () => {
  const { mailId } = useParams();
  const {
    state: { mailsData }} = useData();
  const selectedData = mailsData.find(({ mId }) => mId === mailId);

  return (
    <div className="container">
      <div className="mail-container">
      <ShowMails element={selectedData} clicked={true}/>
      </div>
    </div>
  );
};

export default ViewDetails;
