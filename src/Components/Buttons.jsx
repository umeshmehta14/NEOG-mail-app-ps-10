import React from "react";
import { useData } from "../Contexts/DataContext";
import { useNavigate } from "react-router-dom";


const Buttons = ({element,clicked}) => {
    const navigate = useNavigate();
    const {dispatch} = useData();
    const {mId,isSpam, unread} = element;
  return (
    <div className="btn-box">
      <button className="btn red"
          onClick={() => {
            dispatch({ type: "DELETE_ITEM", item: element });
            clicked ? navigate("/"):"";
        }}
        >
          Delete
        </button>
      <button className="btn yellow" onClick={() => dispatch({ type: "READ_ITEM", id: mId })}>
        {unread ? "Mark as Read" : "Mark as Unread"}
      </button>
      <button className="btn green" onClick={() => dispatch({ type: "SPAM_DATA", id: mId })}>
        {isSpam ? "Spam Reported" : "Report Spam"}
      </button>
    </div>
  );
};

export default Buttons;
