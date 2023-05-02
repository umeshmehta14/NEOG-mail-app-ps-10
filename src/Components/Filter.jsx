import React from 'react'
import { useData } from '../Contexts/DataContext'

const Filter = () => {
  const {dispatch, state:{showUnread, showStarred}} = useData();
  return (<>
      {/* <p className='filter-tag'>Filters</p> */}
    <fieldset className='filter-box'>
<legend>Filters</legend>
      <form>
      <label className='inp-label' htmlFor='unread-mail'>
        <input type="checkbox" checked={showUnread} id="unread-mail" onChange={()=>dispatch({type:"FILTER_BY", value:"unread"})} />
        Show unread emails
      </label>
      <label className='inp-label' htmlFor='starred-mail'>
        <input type="checkbox" checked={showStarred} id="starred-mail" onChange={()=> dispatch({type:"FILTER_BY", value:"isStarred"})} />
        Show starred emails
      </label>
      </form>
    </fieldset>
  </>
  )
}

export default Filter
