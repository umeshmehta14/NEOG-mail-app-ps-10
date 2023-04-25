import React from 'react'
import { useData } from '../Contexts/DataContext'
import ShowMails from '../Components/ShowMails';

const Spam = () => {
  const {filteredData} = useData();
  const Spam = filteredData.filter(({isSpam}) => isSpam);
    return (
    <div className="container ">
      <h2 className='heading'>Total Spam:{Spam.length}</h2>

    {Spam.length > 0 && <div className='mail-container'>
      {
        Spam.map((element)=> {
          return <ShowMails key={element.mId} element={element} />
            })
          }
    </div>}
          </div>
  )
}

export default Spam
