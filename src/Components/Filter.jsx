import React from 'react'
import { useData } from '../Contexts/DataContext'

const Filter = () => {
  const {dispatch, state:{showUnread, showStarred}} = useData();
  return (<>
      <p className='filter-tag'>Filters</p>
    <div className='filter-box'>
      <form>
      <label htmlFor='unread-mail'>
        <input type="checkbox" checked={showUnread} id="unread-mail" onChange={()=>dispatch({type:"TOGGLE_UNREAD"})} />
        Show unread emails
      </label>
      <label htmlFor='starred-mail'>
        <input type="checkbox" checked={showStarred} id="starred-mail" onChange={()=> dispatch({type:"TOGGLE_STAR"})} />
        Show starred emails
      </label>
      </form>
    </div>
  </>
  )
}

export default Filter
