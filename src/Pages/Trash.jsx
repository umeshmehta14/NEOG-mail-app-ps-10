import React from 'react'
import { useData } from '../Contexts/DataContext';

const Trash = () => {
  const {state:{TrashData},dispatch} = useData();
  return (
    <div className='container '>
      <h2 className='heading'>Total Trash:{TrashData.length}</h2>
      {TrashData.length > 0 &&<div className='mail-container'>
      {
            TrashData.map((mail)=> {
              const {mId,subject, content} = mail;
                return <div className='mail-box' key={mId}>
                    <h2 className='upper'>Subject:{subject}</h2>
                    <p className='mail-content '>{content}</p>
                    <button onClick={()=>dispatch({type:"RESTORE_DELETE", mail:mail})} className="btn green">Restore</button>
                </div>
            })
        }
        </div>}
    </div>
  )
}

export default Trash
