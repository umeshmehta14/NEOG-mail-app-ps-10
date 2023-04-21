import React from 'react'
import { useData } from '../Contexts/DataContext'

const Spam = () => {
  const {state:{mailsData}} = useData();
  const spamData = mailsData.filter(({isSpam})=> isSpam);
  return (
    <div className="container ">
      <h2 className='heading'>Total Spam:{spamData.length}</h2>

    {spamData.length > 0 && <div className='mail-container'>
      {
        spamData.map(({mId,subject, content})=> {
          return <div className='mail-box' key={mId}>
                    <h2 className='upper'>Subject:{subject}</h2>
                    <p className='mail-content'>{content}</p>
                </div>
            })
          }
    </div>}
          </div>
  )
}

export default Spam
