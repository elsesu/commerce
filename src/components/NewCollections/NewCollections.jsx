import React from 'react'
import './style.css'
import new_collections from '../../assets/new_collections'

import Item from '../items/Item'

const NewCollections = () => {

  return (
    <div className='new-collections'>
      <h1>Latest Additions</h1>
      <hr />
      <div className='collections-item'>
      {new_collections.map((item)=>(<Item value={item}/>))}
      </div>
     
    </div>
  )
}

export default NewCollections
