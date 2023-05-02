import React from "react";
import { useData } from "../Contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead, MdOutlineReportOff } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiSpam2Fill } from "react-icons/ri";

const Buttons = ({ element, clicked }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const { mId, isSpam, unread, isDeleted } = element;
  return (
    <div className="btn-box">
      <button
        className={`btn red ${isDeleted && "green"}`}
        title={!isDeleted ? "Delete" : "Restore"}
        onClick={() => {
          dispatch({ type: "DELETE_ITEM", id: mId });
          clicked ? navigate("/") : "";
        }}
      >
        {!isDeleted ? <AiFillDelete /> : <FaTrashRestoreAlt />}
      </button>

      <button
        className={`btn orange ${!unread ? "blue" : ""}`}
        title={unread ? "Mark as Read" : "Mark as Unread"}
        onClick={() => dispatch({ type: "READ_ITEM", id: mId })}
      >
        {unread ? <MdOutlineMarkEmailRead /> : <IoMailUnreadOutline />}
      </button>
      <button
        className="btn"
        title={isSpam ? "Report not Spam" : "Spam"}
        onClick={() => {
          dispatch({ type: "SPAM_DATA", id: mId });
          clicked ? navigate("/") : "";
        }}
      >
        {isSpam ? <MdOutlineReportOff /> : <RiSpam2Fill />}
      </button>
    </div>
  );
};

export default Buttons;
