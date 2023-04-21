import React from 'react'
import { useData } from '../Contexts/DataContext';
import { NavLink } from "react-router-dom";
import Buttons from "../Components/Buttons";

const ShowMails = ({element,clicked}) => {
    const {dispatch} = useData();
    const { mId, subject, content, isStarred,unread } = element;
    return (
      <div key={mId} className={`mail-box ${!unread ? "bg-white":""}`}>
        <div className="upper">
        <h2>Subject:{subject}</h2>
        <button className='star-btn' onClick={() => dispatch({ type: "STAR_DATA", id: mId })}>
          {isStarred ? "Unstar" : "Star"}
        </button>
        </div>
        <p className='mail-content'>{content}</p>
        <div className="lower">
        {!clicked && <NavLink to={`/viewdetails/${mId}`}>View Details</NavLink>}
        <Buttons element={element} clicked={clicked}/>
        </div>
      </div>
  )
}

export default ShowMails
