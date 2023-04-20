import React from 'react'
import { useData } from '../Contexts/DataContext';

const Trash = () => {
  const {state:{TrashData}} = useData();
  return (
    <div className='container mail-container'>
      <h2 className='heading'>Total Trash:{TrashData.length}</h2>
      {TrashData.length > 0 &&<div className='mail-box'>
      {
            TrashData.map(({mId,subject, content})=> {
                return <div key={mId}>
                    <h2>Subject:{subject}</h2>
                    <p className='mail-content'>{content}</p>
                </div>
            })
        }
        </div>}
    </div>
  )
}

export default Trash
