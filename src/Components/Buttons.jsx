import React from "react";
import { useData } from "../Contexts/DataContext";


const Buttons = ({element}) => {
    const {dispatch} = useData();
    const {mId,isSpam, unread, isDeleted} = element;
  return (
    <div className="btn-box">
       <button className="btn red"
          onClick={() => {
            dispatch({ type: "DELETE_ITEM", id: mId });
        }}
        >
          {!isDeleted ?"Delete": "Restore"}
        </button>

      <button className="btn yellow" onClick={() => dispatch({ type: "READ_ITEM", id: mId })}>
        {unread ? "Mark as Read" : "Mark as Unread"}
      </button>
      <button className="btn green" onClick={() => dispatch({ type: "SPAM_DATA", id: mId })}>
        {isSpam ? "Report not Spam" : "Report Spam"}
      </button>
    </div>
  );
};

export default Buttons;
