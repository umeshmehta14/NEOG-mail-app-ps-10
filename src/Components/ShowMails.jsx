import React from 'react'
import { useData } from '../Contexts/DataContext';
import { NavLink } from "react-router-dom";
import Buttons from "../Components/Buttons";
import {AiOutlineStar,AiFillStar} from "react-icons/ai";

const ShowMails = ({element,clicked}) => {
    const {dispatch} = useData();
    const { mId, subject, content, isStarred,unread } = element;
    return (
      <div key={mId} className={`mail-box ${!unread ? "bg-white":""}`}>
        <div className="upper">
        <h2 className='mail-heading'>Subject:{subject}</h2>
        <button
        title={isStarred ? "Starred" : "Not Starred"}
        className={`star-btn ${isStarred ? "yellow":""} ${!unread ? "bg-white":""}`} 
        onClick={() => dispatch({ type: "STAR_DATA", id: mId })}>
          {isStarred ? <AiFillStar/> : <AiOutlineStar/>}
        </button>
        </div>
        <p className='mail-content'>{content}</p>
        <div className="lower">
        {!clicked && <NavLink className="view-link" to={`/viewdetails/${mId}`}>View Details</NavLink>}
        <Buttons element={element} clicked={clicked}/>
        </div>
      </div>
  )
}

export default ShowMails
